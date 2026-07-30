/**
 * Balita Belajar - Core Application Logic
 * Handles language switching, real animal MP3 sounds, Web Speech API, Pop-up Modal,
 * Canvas Background Removal for images, and page initialization
 */

/* ── Global State & Audio Controllers ── */

var currentAudio = null;
var pendingSpeechTimeout = null;
var modalAutoCloseTimeout = null;
var modalEl = null;
var transparentImageCache = {};

/**
 * Stop ALL ongoing speech, HTML5 audio, and pending timeouts immediately.
 * Prevents previous card sounds/speech from overlapping when a new card is clicked.
 */
function stopAllAudioAndSpeech() {
  // 1. Cancel Web Speech API
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }

  // 2. Clear pending speech timeout
  if (pendingSpeechTimeout) {
    clearTimeout(pendingSpeechTimeout);
    pendingSpeechTimeout = null;
  }

  // 3. Stop HTML5 Audio if playing
  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    } catch (e) {}
    currentAudio = null;
  }
}

/**
 * Client-side Canvas Background Removal.
 * Removes the white square background from animal images so the cartoon character
 * floats transparently over the blurred pop-up modal!
 */
function makeImageTransparent(imgSrc, callback) {
  if (transparentImageCache[imgSrc]) {
    callback(transparentImageCache[imgSrc]);
    return;
  }

  var img = new Image();
  img.onload = function() {
    try {
      var canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth || 512;
      canvas.height = img.naturalHeight || 512;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imgData.data;

      // Scan pixels and make white/near-white transparent (R>220, G>220, B>220)
      for (var i = 0; i < data.length; i += 4) {
        var r = data[i];
        var g = data[i + 1];
        var b = data[i + 2];

        if (r > 220 && g > 220 && b > 220) {
          data[i + 3] = 0; // Set Alpha = 0
        }
      }

      ctx.putImageData(imgData, 0, 0);
      var transparentUrl = canvas.toDataURL('image/png');
      transparentImageCache[imgSrc] = transparentUrl;
      callback(transparentUrl);
    } catch (e) {
      callback(imgSrc);
    }
  };
  img.onerror = function() {
    callback(imgSrc);
  };
  img.src = imgSrc;
}

/* ── Toddler Pop-Up Modal Manager ── */

function getOrCreateModal() {
  if (modalEl) return modalEl;

  modalEl = document.createElement('div');
  modalEl.id = 'card-modal';
  modalEl.className = 'card-modal';
  modalEl.style.display = 'none';

  modalEl.innerHTML = `
    <div class="modal-backdrop"></div>
    <div class="modal-content animate-pop">
      <div id="modal-body" class="modal-body"></div>
    </div>
  `;

  // Tap backdrop or close elements to close modal
  modalEl.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-backdrop') || e.target.closest('.modal-close-btn') || e.target.closest('.modal-hint')) {
      hideModal();
    }
  });

  document.body.appendChild(modalEl);
  return modalEl;
}

function showModalHTML(htmlContent) {
  // Clear any existing 6-second auto-close timer
  if (modalAutoCloseTimeout) {
    clearTimeout(modalAutoCloseTimeout);
    modalAutoCloseTimeout = null;
  }

  var modal = getOrCreateModal();
  var body = document.getElementById('modal-body');
  if (body) body.innerHTML = htmlContent;
  modal.style.display = 'flex';

  // Automatically close pop-up modal after 6 seconds from when it was opened!
  modalAutoCloseTimeout = setTimeout(function() {
    hideModal();
  }, 6000);
}

function hideModal() {
  // Clear 7-second auto-close timer on close
  if (modalAutoCloseTimeout) {
    clearTimeout(modalAutoCloseTimeout);
    modalAutoCloseTimeout = null;
  }
  stopAllAudioAndSpeech();
  if (modalEl) {
    modalEl.style.display = 'none';
  }
}

/* ── Language Management ── */

function getLanguage() {
  return localStorage.getItem('balita-lang') || 'id';
}

function setLanguage(lang) {
  localStorage.setItem('balita-lang', lang);
  applyTranslations();
}

function getTranslations() {
  return TRANSLATIONS[getLanguage()];
}

/* ── Web Speech API (Smooth & Friendly for Toddlers) ── */

function speak(text, lang, onEndCallback) {
  stopAllAudioAndSpeech();

  if (!('speechSynthesis' in window)) {
    if (typeof onEndCallback === 'function') onEndCallback();
    return;
  }

  var utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang || getTranslations().speechLang;
  utterance.rate = 0.60;   // Slow, smooth, continuous pronunciation for toddlers
  utterance.pitch = 1.20;  // Warm, friendly pitch
  utterance.volume = 1.0;

  utterance.onend = function() {
    if (typeof onEndCallback === 'function') {
      onEndCallback();
    }
  };

  utterance.onerror = function() {
    if (typeof onEndCallback === 'function') {
      onEndCallback();
    }
  };

  window.speechSynthesis.speak(utterance);
}

