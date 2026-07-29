/**
 * Balita Belajar - Animal Flashcard Logic
 * Renders animal cards and handles click interactions with pop-up modal
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
  // Show Pop-Up Modal with floating transparent animal PNG illustration
  showModalHTML(`
    <img src="${animal.image}" alt="${animal.name}">
    <div class="modal-title">${animal.name}</div>
    <div class="modal-hint">🔊 Tekan untuk tutup</div>
  `);

  // Play real animal sound, then speak animal name.
  // Automatically closes pop-up modal when sound & speech finish!
  playAnimalSound(animal.id, animal.sound, function() {
    hideModal();
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  renderCards();
});
