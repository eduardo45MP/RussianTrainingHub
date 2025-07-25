// File: pages/index.js
// Description:
//   Main entry point of the application.
//   Renders the main menu with game category options,
//   handles user interaction for menu toggling and game mode selection,
//   and delegates game start to the appropriate module.

import { startMode as startTyping } from './typing/index.js';
import { startMode as startVocabulary } from './vocabulary/index.js';

const app = document.getElementById('app');

/**
 * renderMenu
 *
 * Renders the main menu HTML into the app container,
 * sets up event listeners for toggling submenu visibility
 * and for starting the selected game mode.
 */
function renderMenu() {
  app.innerHTML = `
    <div id="menu">
      <h2>Select a Game Category</h2>

      <button id="typing-menu-toggle">Typing Games</button>
      <div id="typing-submenu" style="display: none; margin-top: 10px;">
        <button data-mode="latin">Latin → Cyrillic</button>
        <button data-mode="cyrillic">Cyrillic → Latin</button>
        <button data-mode="words">Words</button>
      </div>

      <button id="vocab-button">Vocabulary Games</button>
      <button onclick="alert('Declension games coming soon!')">Declension Games</button>
      <button onclick="alert('Conjugation games coming soon!')">Conjugation Games</button>
      <button onclick="alert('Thanks for playing!')">Exit</button>
    </div>
  `;

  // Toggle visibility of the Typing submenu
  const toggle = document.getElementById('typing-menu-toggle');
  const submenu = document.getElementById('typing-submenu');
  toggle.addEventListener('click', () => {
    submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
  });

  // Typing submenu handlers
  document.querySelectorAll('#typing-submenu button[data-mode]').forEach(button => {
    button.addEventListener('click', () => {
      const mode = button.getAttribute('data-mode');
      startTyping(mode);
    });
  });

  // Vocabulary button handler
  document.getElementById('vocab-button').addEventListener('click', () => {
    startVocabulary('basic'); // Default to 'basic' mode for now
  });
}

/**
 * startGame
 *
 * Deprecated in favor of module-specific handlers.
 */
function startGame(mode) {
  console.warn('startGame() is deprecated. Use module-specific handlers instead.');
}

// Expose renderMenu to global scope to allow returning to menu from other pages/modules
window.returnToMenu = renderMenu;

// Initial render of the main menu on page load
renderMenu();
