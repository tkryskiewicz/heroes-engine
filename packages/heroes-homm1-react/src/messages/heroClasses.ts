import { defineMessages, Messages } from "react-intl";

import { HeroClass } from "heroes-homm1";

import { unknownMessage } from "./util";

const heroClassMessages: Messages = defineMessages({
  [HeroClass.Knight]: {
    defaultMessage: "Knight",
    id: "game.heroClass.knight",
  },
  [`${HeroClass.Knight}Title`]: {
    defaultMessage: "{heroName} the Knight",
    id: "game.heroClass.knight.title",
  },
  [HeroClass.Barbarian]: {
    defaultMessage: "Barbarian",
    id: "game.heroClass.barbarian",
  },
  [`${HeroClass.Barbarian}Title`]: {
    defaultMessage: "{heroName} the Barbarian",
    id: "game.heroClass.barbarian.title",
  },
  [HeroClass.Sorceress]: {
    defaultMessage: "Sorceress",
    id: "game.heroClass.sorceress",
  },
  [`${HeroClass.Sorceress}Title`]: {
    defaultMessage: "{heroName} the Sorceress",
    id: "game.heroClass.sorceress.title",
  },
  [HeroClass.Warlock]: {
    defaultMessage: "Warlock",
    id: "game.heroClass.warlock",
  },
  [`${HeroClass.Warlock}Title`]: {
    defaultMessage: "{heroName} the Warlock",
    id: "game.heroClass.warlock.title",
  },
});

export const getHeroClassNameMessage = (heroClass: string) =>
  heroClassMessages[heroClass] || unknownMessage;

export const getHeroClassTitleMessage = (heroCLass: string) =>
  heroClassMessages[`${heroCLass}Title`] || unknownMessage;
