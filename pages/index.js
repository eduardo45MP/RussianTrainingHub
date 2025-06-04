// pages/index.js

import { startMode } from './typing/index.js'; // Importa o jogo base

const app = document.getElementById('app');

// Função que renderiza o menu principal
function renderMenu() {
  app.innerHTML = `
    <div id="menu">
      <h2>Select a Game Category</h2>
      <button data-mode="latin">Typing: Latin → Cyrillic</button>
      <button data-mode="cyrillic">Typing: Cyrillic → Latin</button>
      <button data-mode="words">Typing: Words</button>
      <button onclick="alert('Declension games coming soon!')">Declension Games</button>
      <button onclick="alert('Conjugation games coming soon!')">Conjugation Games</button>
      <button onclick="alert('Vocabulary games coming soon!')">Vocabulary Games</button>
      <button onclick="alert('Thanks for playing!')">Exit</button>
    </div>
  `;

  document.querySelectorAll('button[data-mode]').forEach(button => {
    button.addEventListener('click', () => {
      const mode = button.getAttribute('data-mode');
      startGame(mode);
    });
  });
}

// Função que inicia o jogo e delega para o modo escolhido
function startGame(mode) {
  startMode(mode); // Agora corretamente definida em typing/index.js
}

window.returnToMenu = renderMenu;

renderMenu();