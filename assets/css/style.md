# Style Sheet Documentation - `style.css`

This document describes the main CSS styles used in the **Russian Training Hub** user interface. It covers layout, visual design, and interactive elements styling to ensure a consistent and user-friendly experience.

---

## Overview

* The stylesheet provides a basic reset to margin, padding, and box sizing.
* Applies a dark theme with high contrast for readability.
* Uses a modern monospace font (`Fira Code`) for a coding-inspired look.
* Styles layout containers, buttons, inputs, and feedback areas.
* Designed for responsiveness and usability in a browser environment.

---

## Detailed Styles

### Universal Reset

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

* Removes default margin and padding from all elements.
* Sets `box-sizing` to `border-box` for predictable element sizing.

---

### Body Styling

```css
body {
  background-color: #111;
  color: #f0f0f0;
  font-family: 'Fira Code', monospace;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
```

* Dark background (`#111`) for night mode.
* Light text colour (`#f0f0f0`) for contrast.
* Monospaced font to emulate coding environment.
* Padding around content.
* Flexbox layout with vertical stacking.
* Content horizontally centred.
* Ensures minimum height covers full viewport height.

---

### Headings

#### Main Title - `h1`

```css
h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #61dafb;
  text-align: center;
}
```

* Large font size for prominence.
* Bottom margin for spacing.
* Bright blue colour for visual emphasis.
* Text centred horizontally.

#### Secondary Titles - `h2`

```css
h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffcc00;
}
```

* Medium font size for section subtitles.
* Yellow colour to attract attention.
* Spacing below for separation.

---

### Containers: Menu and Game Area

```css
#menu, #game {
  background-color: #222;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px #000;
  width: 100%;
  max-width: 500px;
  text-align: center;
}
```

* Dark grey background for subtle contrast.
* Internal padding for comfortable spacing.
* Rounded corners for modern UI feel.
* Soft black shadow for slight elevation effect.
* Responsive width limited to 500px max.
* Centre aligned text and child elements.

---

### Buttons

```css
button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 1rem 1.5rem;
  margin: 0.5rem 0;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
}

button:hover {
  background-color: #555;
}
```

* Dark background with white text for readability.
* No borders to maintain a clean look.
* Padding for comfortable click/tap area.
* Margin to separate buttons vertically.
* Rounded edges.
* Full width buttons for easier interaction.
* Cursor changes to pointer on hover.
* Smooth transition effect on background colour for hover state.
* Hover state uses a lighter shade to provide visual feedback.

---

### Text Input

```css
input[type="text"] {
  padding: 0.75rem;
  font-size: 1rem;
  margin: 1rem 0;
  width: 100%;
  max-width: 300px;
  border-radius: 0.5rem;
  border: 1px solid #444;
  background-color: #1a1a1a;
  color: #fff;
  text-align: center;
}
```

* Padding for comfortable typing area.
* Clear font size matching buttons.
* Vertical margin for spacing.
* Full width input but limited to max 300px.
* Rounded corners consistent with buttons.
* Subtle border for input visibility.
* Darker background to match theme.
* White text for readability.
* Text centred to align with challenge display.

---

### Feedback Area

```css
#feedback {
  font-size: 1.2rem;
  margin-top: 1rem;
  min-height: 2rem;
}
```

* Slightly larger font for clarity.
* Margin above to separate from input.
* Minimum height to prevent layout shifts when empty.

---

### Challenge Display

```css
#challenge {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1rem;
  display: inline-block;
  color: #00ffcc;
}
```

* Large, bold font to focus user attention.
* Margin to separate from other elements.
* Inline-block to shrink-wrap content width.
* Bright aqua/teal colour for vibrancy.

---

# Summary

The CSS defines a sleek, dark-themed UI with clear typography, user-friendly input controls, and consistent spacing. It supports an immersive typing training experience that is visually accessible and easy to interact with.