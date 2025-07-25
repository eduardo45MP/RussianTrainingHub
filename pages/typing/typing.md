# `pages/typing/` – Typing Games

## Overview

The `typing` module provides the core functionality for character-based and word-based Russian typing practice. It focuses on training users to mentally map between Cyrillic and Latin (ABNT2) keyboard layouts and reinforcing Russian orthography through repetition and feedback.

---

## Files

### `index.js`

#### Purpose

Acts as the entry point for launching a typing game from the main menu. It exposes the `startMode` function, which delegates the game logic to `logic.js`.

#### Exported Function

```js
startMode(mode: string): void
```

* **mode**: `"latin"`, `"cyrillic"`, or `"words"`
* Launches the game in the specified direction:

  * `"latin"`: Show Latin character, expect Cyrillic input.
  * `"cyrillic"`: Show Cyrillic character, expect Latin input.
  * `"words"`: Show full Russian word, expect same word typed in Russian (copy challenge).

---

### `logic.js`

#### Purpose

Implements the complete logic and UI for the typing modes. Handles rendering, user input, challenge cycling, and feedback display.

#### Core Variables

* **`currentChar` / `currentWord`**: Stores the current challenge (single char or word) shown to the user.
* **`mode`**: Determines which logic branch is active.

---

## Main Functions

---

### `startTypingGame(mode: string): void`

Initialises the game interface and logic for the chosen mode. Injects game HTML into the `#app` container, adds event listeners, and starts the first challenge.

* UI Elements:

  * Game title (shows mode)
  * Challenge display (`character` or `word`)
  * Input field
  * Feedback label
  * Back to Menu button

---

### `nextChallenge(mode: string): void`

Determines the next challenge and updates the UI accordingly:

* `"latin"`: Randomly selects a Latin char from `MAPA_CARACTERES`, expects corresponding Cyrillic.
* `"cyrillic"`: Randomly selects a Cyrillic char from `MAPA_CARACTERES`, expects Latin input.
* `"words"`: Randomly selects a full Russian word from `RUSSIAN_WORDS[1]`, and expects the same word typed back (copying exercise).

Resets input and clears feedback.

---

### `checkAnswer(mode: string): void`

Compares user input against the correct answer:

* `"latin"`: Validates using `REVERSE_MAP`.

* `"cyrillic"`: Validates using `MAPA_CARACTERES`.

* `"words"`: Validates against the exact word shown.

* ✅ Shows “Correct” feedback and advances to the next challenge after a delay.

* ❌ Shows “Try again” feedback.

Includes console logs for input and expected result for debugging.

---

## Dependencies

* [`MAPA_CARACTERES`](../../data/char-map.js)
* [`REVERSE_MAP`](../../data/char-map.js)
* [`RUSSIAN_WORDS`](../../data/char-map.js) — only for `"words"` mode.

---

## Planned Extensions

* Timed typing sessions
* Scoring and accuracy metrics
* Hints system for new learners
* Responsive design and mobile input support

---

## Status

| Mode        | Status                         |
| ----------- | ------------------------------ |
| `latin`     | ✅ Working                      |
| `cyrillic`  | ✅ Working                      |
| `words`     | ✅ Rudimentary functional       |
| Full words  | 🔧 No scoring or hinting yet   |
| Game polish | 🔧 Visual enhancements pending |