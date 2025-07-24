# 🪆 Russian Training Hub (RTH)

**Russian Training Hub (RTH)** is a lightweight, open-source, browser-based platform to help learners practise Russian through modular mini-games. Its main goal is to build fluency in Cyrillic typing, with planned expansion to vocabulary, verb conjugation, and grammatical case declension.

---

## 🎯 Features

- **Typing Modes (Character-Level):**
  - *Latin → Cyrillic*: Displays a Latin key, expects the Cyrillic character.
  - *Cyrillic → Latin*: Shows a Cyrillic letter, user types the matching Latin key.

- **Live Feedback**: Instant correctness feedback to reinforce learning.
- **Pure Frontend**: No backend or external dependencies.
- **Mobile-Friendly & Offline-Capable**: Runs fully in-browser.

---

## 📦 Project Structure

```plaintext
root/
├── assets/         # CSS, images, media (static UI assets)
├── data/           # Mappings and language datasets
├── pages/          # Individual game modules
│   ├── typing/         # ⌨️ Fully implemented
│   ├── vocabulary/     # 📖 Placeholder
│   ├── conjugation/    # 🔤 Placeholder
│   └── declension/     # 🧮 Placeholder
├── utils/          # Reusable utility functions
├── index.html      # Base SPA template
├── LICENSE         # MIT Licence
└── README.md       # You're here!
````

Each module under `pages/` is self-contained and designed to scale independently.

---

## 🧩 Game Modules

| Module          | UI | Logic      | Data Source   | Status        |
| --------------- | -- | ---------- | ------------- | ------------- |
| **Typing**      | ✅  | ✅          | `char-map.js` | ✅ Complete    |
| **Vocabulary**  | ✅  | 🚧 Planned | `char-map.js` | 🕒 Scaffolded |
| **Conjugation** | ✅  | 🚫 Missing | 🔜 `verbs.js` | 🕒 Scaffolded |
| **Declension**  | ✅  | 🚫 Missing | 🔜 `cases.js` | 🕒 Scaffolded |

> See [`pages/pages.md`](pages/pages.md) for full breakdown.

---

## 🧑‍💻 Developer Guide

* Written in modular, ES6 JavaScript.
* Single-page app design — all content rendered into the `#app` container.
* UI styled via `assets/css/style.css`.
* No build tools or frameworks required.

### Entry Point

```html
<!-- index.html -->
<link rel="stylesheet" href="assets/css/style.css">
<script type="module" src="pages/index.js"></script>
```

---

## 🚀 Deploying on GitHub Pages

1. Push your repo to GitHub.
2. Go to **Settings > Pages**.
3. Set the source to the `main` branch and root (`/`) folder.
4. Access your deployed game at:

   ```
   https://eduardo45MP.github.io/RussianTrainingHub/
   ```

> ✅ Ensure **relative paths** are used in HTML and JS for compatibility with GitHub Pages.

---

## 📚 Documentation

Each core directory includes a Markdown doc:

* [`assets/assets.md`](assets/assets.md)
* [`data/data.md`](data/data.md)
* [`utils/utils.md`](utils/utils.md)
* [`pages/pages.md`](pages/pages.md)

Module-specific docs:

* [`pages/typing/typing.md`](pages/typing/typing.md)
* [`pages/vocabulary/vocabulary.md`](pages/vocabulary/vocabulary.md)
* [`pages/conjugation/conjugation.md`](pages/conjugation/conjugation.md)
* [`pages/declension/declension.md`](pages/declension/declension.md)

---

## 🧪 Roadmap (Short-Term)

* [ ] Add full-word typing mode under `typing/`
* [ ] Implement first vocabulary quiz mode (e.g. multiple choice)
* [ ] Build dataset for conjugation (`verbs.js`)
* [ ] Design case-based games for declension module
* [ ] Add audio support for pronunciation practice
* [ ] Mobile input UX optimisation

---

## 🤝 Contributing

Feel free to fork the repo, open issues, or suggest enhancements.

Good first contributions include:

* Implementing `utils/shuffle.js`
* Creating basic vocabulary challenges
* Designing visual feedback components
* Adding themed word lists (e.g. animals, food, greetings)

---

## 📄 Licence

Licensed under the **MIT Licence** – free for personal, educational, or commercial use.

MIT © 2025 [Eduardo\_MP.dev](https://github.com/eduardo-mp-dev)