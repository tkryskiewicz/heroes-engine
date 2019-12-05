import { defineMessages } from "react-intl";

import { HeroClassId } from "heroes-homm1";

import { convertValue, unknownMessage } from "./util";

const getKey = (heroclass: string) =>
  convertValue(heroclass);

const getTitleKey = (heroClass: string) =>
  `${convertValue(heroClass)}Title`;

const heroClassMessages = defineMessages({
  [getKey(HeroClassId.Knight)]: {
    defaultMessage: "Knight",
    id: "game.heroClass.knight",
  },
  [getTitleKey(HeroClassId.Knight)]: {
    defaultMessage: "{heroName} the Knight",
    id: "game.heroClass.knight.title",
  },
  [getKey(HeroClassId.Barbarian)]: {
    defaultMessage: "Barbarian",
    id: "game.heroClass.barbarian",
  },
  [getTitleKey(HeroClassId.Barbarian)]: {
    defaultMessage: "{heroName} the Barbarian",
    id: "game.heroClass.barbarian.title",
  },
  [getKey(HeroClassId.Sorceress)]: {
    defaultMessage: "Sorceress",
    id: "game.heroClass.sorceress",
  },
  [getTitleKey(HeroClassId.Sorceress)]: {
    defaultMessage: "{heroName} the Sorceress",
    id: "game.heroClass.sorceress.title",
  },
  [getKey(HeroClassId.Warlock)]: {
    defaultMessage: "Warlock",
    id: "game.heroClass.warlock",
  },
  [getTitleKey(HeroClassId.Warlock)]: {
    defaultMessage: "{heroName} the Warlock",
    id: "game.heroClass.warlock.title",
  },
});

export const getHeroClassNameMessage = (heroClass: string) =>
  heroClassMessages[getKey(heroClass)] || unknownMessage;

export const getHeroClassTitleMessage = (heroCLass: string) =>
  heroClassMessages[getTitleKey(heroCLass)] || unknownMessage;
