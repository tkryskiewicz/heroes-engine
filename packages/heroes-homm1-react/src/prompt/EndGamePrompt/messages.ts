import { defineMessages, Messages } from "react-intl";

import { GameOption } from "heroes-homm1";

const messages: Messages = defineMessages({
  [GameOption.LoadGame]: {
    defaultMessage: "Are you sure you want to load a new game? (Your current game will be lost)",
    id: "ui.endGamePrompt.loadGame",
  },
  [GameOption.NewGame]: {
    defaultMessage: "Are you sure you want to restart? (Your current game will be lost)",
    id: "ui.endGamePrompt.newGame",
  },
  [GameOption.Quit]: {
    defaultMessage: "Are you sure you want to quit? (Your current game will be lost)",
    id: "ui.endGamePrompt.quit",
  },
});

export const getTextMessage = (option: GameOption) =>
  messages[option];
