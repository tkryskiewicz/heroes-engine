import { defineMessages } from "react-intl";

import { HeroClass } from "heroes-homm1";

import { convertValue, unknownMessage } from "./util";

const getKey = (heroclass: string) =>
  convertValue(heroclass);

const getTitleKey = (heroClass: string) =>
  `${convertValue(heroClass)}Title`;

const heroClassMessages = defineMessages({
  [getKey(HeroClass.Knight)]: {
    defaultMessage: "Knight",
    id: "game.heroClass.knight",
  },
  [getTitleKey(HeroClass.Knight)]: {
    defaultMessage: "{heroName} the Knight",
    id: "game.heroClass.knight.title",
  },
  [getKey(HeroClass.Barbarian)]: {
    defaultMessage: "Barbarian",
    id: "game.heroClass.barbarian",
  },
  [getTitleKey(HeroClass.Barbarian)]: {
    defaultMessage: "{heroName} the Barbarian",
    id: "game.heroClass.barbarian.title",
  },
  [getKey(HeroClass.Sorceress)]: {
    defaultMessage: "Sorceress",
    id: "game.heroClass.sorceress",
  },
  [getTitleKey(HeroClass.Sorceress)]: {
    defaultMessage: "{heroName} the Sorceress",
    id: "game.heroClass.sorceress.title",
  },
  [getKey(HeroClass.Warlock)]: {
    defaultMessage: "Warlock",
    id: "game.heroClass.warlock",
  },
  [getTitleKey(HeroClass.Warlock)]: {
    defaultMessage: "{heroName} the Warlock",
    id: "game.heroClass.warlock.title",
  },
});

export const getHeroClassNameMessage = (heroClass: string) =>
  heroClassMessages[getKey(heroClass)] || unknownMessage;

export const getHeroClassTitleMessage = (heroCLass: string) =>
  heroClassMessages[getTitleKey(heroCLass)] || unknownMessage;
