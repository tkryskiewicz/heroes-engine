import { defineMessages } from "react-intl";

import { SpellType } from "heroes-homm1";

import { unknownMessage } from "../messages/util";

export const messages = defineMessages({
  defaultStatusText: {
    defaultMessage: "View Spells",
    id: "ui.spellBookWindow.defaultStatusText",
  },
  exitStatusText: {
    defaultMessage: "Close Spellbook",
    id: "ui.spellBookWindow.exitStatusText",
  },
  nextPageStatusText: {
    defaultMessage: "View next page",
    id: "ui.spellBookWindow.nextPageStatusText",
  },
  previousPageStatusText: {
    defaultMessage: "View previous page",
    id: "ui.spellBookWindow.previousPageStatusText",
  },
  [`${SpellType.Adventure}SpellsStatusText`]: {
    defaultMessage: "View adventure spells",
    id: "ui.spellBookWindow.adventureSpellsStatusText",
  },
  [`${SpellType.Combat}SpellsStatusText`]: {
    defaultMessage: "View combat spells",
    id: "ui.spellBookWindow.combatSpellsStatusText",
  },
});

export const getSpellTypeStatusTextMessage = (value: string) =>
  messages[`${value}SpellsStatusText`] || unknownMessage;
