/**
 * Balita Belajar - Animal Flashcard & 5-Second Video Logic
 * Renders animal cards and handles 5-second animated video playback with environment backgrounds
 */

function renderCards() {
  var t = getTranslations();
  var grid = document.getElementById('card-grid');
  if (!grid) return;

  grid.innerHTML = '';

  // Update page title and back button
  var titleEl = document.getElementById('page-title');
  if (titleEl) titleEl.textContent = t.animalsTitle;

  var backBtn = document.getElementById('back-btn');
  if (backBtn) backBtn.textContent = t.back;

  // Create a card for each animal
  t.animals_data.forEach(function(animal, index) {
    var card = document.createElement('div');
    card.className = 'card';
    card.dataset.animal = animal.id;
    card.style.animationDelay = (index * 0.08) + 's';
    card.classList.add('animate-pop');

    var img = document.createElement('img');
    img.src = animal.image;
    img.alt = animal.name;
    img.draggable = false;

    var name = document.createElement('div');
    name.className = 'name';
    name.textContent = animal.name;

    card.appendChild(img);
    card.appendChild(name);

    // Click handler
    card.addEventListener('click', function() {
      handleAnimalClick(card, animal);
    });

    grid.appendChild(card);
  });
}

function getEnvironmentTheme(animalId) {
  var water = ['lumba_lumba', 'bebek', 'katak'];
  var jungle = ['singa', 'harimau', 'gajah', 'jerapah', 'monyet', 'serigala', 'beruang', 'panda'];
  var sky = ['burung', 'burung_hantu', 'ayam'];
  
  if (water.indexOf(animalId) !== -1) return 'env-ocean';
  if (jungle.indexOf(animalId) !== -1) return 'env-jungle';
  if (sky.indexOf(animalId) !== -1) return 'env-sky';
  return 'env-garden';
}

function handleAnimalClick(cardEl, animal) {
  var envClass = getEnvironmentTheme(animal.id);

  // Show Pop-Up Modal with 5-second video container & play button (no auto-close)
  showModalHTML(`
    <div class="video-container ${envClass}" id="video-box-${animal.id}">
      <div class="video-environment-bg"></div>
      <div class="video-stage">
        <img src="${animal.image}" alt="${animal.name}" class="animal-video-img" id="animal-img-${animal.id}">
      </div>
      <div class="video-progress-bar"><div class="video-progress-fill" id="progress-${animal.id}"></div></div>
    </div>

    <div class="modal-title">${animal.name}</div>

    <div class="video-controls">
      <button class="play-video-btn" onclick="start5SecAnimalVideo('${animal.id}', '${animal.sound}')">
        ▶️ Putar Video 5 Detik
      </button>
    </div>

    <div class="modal-hint">👆 Ketuk di luar untuk menutup</div>
  `);

  // Play animal sound when opened
  playAnimalSound(animal.id, animal.sound);

  // Auto trigger initial 5-second video animation
  start5SecAnimalVideo(animal.id, animal.sound);
}

function start5SecAnimalVideo(animalId, speechText) {
  var videoBox = document.getElementById('video-box-' + animalId);
  var progressFill = document.getElementById('progress-' + animalId);

  if (videoBox) {
    videoBox.classList.remove('playing-5s');
    void videoBox.offsetWidth; // Force reflow
    videoBox.classList.add('playing-5s');
  }

  if (progressFill) {
    progressFill.style.transition = 'none';
    progressFill.style.width = '0%';
    setTimeout(function() {
      progressFill.style.transition = 'width 5s linear';
      progressFill.style.width = '100%';
    }, 50);
  }

  // Play real audio sound & speech
  playAnimalSound(animalId, speechText);

  // End video animation state after 5 seconds
  setTimeout(function() {
    if (videoBox) {
      videoBox.classList.remove('playing-5s');
    }
  }, 5000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  renderCards();
});