/* ── Real Animal Audio Player ── */

/**
 * Play real animal recording from local MP3 file (sounds/[animalId].mp3),
 * then speak the animal name in the active language slowly and smoothly.
 * Automatically triggers onCompleteCallback when speech finishes!
 * @param {string} animalId - The animal identifier (e.g. 'kucing')
 * @param {string} speechText - Animal name phrase to speak (e.g. "Kucing")
 * @param {Function} onCompleteCallback - Called when sound + speech finish
 */
function playAnimalSound(animalId, speechText, onCompleteCallback) {
  // 1. Stop all previous audio/speech instantly!
  stopAllAudioAndSpeech();

  var soundPath = 'sounds/' + animalId + '.mp3';
  var audio = new Audio(soundPath);
  currentAudio = audio;
  audio.volume = 1.0;

  var hasSpoken = false;

  function speakName() {
    if (hasSpoken) return;
    hasSpoken = true;
    if (currentAudio) {
      currentAudio.pause();
    }
    if (pendingSpeechTimeout) {
      clearTimeout(pendingSpeechTimeout);
      pendingSpeechTimeout = null;
    }
    speak(speechText, null, function() {
      if (typeof onCompleteCallback === 'function') {
        onCompleteCallback();
      }
    });
  }

  // 2. Strict 3-second limit: speak animal name after 3 seconds at most!
  pendingSpeechTimeout = setTimeout(speakName, 3000);

  // When real animal audio finishes naturally, speak animal name immediately
  audio.onended = function() {
    speakName();
  };

  // If audio fails to play/load, fallback to speaking animal name immediately
  audio.onerror = function() {
    speakName();
  };

  // Play real MP3 sound
  var playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.catch(function(error) {
      speakName();
    });
  }
}

/* ── Translation Application ── */

function applyTranslations() {
  var t = getTranslations();
  var lang = getLanguage();

  // Set RTL for Arabic
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang === 'ar' ? 'ar' : (lang === 'en' ? 'en' : 'id');

  // Update common elements by ID
  var mappings = {
    'greeting': t.greeting,
    'choose-text': t.choose,
    'btn-animals': t.animals,
    'btn-colors': t.colors
  };

  for (var id in mappings) {
    var el = document.getElementById(id);
    if (el) el.textContent = mappings[id];
  }

  // Update page-specific titles
  var pageTitle = document.getElementById('page-title');
  if (pageTitle) {
    if (window.location.pathname.indexOf('hewan') !== -1) {
      pageTitle.textContent = t.animalsTitle;
    } else if (window.location.pathname.indexOf('warna') !== -1) {
      pageTitle.textContent = t.colorsTitle;
    }
  }

  // Update back button
  var backBtn = document.getElementById('back-btn');
  if (backBtn) {
    backBtn.textContent = t.back;
  }

  // Update language switcher
  updateLangSwitch();
}

/* ── Language Switcher ── */

function updateLangSwitch() {
  var switchBtn = document.getElementById('lang-switch');
  if (!switchBtn) return;

  var flags = { id: '🇮🇩', en: '🇬🇧', ar: '🇸🇦' };
  var current = getLanguage();

  // Display the flag of the CURRENTLY selected language!
  switchBtn.textContent = flags[current] || '🇮🇩';
  switchBtn.title = 'Bahasa: ' + (TRANSLATIONS[current] ? TRANSLATIONS[current].langName : 'Indonesia');
}

function initLangSwitch() {
  var switchBtn = document.getElementById('lang-switch');
  if (!switchBtn) return;

  switchBtn.addEventListener('click', function() {
    hideModal();
    var langs = ['id', 'en', 'ar'];
    var current = getLanguage();
    var nextIdx = (langs.indexOf(current) + 1) % langs.length;
    var nextLang = langs[nextIdx];

    setLanguage(nextLang);

    if (typeof renderCards === 'function') {
      renderCards();
    }
  });
}

/* ── Language Picker ── */

function initLangPicker() {
  var picker = document.getElementById('lang-picker');
  var menu = document.getElementById('main-menu');
  if (!picker || !menu) return;

  if (localStorage.getItem('balita-lang')) {
    picker.style.display = 'none';
    menu.style.display = 'flex';
    applyTranslations();
    return;
  }

  var langBtns = document.querySelectorAll('.lang-btn');
  for (var i = 0; i < langBtns.length; i++) {
    langBtns[i].addEventListener('click', function() {
      hideModal();
      setLanguage(this.dataset.lang);
      picker.style.display = 'none';
      menu.style.display = 'flex';

      var menuBtns = menu.querySelectorAll('.menu-btn');
      for (var j = 0; j < menuBtns.length; j++) {
        menuBtns[j].style.animationDelay = (j * 0.15) + 's';
        menuBtns[j].classList.add('animate-pop');
      }
    });
  }
}

/* ── Page Initialization ── */

document.addEventListener('DOMContentLoaded', function() {
  applyTranslations();
  initLangPicker();
  initLangSwitch();
});
