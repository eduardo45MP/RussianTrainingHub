# `pages/vocabulary/` – Vocabulary Module

## Overview

The `vocabulary` module is designed to support interactive vocabulary games that reinforce word recognition, semantic memory, and typing accuracy in Russian. It complements other training modules (like typing and conjugation) by focusing on whole-word learning, grouped by difficulty level or thematic category (e.g. family, time, emotions).

---

## Current Status

This module includes a fully functional basic typing mode.

### `index.js`

```js
// File: pages/vocabulary/index.js
// Description:
//   Entry point for initiating the vocabulary game from the Vocabulary module.
//   Delegates game logic to logic.js based on the selected mode.

import { startVocabularyGame } from './logic.js';

/**
 * startMode
 *
 * Starts the vocabulary game using the specified mode.
 * Acts as an interface function between the UI (or external controller)
 * and the internal logic of the vocabulary game.
 *
 * @param {string} mode - Identifier of the Vocabulary mode to be launched.
 */
export function startMode(mode) {
  startVocabularyGame(mode);
}
```

### `logic.js`

Contains the logic and UI rendering for the `"basic"` mode (typing challenge). Words are selected from the `RUSSIAN_WORDS` dataset and shuffled before being presented one-by-one to the user.

---

## Implemented Feature

### ✅ **Typing Challenge (`basic` mode)**

* Users are shown the English meaning of a word and must type the corresponding Russian word using their Latin keyboard.
* Input is validated in real-time.
* Word list is shuffled at the start.
* Supports level selection via dropdown (`Level 1`–`5`).
* Feedback provided instantly (✅ / ❌).

---

## Planned Features

The following modes are planned but not yet implemented:

* **Flashcards**: Reveal Russian word on flip.
* **Multiple Choice**: Select the right answer among distractors.
* **Fill-in-the-Blank**: Use words in sentence context.
* **Audio Mode**: Match transcription to audio clip.
* **Timed Practice**: Add time pressure for advanced learners.

---

## Integration

Vocabulary mode can be triggered from the main menu by calling:

```js
import { startMode as startVocabularyMode } from './vocabulary/index.js';
startVocabularyMode('basic');
```

This should replace any placeholder `alert()` once connected.

---

## Dependencies

* [`RUSSIAN_WORDS`](../../data/char-map.js): Provides all vocabulary data grouped by level.
* [`shuffleArray`](../../utils/shuffle.js): Used to randomise word order per session.
* CSS from `assets/css/style.css`: Ensures consistent UI styling.

---

## Contribution Guidelines

* Add new modes as functions inside `logic.js`.
* Keep UI rendering within the `#app` container.
* Respect modular structure and use pure functions where possible.
* New games should use existing data structures when possible.
* Extend `RUSSIAN_WORDS` or create new data files (`verbs.js`, `phrases.js`) if needed.

---

## Status Summary

| Component        | Status            |
| ---------------- | ----------------- |
| File structure   | ✅ Complete        |
| Game logic       | ✅ Basic mode done |
| UI rendering     | ✅ Functional      |
| Data integration | ✅ Working         |
| Advanced modes   | 🚧 Planned        |
