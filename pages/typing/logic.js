// File: pages/typing/logic.js
// Description:
//   Core logic for the typing game modes.
//   Handles rendering the game UI, presenting challenges,
//   receiving user input, validating answers, and providing feedback.

import { MAPA_CARACTERES, REVERSE_MAP } from './../../data/char-map.js';

let currentChar = '';  // Holds the current character challenge to the user

/**
 * startTypingGame
 *
 * Initializes and renders the typing game interface,
 * sets up event listeners, and starts the first challenge.
 *
 * @param {string} mode - The typing mode ('latin' or 'cyrillic').
 */
export function startTypingGame(mode) {
  const app = document.getElementById('app');

  app.innerHTML = `
    <div id="game">
      <h2>Typing Mode: ${mode}</h2>
      <div id="challenge"></div>
      <input type="text" id="answerInput" autocomplete="off" maxlength="2" />
      <div id="feedback"></div>
      <button onclick="returnToMenu()">Back to Menu</button>
    </div>
  `;

  const input = document.getElementById('answerInput');
  input.focus();

  // Listen for user input and check the answer on every change
  input.addEventListener('input', () => checkAnswer(mode));

  nextChallenge(mode);
}

/**
 * nextChallenge
 *
 * Selects the next character to be challenged based on the current mode,
 * clears input and feedback, and updates the challenge display.
 *
 * @param {string} mode - The typing mode ('latin' or 'cyrillic').
 */
function nextChallenge(mode) {
  const challengeDiv = document.getElementById('challenge');
  const input = document.getElementById('answerInput');

  input.value = '';
  document.getElementById('feedback').textContent = '';

  if (mode === 'latin') {
    // Show a LATIN character and expect the corresponding CYRILLIC input
    const latinChars = Object.values(MAPA_CARACTERES);
    currentChar = latinChars[Math.floor(Math.random() * latinChars.length)];
    challengeDiv.textContent = currentChar;
  } else if (mode === 'cyrillic') {
    // Show a CYRILLIC character and expect the corresponding LATIN input
    const cyrillicChars = Object.keys(MAPA_CARACTERES);
    currentChar = cyrillicChars[Math.floor(Math.random() * cyrillicChars.length)];
    challengeDiv.textContent = currentChar;
  }
}

/**
 * checkAnswer
 *
 * Validates the user's input against the expected character mapping,
 * updates feedback accordingly, and triggers next challenge on success.
 *
 * @param {string} mode - The typing mode ('latin' or 'cyrillic').
 */
function checkAnswer(mode) {
  const input = document.getElementById('answerInput').value.trim().toLowerCase();
  let correct = '';

  if (mode === 'latin') {
    // Expected answer is the CYRILLIC equivalent of the shown LATIN char
    correct = REVERSE_MAP[currentChar];
  } else if (mode === 'cyrillic') {
    // Expected answer is the LATIN equivalent of the shown CYRILLIC char
    correct = MAPA_CARACTERES[currentChar];
  }

  const feedback = document.getElementById('feedback');

  if (input === correct) {
    feedback.textContent = '✅ Correct!';
    setTimeout(() => nextChallenge(mode), 1000); // Delay to show success before next
  } else if (input.length > 0) {
    feedback.textContent = '❌ Try again...';
  }

  console.log(`input: [${input}] | correct: [${correct}]`);
}
