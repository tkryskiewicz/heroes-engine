import { defineMessages } from "react-intl";

import { OpponentSetting } from "heroes-homm1";

export const messages = defineMessages({
  average: {
    defaultMessage: "Average",
    id: "game.opponentSetting.average",
  },
  dumb: {
    defaultMessage: "Dumb",
    id: "game.opponentSetting.dumb",
  },
  genius: {
    defaultMessage: "Genius",
    id: "game.opponentSetting.genius",
  },
  none: {
    defaultMessage: "None",
    id: "game.opponentSetting.none",
  },
  smart: {
    defaultMessage: "Smart",
    id: "game.opponentSetting.smart",
  },
});

export const getOpponentSettingNameMessage = (value: OpponentSetting) =>
  messages[value];
