import { defineMessages, Messages } from "react-intl";

import { HeroId } from "heroes-homm1";

import { unknownMessage } from "./util";

export const knightHeroMessages = defineMessages({
  [HeroId.Ambrose]: {
    defaultMessage: "Ambrose",
    id: "game.hero.ambrose",
  },
  [HeroId.Arturius]: {
    defaultMessage: "Arturius",
    id: "game.hero.arturius",
  },
  [HeroId.Dimitri]: {
    defaultMessage: "Dimitri",
    id: "game.hero.dimitri",
  },
  [HeroId.Ector]: {
    defaultMessage: "Ector",
    id: "game.hero.ector",
  },
  [HeroId.LordHaart]: {
    defaultMessage: "Lord Haart",
    id: "game.hero.lordHaart",
  },
  [HeroId.LordKilburn]: {
    defaultMessage: "Lord Kilburn",
    id: "game.hero.lordKilburn",
  },
  [HeroId.Maximus]: {
    defaultMessage: "Maximus",
    id: "game.hero.maximus",
  },
  [HeroId.SirGallant]: {
    defaultMessage: "Sir Galant",
    id: "game.hero.sirGalant",
  },
  [HeroId.Tyro]: {
    defaultMessage: "Tyro",
    id: "game.hero.tyro",
  },
});

export const barbarianHeroMessages = defineMessages({
  [HeroId.Antoine]: {
    defaultMessage: "Antoine",
    id: "game.hero.antoine",
  },
  [HeroId.Atlas]: {
    defaultMessage: "Atlas",
    id: "game.hero.atlas",
  },
  [HeroId.CragHack]: {
    defaultMessage: "Crag Hack",
    id: "game.hero.cragHack",
  },
  [HeroId.Ergon]: {
    defaultMessage: "Ergon",
    id: "game.hero.ergon",
  },
  [HeroId.JoJosh]: {
    defaultMessage: "Jo Josh",
    id: "game.hero.joJosh",
  },
  [HeroId.Kelzen]: {
    defaultMessage: "Kelzen",
    id: "game.hero.kelzen",
  },
  [HeroId.Thundax]: {
    defaultMessage: "Thundax",
    id: "game.hero.thundax",
  },
  [HeroId.Tsabu]: {
    defaultMessage: "Tsabu",
    id: "game.hero.tsabu",
  },
  [HeroId.Yog]: {
    defaultMessage: "Yog",
    id: "game.hero.yog",
  },
});

export const sorceressHeroMessages = defineMessages({
  [HeroId.Ariel]: {
    defaultMessage: "Ariel",
    id: "game.hero.ariel",
  },
  [HeroId.Astra]: {
    defaultMessage: "Astra",
    id: "game.hero.astra",
  },
  [HeroId.Carlawn]: {
    defaultMessage: "Carlawn",
    id: "game.hero.carlawn",
  },
  [HeroId.Gem]: {
    defaultMessage: "Gem",
    id: "game.hero.gem",
  },
  [HeroId.Luna]: {
    defaultMessage: "Luna",
    id: "game.hero.luna",
  },
  [HeroId.Natasha]: {
    defaultMessage: "Natasha",
    id: "game.hero.natasha",
  },
  [HeroId.Rebecca]: {
    defaultMessage: "Rebecca",
    id: "game.hero.rebecca",
  },
  [HeroId.Troyan]: {
    defaultMessage: "Troyan",
    id: "game.hero.troyan",
  },
  [HeroId.Vatawna]: {
    defaultMessage: "Vatawna",
    id: "game.hero.vatawna",
  },
});

export const warlockHeroMessages = defineMessages({
  [HeroId.Agar]: {
    defaultMessage: "Agar",
    id: "game.hero.agar",
  },
  [HeroId.Arie]: {
    defaultMessage: "Arie",
    id: "game.hero.arie",
  },
  [HeroId.Barok]: {
    defaultMessage: "Barok",
    id: "game.hero.barok",
  },
  [HeroId.Crodo]: {
    defaultMessage: "Crodo",
    id: "game.hero.crodo",
  },
  [HeroId.Falagar]: {
    defaultMessage: "Falagar",
    id: "game.hero.falagar",
  },
  [HeroId.Kastore]: {
    defaultMessage: "Kastore",
    id: "game.hero.kastore",
  },
  [HeroId.Sandro]: {
    defaultMessage: "Sandro",
    id: "game.hero.sandro",
  },
  [HeroId.Vesper]: {
    defaultMessage: "Vesper",
    id: "game.hero.vesper",
  },
  [HeroId.Wrathmont]: {
    defaultMessage: "Wrathmont",
    id: "game.hero.wrathmont",
  },
});

export const heroMessages: Messages = {
  ...knightHeroMessages,
  ...barbarianHeroMessages,
  ...sorceressHeroMessages,
  ...warlockHeroMessages,
};

export const getHeroNameMessage = (hero: string) =>
  heroMessages[hero] || unknownMessage;
