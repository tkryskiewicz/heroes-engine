import { defineMessages, InjectedIntl } from "react-intl";

import { getHeroClassTitleMessage, getHeroNameMessage } from "../messages";

export const messages = defineMessages({
  additionalStats: {
    defaultMessage: "Additional hero characteristics",
    id: "ui.heroWindow.additionalStats",
  },
  defaultStatusText: {
    defaultMessage: "Hero Screen",
    id: "ui.heroWindow.defaultStatusText",
  },
  dismiss: {
    defaultMessage: "Dismiss {heroName}",
    id: "ui.heroWindow.dismiss",
  },
  exit: {
    defaultMessage: "Exit Hero Screen",
    id: "ui.heroWindow.exit",
  },
  statInfo: {
    defaultMessage: "View {statName} Info",
    id: "ui.heroWindow.statInfo",
  },
});

export const getTitle = (intl: InjectedIntl, hero: string, heroClass: string) => {
  const heroName = intl.formatMessage(getHeroNameMessage(hero));

  const heroTitle = intl.formatMessage(getHeroClassTitleMessage(heroClass), { heroName });

  return heroTitle;
};
