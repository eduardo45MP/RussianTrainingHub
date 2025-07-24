# `pages/typing/` – Typing Games

## Overview

The `typing` module contains the logic and UI handling for character-level typing games. These games train the user to mentally map between the Cyrillic and Latin (ABNT2) keyboard layouts, improving typing speed and familiarity with Russian orthography.

---

## Files

### `index.js`

#### Purpose

Acts as the entry point for launching a typing game from the main menu. It exposes the `startMode` function which delegates to the internal logic (`logic.js`).

#### Exported Function

```js
startMode(mode: string): void
```

* **mode**: `"latin"` or `"cyrillic"`
* Launches the game in the specified direction:

  * `"latin"`: Show Latin character, expect Cyrillic input.
  * `"cyrillic"`: Show Cyrillic character, expect Latin input.

---

### `logic.js`

#### Purpose

Contains the full game loop and logic for the typing interface. It dynamically renders the game UI, presents character challenges, handles user input, evaluates answers, and gives feedback.

#### Core Components

* **`currentChar`**
  A module-scoped variable storing the currently active character the user must answer.

#### Main Functions

---

##### `startTypingGame(mode: string): void`

Initialises the game interface and logic for the chosen mode. Injects the required HTML into the `#app` container, sets up input listeners, and calls the first challenge.

* **UI elements**:

  * Title: displays current mode.
  * Challenge: shows character to be translated.
  * Input field: for user answer.
  * Feedback area: visual result of input.
  * Back to Menu button.

---

##### `nextChallenge(mode: string): void`

Selects a new random character from the mapping depending on the selected mode:

* `"latin"`: picks a Latin character from `MAPA_CARACTERES`, expects Cyrillic answer.
* `"cyrillic"`: picks a Cyrillic character key, expects Latin answer.

It also resets the input and feedback display between rounds.

---

##### `checkAnswer(mode: string): void`

Reads and sanitises the user input, then compares it with the expected answer using the appropriate mapping:

* `"latin"`: uses `REVERSE_MAP` to look up the Cyrillic counterpart.
* `"cyrillic"`: uses `MAPA_CARACTERES` to look up the Latin counterpart.

Provides:

* ✅ **Correct** feedback and automatically continues to next challenge after 1 second.
* ❌ **Try again** feedback if the input is incorrect.

Logs both `input` and `correct` values to the console for debugging.

---

## Dependencies

* **`MAPA_CARACTERES`** and **`REVERSE_MAP`** from [`data/char-map.js`](../../data/char-map.js):

  * These maps define the transliteration between Cyrillic and Latin layouts.

---

## Planned Extensions

* Integration of a `"words"` typing mode.
* Support for scoring, progress tracking, and timed sessions.
* Mobile keyboard compatibility.

---

## Status

✅ Functional core for character-based typing
🧩 `"words"` mode not yet implemented
🔧 Room for extension with animations, hints, or hints toggling