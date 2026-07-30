/**
 * Balita Belajar - Animal Flashcard & Real MP4 Video Loop Logic
 * Renders animal cards and handles continuous looping video playback without progress bars or play buttons
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

function handleAnimalClick(cardEl, animal) {
  var mediaHTML = '';
  if (animal.video) {
    mediaHTML = `
      <video id="real-video-${animal.id}" class="real-animal-video" autoplay loop muted playsinline>
        <source src="${animal.video}" type="video/mp4">
      </video>
    `;
  } else {
    mediaHTML = `
      <img src="${animal.image}" alt="${animal.name}" class="animal-video-img" id="animal-img-${animal.id}">
    `;
  }

  // Show Pop-Up Modal with looping video container and Replay Sound button
  showModalHTML(`
    <div class="video-container" id="video-box-${animal.id}">
      <div class="video-stage">
        ${mediaHTML}
      </div>
    </div>

    <div class="modal-title">${animal.name}</div>

    <button id="replay-sound-btn" class="replay-sound-btn">
      🔊 Putar Ulang Suara
    </button>

    <div class="modal-hint">👆 Ketuk di luar untuk menutup</div>
  `);

  // Ensure video plays continuously on loop if present
  var realVideo = document.getElementById('real-video-' + animal.id);
  if (realVideo) {
    realVideo.style.display = 'block';
    realVideo.currentTime = 0;
    realVideo.play().catch(function(err) {
      console.log('Video play error:', err);
    });
  }

  // Attach event listener for Replay Sound button
  var replayBtn = document.getElementById('replay-sound-btn');
  if (replayBtn) {
    replayBtn.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent closing modal when clicking replay
      playAnimalSound(animal.id, animal.sound);
    });
  }

  // Play real audio sound & speech
  playAnimalSound(animal.id, animal.sound);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  renderCards();
});
