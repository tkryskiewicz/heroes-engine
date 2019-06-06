import { defineMessages } from "react-intl";

export const messages = defineMessages({
  content: {
    defaultMessage: "Must be between {min, number} and {max, number}",
    id: "game.ui.editor.valueRangePrompt.content",
  },
  contentRandom: {
    defaultMessage: `Must be between {min, number} and {max, number}.
      ({min, number} lets the computer determine the number randomly.)`,
    id: "game.ui.editor.valueRangePrompt.contentRandom",
  },
});
