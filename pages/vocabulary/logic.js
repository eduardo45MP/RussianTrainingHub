// File: pages/vocabulary/logic.js
// Description:
//   Core logic for vocabulary training games.
//   Currently supports a basic typing challenge using RUSSIAN_WORDS.

import { RUSSIAN_WORDS } from './../../data/char-map.js';
import { shuffleArray } from './../../utils/shuffle.js';

let currentWord = null;
let currentLevel = 1;
let wordsQueue = [];

/**
 * startVocabularyGame
 *
 * Entry point for launching a vocabulary mode.
 *
 * @param {string} mode - The vocabulary mode (e.g. 'basic').
 */
export function startVocabularyGame(mode) {
  if (mode === 'basic') {
    startBasicTypingGame();
  } else {
    alert(`Unknown vocabulary mode: ${mode}`);
  }
}

/**
 * startBasicTypingGame
 *
 * Renders a simple UI for typing vocabulary.
 * Shows English meaning; expects Russian word as input.
 */
function startBasicTypingGame() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <div id="vocab-game">
      <h2>🧠 Vocabulary Typing</h2>
      <label for="level-select">Select Level:</label>
      <select id="level-select">
        ${Object.keys(RUSSIAN_WORDS)
          .map(level => `<option value="${level}">Level ${level}</option>`)
          .join('')}
      </select>

      <div id="question" style="margin-top: 20px; font-size: 1.3rem;"></div>
      <input type="text" id="answerInput" placeholder="Type in Russian..." autocomplete="off" />
      <div id="feedback" style="margin-top: 10px;"></div>

      <button onclick="returnToMenu()" style="margin-top: 20px;">Back to Menu</button>
    </div>
  `;

  document.getElementById('level-select').addEventListener('change', event => {
    currentLevel = parseInt(event.target.value);
    initWordQueue();
  });

  document.getElementById('answerInput').addEventListener('input', checkAnswer);

  currentLevel = parseInt(document.getElementById('level-select').value);
  initWordQueue();
}

/**
 * initWordQueue
 *
 * Loads and shuffles words for the current level.
 */
function initWordQueue() {
  wordsQueue = shuffleArray([...RUSSIAN_WORDS[currentLevel]]);
  nextWord();
}

/**
 * nextWord
 *
 * Moves to the next vocabulary word and displays the prompt.
 */
function nextWord() {
  const question = document.getElementById('question');
  const input = document.getElementById('answerInput');
  const feedback = document.getElementById('feedback');

  feedback.textContent = '';
  input.value = '';

  if (wordsQueue.length === 0) {
    question.innerHTML = '🎉 All words completed!';
    return;
  }

  currentWord = wordsQueue.pop();
  question.innerHTML = `Translate: <strong>${currentWord.translation}</strong>`;
  input.focus();
}

/**
 * checkAnswer
 *
 * Compares the typed answer with the correct Russian word.
 */
function checkAnswer() {
  const input = document.getElementById('answerInput');
  const feedback = document.getElementById('feedback');
  const userAnswer = input.value.trim().toLowerCase();
  const correctAnswer = currentWord.word.trim().toLowerCase();

  if (userAnswer === correctAnswer) {
    feedback.textContent = '✅ Correct!';
    setTimeout(nextWord, 1000);
  } else if (userAnswer.length > 0) {
    feedback.textContent = '❌ Try again...';
  }
}
