// pages/typing/logic.js

const MAPA_CARACTERES = {
  'а': 'f', 'б': ',', 'в': 'd', 'г': 'u', 'д': 'l', 'е': 't',
  'ё': '`', 'ж': 'ç', 'з': 'p', 'и': 'b', 'й': 'q', 'к': 'r',
  'л': 'k', 'м': 'v', 'н': 'y', 'о': 'j', 'п': 'g', 'р': 'h',
  'с': 'c', 'т': 'n', 'у': 'e', 'ф': 'a', 'х': '\'', 'ц': 'w',
  'ч': 'x', 'ш': 'i', 'щ': 'o', 'ъ': '[', 'ы': 's', 'ь': 'm',
  'э': ']', 'ю': '.', 'я': 'z'
};

const REVERSE_MAP = Object.fromEntries(
  Object.entries(MAPA_CARACTERES).map(([cyr, lat]) => [lat, cyr])
);

let currentChar = '';

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
  input.addEventListener('input', () => checkAnswer(mode));

  nextChallenge(mode);
}

function nextChallenge(mode) {
  const challengeDiv = document.getElementById('challenge');
  const input = document.getElementById('answerInput');
  input.value = '';
  document.getElementById('feedback').textContent = '';

  if (mode === 'latin') {
    // mostrar letra LATINA e usuário digita equivalente CIRÍLICO
    const keys = Object.values(MAPA_CARACTERES);
    currentChar = keys[Math.floor(Math.random() * keys.length)];
    challengeDiv.textContent = currentChar;
  } else if (mode === 'cyrillic') {
    // mostrar letra CIRÍLICA e usuário digita equivalente LATINO
    const keys = Object.keys(MAPA_CARACTERES);
    currentChar = keys[Math.floor(Math.random() * keys.length)];
    challengeDiv.textContent = currentChar;
  }
}

function checkAnswer(mode) {
  const input = document.getElementById('answerInput').value.trim().toLowerCase();
  let correct = '';

  if (mode === 'latin') {
    correct = REVERSE_MAP[currentChar]; // letra CIRÍLICA esperada
  } else if (mode === 'cyrillic') {
    correct = MAPA_CARACTERES[currentChar]; // letra LATINA esperada
  }

  const feedback = document.getElementById('feedback');

  if (input === correct) {
    feedback.textContent = '✅ Correct!';
    setTimeout(() => nextChallenge(mode), 1000);
  } else if (input.length > 0) {
    feedback.textContent = '❌ Try again...';
  }
}
