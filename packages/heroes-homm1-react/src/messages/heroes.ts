import { defineMessages } from "react-intl";

import { HeroId } from "heroes-homm1";

import { convertValue, unknownMessage } from "./util";

const getKey = (hero: string) =>
  convertValue(hero);

const knightHeroMessages = defineMessages({
  [getKey(HeroId.Ambrose)]: {
    defaultMessage: "Ambrose",
    id: "game.hero.ambrose",
  },
  [getKey(HeroId.Arturius)]: {
    defaultMessage: "Arturius",
    id: "game.hero.arturius",
  },
  [getKey(HeroId.Dimitri)]: {
    defaultMessage: "Dimitri",
    id: "game.hero.dimitri",
  },
  [getKey(HeroId.Ector)]: {
    defaultMessage: "Ector",
    id: "game.hero.ector",
  },
  [getKey(HeroId.LordHaart)]: {
    defaultMessage: "Lord Haart",
    id: "game.hero.lordHaart",
  },
  [getKey(HeroId.LordKilburn)]: {
    defaultMessage: "Lord Kilburn",
    id: "game.hero.lordKilburn",
  },
  [getKey(HeroId.Maximus)]: {
    defaultMessage: "Maximus",
    id: "game.hero.maximus",
  },
  [getKey(HeroId.SirGallant)]: {
    defaultMessage: "Sir Galant",
    id: "game.hero.sirGalant",
  },
  [getKey(HeroId.Tyro)]: {
    defaultMessage: "Tyro",
    id: "game.hero.tyro",
  },
});

const barbarianHeroMessages = defineMessages({
  [getKey(HeroId.Antoine)]: {
    defaultMessage: "Antoine",
    id: "game.hero.antoine",
  },
  [getKey(HeroId.Atlas)]: {
    defaultMessage: "Atlas",
    id: "game.hero.atlas",
  },
  [getKey(HeroId.CragHack)]: {
    defaultMessage: "Crag Hack",
    id: "game.hero.cragHack",
  },
  [getKey(HeroId.Ergon)]: {
    defaultMessage: "Ergon",
    id: "game.hero.ergon",
  },
  [getKey(HeroId.JoJosh)]: {
    defaultMessage: "Jo Josh",
    id: "game.hero.joJosh",
  },
  [getKey(HeroId.Kelzen)]: {
    defaultMessage: "Kelzen",
    id: "game.hero.kelzen",
  },
  [getKey(HeroId.Thundax)]: {
    defaultMessage: "Thundax",
    id: "game.hero.thundax",
  },
  [getKey(HeroId.Tsabu)]: {
    defaultMessage: "Tsabu",
    id: "game.hero.tsabu",
  },
  [getKey(HeroId.Yog)]: {
    defaultMessage: "Yog",
    id: "game.hero.yog",
  },
});

const sorceressHeroMessages = defineMessages({
  [getKey(HeroId.Ariel)]: {
    defaultMessage: "Ariel",
    id: "game.hero.ariel",
  },
  [getKey(HeroId.Astra)]: {
    defaultMessage: "Astra",
    id: "game.hero.astra",
  },
  [getKey(HeroId.Carlawn)]: {
    defaultMessage: "Carlawn",
    id: "game.hero.carlawn",
  },
  [getKey(HeroId.Gem)]: {
    defaultMessage: "Gem",
    id: "game.hero.gem",
  },
  [getKey(HeroId.Luna)]: {
    defaultMessage: "Luna",
    id: "game.hero.luna",
  },
  [getKey(HeroId.Natasha)]: {
    defaultMessage: "Natasha",
    id: "game.hero.natasha",
  },
  [getKey(HeroId.Rebecca)]: {
    defaultMessage: "Rebecca",
    id: "game.hero.rebecca",
  },
  [getKey(HeroId.Troyan)]: {
    defaultMessage: "Troyan",
    id: "game.hero.troyan",
  },
  [getKey(HeroId.Vatawna)]: {
    defaultMessage: "Vatawna",
    id: "game.hero.vatawna",
  },
});

const warlockHeroMessages = defineMessages({
  [getKey(HeroId.Agar)]: {
    defaultMessage: "Agar",
    id: "game.hero.agar",
  },
  [getKey(HeroId.Arie)]: {
    defaultMessage: "Arie",
    id: "game.hero.arie",
  },
  [getKey(HeroId.Barok)]: {
    defaultMessage: "Barok",
    id: "game.hero.barok",
  },
  [getKey(HeroId.Crodo)]: {
    defaultMessage: "Crodo",
    id: "game.hero.crodo",
  },
  [getKey(HeroId.Falagar)]: {
    defaultMessage: "Falagar",
    id: "game.hero.falagar",
  },
  [getKey(HeroId.Kastore)]: {
    defaultMessage: "Kastore",
    id: "game.hero.kastore",
  },
  [getKey(HeroId.Sandro)]: {
    defaultMessage: "Sandro",
    id: "game.hero.sandro",
  },
  [getKey(HeroId.Vesper)]: {
    defaultMessage: "Vesper",
    id: "game.hero.vesper",
  },
  [getKey(HeroId.Wrathmont)]: {
    defaultMessage: "Wrathmont",
    id: "game.hero.wrathmont",
  },
});

const heroMessages = {
  ...knightHeroMessages,
  ...barbarianHeroMessages,
  ...sorceressHeroMessages,
  ...warlockHeroMessages,
};

export const getHeroNameMessage = (hero: string) =>
  heroMessages[getKey(hero)] || unknownMessage;
