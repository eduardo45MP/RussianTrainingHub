// File: pages/typing/logic.js
// Description:
//   Core logic for the typing game modes.
//   Handles rendering the game UI, presenting challenges,
//   receiving user input, validating answers, and providing feedback.

import { MAPA_CARACTERES, REVERSE_MAP, RUSSIAN_WORDS } from './../../data/char-map.js';

let currentChar = '';  // Holds the current character challenge to the user
let currentWord = '';  // Holds the current word challenge for "words" mode

/**
 * startTypingGame
 *
 * Initializes and renders the typing game interface,
 * sets up event listeners, and starts the first challenge.
 *
 * @param {string} mode - The typing mode ('latin', 'cyrillic', or 'words').
 */
export function startTypingGame(mode) {
  const app = document.getElementById('app');

  if (mode === 'words') {
    startWordMode();
    return;
  }

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
    const latinChars = Object.values(MAPA_CARACTERES);
    currentChar = latinChars[Math.floor(Math.random() * latinChars.length)];
    challengeDiv.textContent = currentChar;
  } else if (mode === 'cyrillic') {
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
    correct = REVERSE_MAP[currentChar];
  } else if (mode === 'cyrillic') {
    correct = MAPA_CARACTERES[currentChar];
  }

  const feedback = document.getElementById('feedback');

  if (input === correct) {
    feedback.textContent = '✅ Correct!';
    setTimeout(() => nextChallenge(mode), 1000);
  } else if (input.length > 0) {
    feedback.textContent = '❌ Try again...';
  }

  console.log(`input: [${input}] | correct: [${correct}]`);
}

/**
 * startWordMode
 *
 * Presents a full Russian word for the user to type exactly.
 * Designed for users with Latin keyboards familiar with Russian layout.
 */
function startWordMode() {
  const app = document.getElementById('app');
  currentWord = getRandomWord();

  app.innerHTML = `
    <div class="typing-game">
      <h2>📝 Type this word in Russian</h2>
      <div class="challenge-word">${currentWord}</div>
      <input id="word-input" type="text" autocomplete="off" />
      <div id="feedback"></div>
      <button onclick="returnToMenu()">Back to Menu</button>
    </div>
  `;

  const input = document.getElementById('word-input');
  const feedback = document.getElementById('feedback');

  input.focus();
  input.addEventListener('input', () => {
    const userInput = input.value.trim();
    if (userInput === currentWord) {
      feedback.textContent = '✅ Correct!';
      setTimeout(() => startWordMode(), 1000);
    } else if (userInput.length >= currentWord.length) {
      feedback.textContent = '❌ Try again';
    } else {
      feedback.textContent = '';
    }
  });
}

/**
 * getRandomWord
 *
 * Selects a random word from RUSSIAN_WORDS.
 *
 * @returns {string} A randomly selected Russian word.
 */
function getRandomWord() {
  const levels = Object.keys(RUSSIAN_WORDS);
  const randomLevel = levels[Math.floor(Math.random() * levels.length)];
  const wordList = RUSSIAN_WORDS[randomLevel];
  return wordList[Math.floor(Math.random() * wordList.length)].word;
}
