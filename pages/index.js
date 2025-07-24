// File: pages/index.js
// Description:
//   Main entry point of the application.
//   Renders the main menu with game category options,
//   handles user interaction for menu toggling and game mode selection,
//   and delegates game start to the appropriate module.

import { startMode } from './typing/index.js'; // Import the base typing game starter

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

      <button onclick="alert('Declension games coming soon!')">Declension Games</button>
      <button onclick="alert('Conjugation games coming soon!')">Conjugation Games</button>
      <button onclick="alert('Vocabulary games coming soon!')">Vocabulary Games</button>
      <button onclick="alert('Thanks for playing!')">Exit</button>
    </div>
  `;

  // Toggle visibility of the Typing submenu
  const toggle = document.getElementById('typing-menu-toggle');
  const submenu = document.getElementById('typing-submenu');
  toggle.addEventListener('click', () => {
    submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
  });

  // Attach event listeners to submenu buttons to start the game in selected mode
  document.querySelectorAll('#typing-submenu button[data-mode]').forEach(button => {
    button.addEventListener('click', () => {
      const mode = button.getAttribute('data-mode');
      startGame(mode);
    });
  });
}

/**
 * startGame
 *
 * Delegates starting the game by calling the imported startMode function
 * with the selected mode.
 *
 * @param {string} mode - The selected game mode ('latin', 'cyrillic', 'words', etc.).
 */
function startGame(mode) {
  startMode(mode);
}

// Expose renderMenu to global scope to allow returning to menu from other pages/modules
window.returnToMenu = renderMenu;

// Initial render of the main menu on page load
renderMenu();
