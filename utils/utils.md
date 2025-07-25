# `utils/` – Utility Functions

## Overview

The `utils/` directory is dedicated to storing utility functions that provide reusable logic across various parts of the application. These functions are general-purpose and do not rely on specific UI elements or game modules, making them ideal for abstraction and maintenance.

---

## Current Files

### `shuffle.js`

```js
// utils/shuffle.js
/**
 * shuffleArray
 *
 * Shuffles an array in place using the Fisher–Yates algorithm.
 *
 * @param {Array} array - The array to shuffle.
 * @returns {Array} The shuffled array.
 */
export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
```

#### Purpose

This file implements an array shuffling function, commonly used in:

* Randomising question orders in vocabulary or declension games.
* Presenting characters or words in unpredictable sequences during typing drills.
* Shuffling answer choices in multiple choice quizzes.

---

## Integration Plans

Once implemented, this utility will likely be used in:

* `/pages/vocabulary/` for quiz randomisation.
* `/pages/typing/` when generating random sequences of full words.
* `/pages/conjugation/` and `/pages/declension/` for ordering drills.
* Any mini-game logic that benefits from non-deterministic order.

---

## Contribution Guidelines

* Utilities should be pure functions whenever possible.
* Do **not** directly manipulate the DOM.
* Group related utilities (e.g. array, string, math) in their own files as the app scales.
* Keep all functions individually exportable and documented with JSDoc-style comments.

---

## Status Summary

| File         | Description              | Status |
| ------------ | ------------------------ | ------ |
| `shuffle.js` | Array shuffling function | ✅ Done |
| `utils.md`   | Module documentation     | ✅ Done |