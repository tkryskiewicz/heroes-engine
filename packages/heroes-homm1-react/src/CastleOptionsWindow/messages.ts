import { defineMessages } from "react-intl";

import { CastleOptionStatus } from "heroes-homm1";

export const messages = defineMessages({
  defaultStatusText: {
    defaultMessage: "Castle Options",
    id: "ui.castleOptionsWindow.defaultStatusText",
  },
  exitStatusText: {
    defaultMessage: "Exit Castle",
    id: "ui.castleOptionsWindow.exitStatusText",
  },
});

const optionMessages = defineMessages({
  [`${CastleOptionStatus.Available}StatusText`]: {
    defaultMessage: "Build {optionName}",
    id: "ui.castleOptionsWindow.option.availableStatusText",
  },
  [`${CastleOptionStatus.Built}StatusText`]: {
    defaultMessage: "{optionName} is already built",
    id: "ui.castleOptionsWindow.option.builtStatusText",
  },
  [`${CastleOptionStatus.Unaffordable}StatusText`]: {
    defaultMessage: "Cannot afford {optionName}",
    id: "ui.castleOptionsWindow.option.unaffordableStatusText",
  },
  [`${CastleOptionStatus.Unavailable}StatusText`]: {
    defaultMessage: "Cannot build {optionName}",
    id: "ui.castleOptionsWindow.option.unavailableStatusText",
  },
});

export const getOptionStatusTextMessage = (status: CastleOptionStatus) =>
  optionMessages[`${status}StatusText`];

const recruitHeroMessages = defineMessages({
  [`${CastleOptionStatus.Available}StatusText`]: {
    defaultMessage: "Recruit a new Hero",
    id: "ui.castleOptionsWindow.recruitHero.availableStatusText",
  },
  [`${CastleOptionStatus.Unavailable}StatusText`]: {
    defaultMessage: "Cannot recruit - you already have a Hero in this town.",
    id: "ui.castleOptionsWindow.recruitHero.unavailableStatusText",
  },
});

export const getRecruitHeroStatusTextMessage = (status: CastleOptionStatus) =>
  recruitHeroMessages[`${status}StatusText`];
