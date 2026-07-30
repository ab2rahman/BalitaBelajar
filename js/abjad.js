/**
 * Balita Belajar - Alphabet Learning Logic (A to Z)
 * Handles alphabet card rendering with bold first letter highlight and 6-second auto-close pop-up modal
 */

function renderCards() {
  var t = getTranslations();
  var grid = document.getElementById('card-grid');
  if (!grid) return;

  grid.innerHTML = '';

  // Update page title and back button
  var titleEl = document.getElementById('page-title');
  if (titleEl) titleEl.textContent = t.alphabetTitle || '🔤 Belajar Abjad';

  var backBtn = document.getElementById('back-btn');
  if (backBtn) backBtn.textContent = t.back;

  // Render Alphabet A to Z
  t.alphabet_data.forEach(function(item, index) {
    var card = document.createElement('div');
    card.className = 'card alphabet-card';
    card.style.animationDelay = (index * 0.05) + 's';
    card.classList.add('animate-pop');

    var letterBadge = document.createElement('div');
    letterBadge.className = 'letter-badge';
    letterBadge.textContent = item.letter;
    letterBadge.style.backgroundColor = item.color || '#4D96FF';

    var word = document.createElement('div');
    word.className = 'name alphabet-word';
    word.innerHTML = item.boldWord || item.word;

    card.appendChild(letterBadge);
    card.appendChild(word);

    card.addEventListener('click', function() {
      handleAlphabetClick(card, item);
    });

    grid.appendChild(card);
  });
}

function handleAlphabetClick(cardEl, item) {
  var objectHTML = '';
  if (item.image) {
    objectHTML = `
      <img src="${item.image}" alt="${item.word}" class="alphabet-object-img" onerror="this.style.display='none'">
    `;
  }

  showModalHTML(`
    <div class="letter-circle-large" style="background-color: ${item.color || '#4D96FF'}">${item.letter}</div>
    <div class="modal-title alphabet-highlight-title">${item.boldWord || item.word}</div>
    ${objectHTML}
    <div class="modal-hint">👆 Ketuk layar untuk menutup</div>
  `);

  // Speak format e.g. "Huruf A, Apel"
  var speechText = item.sound || ("Huruf " + item.letter + ", " + item.word);
  speak(speechText);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  renderCards();
});
