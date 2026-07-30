/**
 * Balita Belajar - Number Learning Logic (1 to 10)
 * Handles number card rendering and pop-up modal with 6-second auto-close
 */

function renderCards() {
  var t = getTranslations();
  var grid = document.getElementById('card-grid');
  if (!grid) return;

  grid.innerHTML = '';

  // Update page title and back button
  var titleEl = document.getElementById('page-title');
  if (titleEl) titleEl.textContent = t.numbersTitle || '🔢 Belajar Angka';

  var backBtn = document.getElementById('back-btn');
  if (backBtn) backBtn.textContent = t.back;

  // Render numbers 1 to 10
  t.numbers_data.forEach(function(num, index) {
    var card = document.createElement('div');
    card.className = 'card number-card';
    card.style.animationDelay = (index * 0.08) + 's';
    card.classList.add('animate-pop');

    var numberBadge = document.createElement('div');
    numberBadge.className = 'number-badge';
    numberBadge.textContent = num.number;
    numberBadge.style.backgroundColor = num.color || '#FF6B6B';

    var label = document.createElement('div');
    label.className = 'name';
    label.textContent = num.label;

    card.appendChild(numberBadge);
    card.appendChild(label);

    card.addEventListener('click', function() {
      handleNumberClick(card, num);
    });

    grid.appendChild(card);
  });
}

function handleNumberClick(cardEl, num) {
  var objectHTML = '';
  if (num.objectImage) {
    objectHTML = `
      <img src="${num.objectImage}" alt="${num.label}" class="number-object-img" onerror="this.style.display='none'">
    `;
  }

  showModalHTML(`
    <div class="number-circle-large" style="background-color: ${num.color || '#FF6B6B'}">${num.number}</div>
    <div class="modal-title">${num.label}</div>
    ${objectHTML}
    <div class="modal-hint">👆 Ketuk layar untuk menutup</div>
  `);

  // Speak number & item (e.g. "Satu, Satu Apel")
  speak(num.sound || num.label);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  renderCards();
});
