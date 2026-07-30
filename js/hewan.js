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
      var animals = t.animals_data;
      showFlashcardDeck(
        animals,
        index,
        function(anim) {
          var mediaHTML = '';
          if (anim.video) {
            mediaHTML = `
              <video id="real-video-${anim.id}" class="real-animal-video" autoplay loop muted playsinline>
                <source src="${anim.video}" type="video/mp4">
              </video>
            `;
          } else {
            mediaHTML = `
              <img src="${anim.image}" alt="${anim.name}" class="animal-video-img" id="animal-img-${anim.id}">
            `;
          }
          return `
            <div class="video-container" id="video-box-${anim.id}">
              <div class="video-stage">
                ${mediaHTML}
              </div>
            </div>
            <div class="modal-title">${anim.name}</div>
            <div class="modal-hint">👆 Ketuk layar untuk menutup</div>
          `;
        },
        function(anim) {
          var realVideo = document.getElementById('real-video-' + anim.id);
          if (realVideo) {
            realVideo.style.display = 'block';
            realVideo.currentTime = 0;
            realVideo.play().catch(function(err) {
              console.log('Video play error:', err);
            });
          }
          playAnimalSound(anim.id, anim.sound);
        }
      );
    });

    grid.appendChild(card);
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  renderCards();
});
