# `pages/vocabulary/` – Vocabulary Module

## Overview

This module is intended to support vocabulary-focused learning games. It will include activities aimed at strengthening word recognition, semantic recall, and spelling accuracy in Russian, organised by difficulty or thematic categories (e.g. family, time, emotions).

---

## Current Status

As of now, this module is a placeholder for future development. It contains only the following stub file:

### `index.js`

```js
// ./pages/vocabulary/index.js
// Empty file for vocabulary page
```

This file exists to reserve the module namespace and ensure future compatibility with the menu routing and project structure.

---

## Planned Features

Planned vocabulary game features include:

* **Flashcards**: Users flip cards to reveal meanings or translations.
* **Multiple Choice Quizzes**: Choose the correct meaning or spelling.
* **Fill-in-the-Blank**: Type missing words in sentences.
* **Audio Pronunciation (optional)**: Listen and match or type the word.
* **Level-based Progression**: Pulls from `RUSSIAN_WORDS` (see `data/char-map.js`) or other sources.

---

## Integration

The module will eventually integrate with the game's global menu via:

```js
<button onclick="alert('Vocabulary games coming soon!')">Vocabulary Games</button>
```

and should be updated to launch real game logic once implemented.

---

## Dependencies

* Will likely reuse or extend `RUSSIAN_WORDS` from `data/char-map.js`
* UI style will match shared design in `assets/css/style.css`

---

## Contribution Guidelines

If you'd like to contribute to this module, consider starting with:

* Creating basic UI rendering in `index.js`
* Designing one vocabulary activity as a standalone mode (e.g. multiple choice)
* Loading random or level-specific words from `RUSSIAN_WORDS`

---

## Status Summary

| Component      | Status     |
| -------------- | ---------- |
| File structure | ✅ Ready    |
| Game logic     | 🚧 Pending |
| UI rendering   | 🚧 Pending |
| Data loading   | 🚧 Pending |