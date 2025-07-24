// File: pages/typing/index.js
// Description:
//   Entry point for initiating the typing game from the Typing module.
//   Delegates game logic to logic.js based on the selected mode.

import { startTypingGame } from './logic.js';

/**
 * startMode
 *
 * Starts the typing game using the specified mode.
 * Acts as an interface function between the UI (or external controller)
 * and the internal logic of the typing game.
 *
 * @param {string} mode - Identifier of the typing mode to be launched.
 */
export function startMode(mode) {
  startTypingGame(mode);
}
