import { defineMessages } from "react-intl";

import { GameOption } from "./EndGamePrompt";

const messages = defineMessages({
  loadGame: {
    defaultMessage: "Are you sure you want to load a new game? (Your current game will be lost)",
    id: "ui.endGamePrompt.loadGame",
  },
  newGame: {
    defaultMessage: "Are you sure you want to restart? (Your current game will be lost)",
    id: "ui.endGamePrompt.newGame",
  },
  quit: {
    defaultMessage: "Are you sure you want to quit? (Your current game will be lost)",
    id: "ui.endGamePrompt.quit",
  },
});

export const getTextMessage = (option: GameOption) => {
  switch (option) {
    case "new-game":
      return messages.newGame;
    case "load-game":
      return messages.loadGame;
    case "quit":
      return messages.quit;
  }
};
