# Data Folder Documentation - `data/`

This folder stores structured datasets and mappings used by the application, primarily for linguistic training, transliteration, and vocabulary exercises. All contents are static and imported during runtime.

---

## Contents

### 1. `char-map.js`

This is the main and currently only file within the `data/` directory. It contains three essential exports used throughout the app:

#### ✅ `MAPA_CARACTERES`

* **Type:** `Object`
* **Purpose:** Maps individual Cyrillic characters (used in Russian) to keys from a Latin keyboard layout (specifically ABNT2, used in Brazil).
* **Use case:** Enables users to type Cyrillic characters using familiar Latin-keyboard positions, without needing to switch system keyboard settings.
* **Example Mapping:**

  * `'а' → 'f'`
  * `'ж' → 'ç'`

#### ✅ `REVERSE_MAP`

* **Type:** `Object`
* **Purpose:** Provides a reversed lookup from Latin characters to their corresponding Cyrillic equivalents.
* **Use case:** Used when the app prompts the user with a Latin character and expects them to type its Cyrillic match. It supports reverse transliteration for exercises.
* **Generated automatically** using `Object.entries(...).map(...).fromEntries(...)`.

#### ✅ `RUSSIAN_WORDS`

* **Type:** `Object<number, Array<{ word: string, translation: string }>>`

* **Purpose:** Structured Russian vocabulary for learning, grouped by difficulty level.

* **Levels:** Ranges from `1` (beginner) to `5` (advanced vocabulary).

* **Each entry includes:**

  * `word` – the original word in Cyrillic
  * `translation` – its English (British) meaning, including annotations for clarity.

* **Use case:** Typing and translation games that test recognition, recall, and input of Russian vocabulary.

---

## Future Usage and Expansion

The `data/` folder is intended to hold more structured data files, such as:

* `declensions.js` – noun and adjective declension tables.
* `conjugations.js` – verb conjugation rules and samples.
* `phrases.js` – common expressions for survival Russian.
* `lessons.js` – predefined vocabulary or grammar lessons.

All files should be in plain JavaScript format (`.js`) exporting static JSON-like objects to ensure compatibility with client-side imports.