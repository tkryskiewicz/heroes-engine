import { defineMessages } from "react-intl";

export const messages = defineMessages({
  content: {
    defaultMessage: `
      "I will accept your surrender and grant you and your troops safe passage for the price of {cost, number} gold.
    `,
    id: "ui.surrenderWindow.content",
  },
  title: {
    defaultMessage: "{heroName} states:",
    id: "ui.surrenderWindow.title",
  },
});
