import { defineMessages, InjectedIntl } from "react-intl";

import { getHeroNameMessage } from "../messages";

export const messages = defineMessages({
  title: {
    defaultMessage: "{heroName} meets {otherHeroName}",
    id: "game.ui.heroTradingWindow.title",
  },
});

export const getTitle = (intl: InjectedIntl, hero: string, otherHero: string) => {
  const heroName = intl.formatMessage(getHeroNameMessage(hero));
  const otherHeroName = intl.formatMessage(getHeroNameMessage(otherHero));

  return intl.formatMessage(messages.title, { heroName, otherHeroName });
};
