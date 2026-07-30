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

    card.appendChild(numberBadge);

    card.addEventListener('click', function() {
      var numbers = t.numbers_data;
      showFlashcardDeck(
        numbers,
        index,
        function(n) {
          return `
            <div class="number-circle-large" style="background-color: ${n.color || '#FF6B6B'}">${n.number}</div>
            <div class="modal-hint">👆 Ketuk layar untuk menutup</div>
          `;
        },
        function(n) {
          var speechText = n.soundNumber || n.sound || n.number;
          speak(speechText);
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
