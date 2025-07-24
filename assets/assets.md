# Assets Folder Documentation - `assets/`

This document describes the structure and purpose of the **assets/** directory, which contains static resources used by the Russian Training Hub web application.

---

## Overview

The `assets/` folder holds all static files necessary for the frontend interface, including stylesheets, images, fonts, and other resources.

Currently, the folder includes the following:

* **css/** — Cascading Style Sheets (CSS) used for styling the user interface.

---

## Folder Contents

### 1. CSS Folder - `assets/css/`

This folder contains all stylesheet files that control the visual appearance and layout of the application.

* **style.css**
  Main stylesheet that applies global styles, layout rules, and component-specific styling such as buttons, input fields, and game/menu containers.

* **style.md**
  Markdown documentation describing the `style.css` file in detail, explaining the styles, their purpose, and design choices.

---

## Future Asset Additions (Planned)

* **fonts/**
  Custom fonts (e.g., `Fira Code`) to improve typography and consistency across browsers.

* **images/**
  Any images used for branding, icons, or UI decorations.

* **scripts/**
  External JavaScript libraries or helper scripts.

* **media/**
  Audio or video files if the application adds multimedia content.

---

## Best Practices for Managing Assets

* Organise files by type into subfolders (e.g., `css`, `images`, `fonts`).
* Use descriptive filenames to ease maintenance.
* Keep documentation (`*.md`) next to related resources for clarity.
* Minify CSS and JavaScript for production deployments.
* Use relative paths inside HTML/JS to reference assets correctly.