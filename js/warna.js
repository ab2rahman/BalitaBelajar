/**
 * Balita Belajar - Color Flashcard Logic
 * Renders color cards and handles click interactions with pop-up modal
 */

function renderCards() {
  var t = getTranslations();
  var grid = document.getElementById('card-grid');
  if (!grid) return;

  grid.innerHTML = '';

  // Update page title and back button
  var titleEl = document.getElementById('page-title');
  if (titleEl) titleEl.textContent = t.colorsTitle;

  var backBtn = document.getElementById('back-btn');
  if (backBtn) backBtn.textContent = t.back;

  // Create a card for each color
  t.colors_data.forEach(function(color, index) {
    var card = document.createElement('div');
    card.className = 'card color-card';
    card.style.animationDelay = (index * 0.08) + 's';
    card.classList.add('animate-pop');

    var circle = document.createElement('div');
    circle.className = 'color-circle';
    circle.style.backgroundColor = color.hex;

    var name = document.createElement('div');
    name.className = 'name';
    name.textContent = color.name;

    card.appendChild(circle);
    card.appendChild(name);

    // Click handler
    card.addEventListener('click', function() {
      var colors = t.colors_data;
      showFlashcardDeck(
        colors,
        index,
        function(col) {
          var objectHTML = '';
          if (col.objectImage) {
            objectHTML = `
              <img src="${col.objectImage}" alt="${col.objectLabel || col.name}" class="color-object-img"
                   onerror="this.style.display='none'">
              <div class="color-object-label">${col.objectLabel || ''}</div>
            `;
          }
          return `
            <div class="color-circle-large" style="background-color: ${col.hex}"></div>
            <div class="modal-title">${col.name}</div>
            ${objectHTML}
            <div class="modal-hint">👆 Ketuk layar untuk menutup</div>
          `;
        },
        function(col) {
          showColorSplash(col.hex);
          speak(col.sound);
        }
      );
    });

    grid.appendChild(card);
  });
}

function showColorSplash(hex) {
  var splash = document.getElementById('color-splash');
  if (!splash) return;

  splash.style.display = 'block';
  splash.style.backgroundColor = hex;
  splash.classList.remove('active');

  // Force reflow
  void splash.offsetWidth;

  splash.classList.add('active');

  setTimeout(function() {
    splash.classList.remove('active');
    splash.style.display = 'none';
  }, 600);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  renderCards();
});
