import { defineMessages } from "react-intl";

export const messages = defineMessages({
  content: {
    defaultMessage: "Move how many {creatureName} troops from {army} to {targetArmy}?",
    id: "ui.redistributeArmyPrompt.content",
  },
  garrisonArmy: {
    defaultMessage: "Garrison",
    id: "ui.redistributeArmyPrompt.garrisonArmy",
  },
  heroArmy: {
    defaultMessage: "Hero's Army",
    id: "ui.redistributeArmyPrompt.heroArmy",
  },
});
