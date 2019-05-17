import { defineMessages } from "react-intl";

export const messages = defineMessages({
  content: {
    defaultMessage: "Must be between {min} and {max}",
    id: "game.ui.editor.valueRangePrompt.content",
  },
  contentRandom: {
    defaultMessage: "Must be between {min} and {max}. ({min} lets the computer determine the number randomly.)",
    id: "game.ui.editor.valueRangePrompt.contentRandom",
  },
});
