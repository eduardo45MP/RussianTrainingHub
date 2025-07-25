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
