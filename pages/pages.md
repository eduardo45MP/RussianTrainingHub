Claro, Eduardo. Aqui está a versão atualizada do documento `pages/README.md`, refletindo que o módulo de vocabulário agora possui um modo funcional (`basic`) com lógica e UI completas:

---

# `pages/` – Game Modules Entry Points

## Overview

The `pages/` directory acts as the organisational root for all educational modules in the application. Each subfolder corresponds to a category of linguistic training — such as typing, vocabulary, conjugation, and declension — and is responsible for encapsulating its game logic, UI rendering, and interaction flows.

Each subdirectory is designed as a standalone game engine while adhering to a shared interface that allows launching games directly from the main menu (`pages/index.js`).

---

## Structure

```plaintext
/pages
├── index.js                   # Main menu and routing handler
├── typing/                   # Typing game logic and interface
│   ├── index.js
│   └── logic.js
├── vocabulary/               # Vocabulary training module
│   ├── index.js
│   └── logic.js
├── conjugation/              # Verb conjugation module (placeholder)
│   └── index.js
├── declension/               # Noun/adjective/pronoun declension module (placeholder)
│   └── index.js
```

---

## Modules Summary

### 🧠 `index.js` – Main Menu

* **Purpose**: Entry point for the application. It renders the main menu and handles game selection events.
* **Features**:

  * Renders clickable category buttons (Typing, Vocabulary, Conjugation, Declension).
  * Expands typing submenu and allows launching specific modes like `'latin'`, `'cyrillic'`, and `'words'`.
  * Provides `returnToMenu()` globally to allow modules to return to the main interface.

---

### ⌨️ `typing/` – Typing Games

* **Implemented**: ✅ Yes (core character-based game)

* **Files**:

  * `index.js`: Exports `startMode(mode)` to launch the game.
  * `logic.js`: Implements the full game loop, input validation, and feedback.

* **Modes**:

  * `'latin'`: Latin character shown → Cyrillic expected.
  * `'cyrillic'`: Cyrillic character shown → Latin expected.
  * `'words'`: (WIP) Russian word shown → User copies in Cyrillic (using Latin keyboard).

> See [`pages/typing/typing.md`](./typing/typing.md) for details.

---

### 📖 `vocabulary/` – Vocabulary Module

* **Implemented**: ✅ Basic mode functional

* **Files**:

  * `index.js`: Exposes `startMode(mode)` for integration.
  * `logic.js`: Implements the `"basic"` typing challenge.

* **Modes**:

  * `'basic'`: User sees English word and types the Russian equivalent in Cyrillic.

* **Features**:

  * Level selector.
  * Word queue shuffled per session.
  * Real-time feedback (✅ / ❌).
  * Uses `RUSSIAN_WORDS` from `char-map.js`.

> See [`pages/vocabulary/vocabulary.md`](./vocabulary/vocabulary.md) for implementation details.

---

### 🔤 `conjugation/` – Verb Conjugation

* **Implemented**: 🕒 Placeholder only
* **Current File**:

  * `index.js`: Empty for now.
* **Planned Features**:

  * Tense drills, aspect practice, pronoun matching, time-based quizzes.
* **Future Dependencies**:

  * `data/verbs.js` (not yet created)
  * Dynamic UI feedback and rule engine.

> See [`pages/conjugation/conjugation.md`](./conjugation/conjugation.md) for more.

---

### 🧮 `declension/` – Case Declension

* **Implemented**: 🕒 Placeholder only
* **Current File**:

  * `index.js`: Empty for now.
* **Planned Features**:

  * Six-case declension drills across nouns, adjectives, pronouns, and numerals.
  * Interactive games: drag-and-drop, sentence completion, and case selection.
* **Suggested Structure**:

  * `logic.js`, `cases.js`, `examples.js`, and reusable `components/`.

> See [`pages/declension/declension.md`](./declension/declension.md) for scope.

---

## Development Roadmap

| Module      | UI Scaffold | Game Logic | Data Source           | Status        |
| ----------- | ----------- | ---------- | --------------------- | ------------- |
| Typing      | ✅           | ✅          | `char-map.js`         | ✅ Functional  |
| Vocabulary  | ✅           | ✅ (basic)  | `char-map.js` (words) | ✅ Basic Ready |
| Conjugation | ✅           | 🚫         | 🔜 `verbs.js`         | 🕒 Scaffolded |
| Declension  | ✅           | 🚫         | 🔜 `cases.js`, etc.   | 🕒 Scaffolded |

---

## Contribution Notes

When extending a page module:

* Keep rendering self-contained under the `#app` DOM node.
* Expose a mode selector or `start()` function from `index.js`.
* Respect the UI structure and layout from `assets/css/style.css`.
* Add a `.md` file in the module folder documenting its logic, UI, and roadmap.

---

Se quiser, posso preparar o `pages/README.md` finalizado no formato Markdown pronto para commit. Deseja isso agora?
