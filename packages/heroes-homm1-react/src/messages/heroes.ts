import { defineMessages, Messages } from "react-intl";

import { HeroId } from "heroes-homm1";

import { unknownMessage } from "./util";

export const knightHeroMessages = defineMessages({
  ambrose: {
    defaultMessage: "Ambrose",
    id: "game.hero.ambrose",
  },
  arturius: {
    defaultMessage: "Arturius",
    id: "game.hero.arturius",
  },
  dimitri: {
    defaultMessage: "Dimitri",
    id: "game.hero.dimitri",
  },
  ector: {
    defaultMessage: "Ector",
    id: "game.hero.ector",
  },
  lordHaart: {
    defaultMessage: "Lord Haart",
    id: "game.hero.lordHaart",
  },
  lordKilburn: {
    defaultMessage: "Lord Kilburn",
    id: "game.hero.lordKilburn",
  },
  maximus: {
    defaultMessage: "Maximus",
    id: "game.hero.maximus",
  },
  sirGalant: {
    defaultMessage: "Sir Galant",
    id: "game.hero.sirGalant",
  },
  tyro: {
    defaultMessage: "Tyro",
    id: "game.hero.tyro",
  },
});

export const barbarianHeroMessages = defineMessages({
  antoine: {
    defaultMessage: "Antoine",
    id: "game.hero.antoine",
  },
  atlas: {
    defaultMessage: "Atlas",
    id: "game.hero.atlas",
  },
  cragHack: {
    defaultMessage: "Crag Hack",
    id: "game.hero.cragHack",
  },
  ergon: {
    defaultMessage: "Ergon",
    id: "game.hero.ergon",
  },
  joJosh: {
    defaultMessage: "Jo Josh",
    id: "game.hero.joJosh",
  },
  kelzen: {
    defaultMessage: "Kelzen",
    id: "game.hero.kelzen",
  },
  thundax: {
    defaultMessage: "Thundax",
    id: "game.hero.thundax",
  },
  tsabu: {
    defaultMessage: "Tsabu",
    id: "game.hero.tsabu",
  },
  yog: {
    defaultMessage: "Yog",
    id: "game.hero.yog",
  },
});

export const sorceressHeroMessages = defineMessages({
  ariel: {
    defaultMessage: "Ariel",
    id: "game.hero.ariel",
  },
  astra: {
    defaultMessage: "Astra",
    id: "game.hero.astra",
  },
  carlawn: {
    defaultMessage: "Carlawn",
    id: "game.hero.carlawn",
  },
  gem: {
    defaultMessage: "Gem",
    id: "game.hero.gem",
  },
  luna: {
    defaultMessage: "Luna",
    id: "game.hero.luna",
  },
  natasha: {
    defaultMessage: "Natasha",
    id: "game.hero.natasha",
  },
  rebecca: {
    defaultMessage: "Rebecca",
    id: "game.hero.rebecca",
  },
  troyan: {
    defaultMessage: "Troyan",
    id: "game.hero.troyan",
  },
  vatawna: {
    defaultMessage: "Vatawna",
    id: "game.hero.vatawna",
  },
});

export const warlockHeroMessages = defineMessages({
  agar: {
    defaultMessage: "Agar",
    id: "game.hero.agar",
  },
  arie: {
    defaultMessage: "Arie",
    id: "game.hero.arie",
  },
  barok: {
    defaultMessage: "Barok",
    id: "game.hero.barok",
  },
  crodo: {
    defaultMessage: "Crodo",
    id: "game.hero.crodo",
  },
  falagar: {
    defaultMessage: "Falagar",
    id: "game.hero.falagar",
  },
  kastore: {
    defaultMessage: "Kastore",
    id: "game.hero.kastore",
  },
  sandro: {
    defaultMessage: "Sandro",
    id: "game.hero.sandro",
  },
  vesper: {
    defaultMessage: "Vesper",
    id: "game.hero.vesper",
  },
  wrathmont: {
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

export const getHeroNameMessage = (hero: string) => {
  switch (hero) {
    // Knights
    case HeroId.LordKilburn:
      return knightHeroMessages.lordKilburn;
    case HeroId.LordHaart:
      return knightHeroMessages.lordHaart;
    case HeroId.SirGallant:
      return knightHeroMessages.sirGalant;
    case HeroId.Arturius:
      return knightHeroMessages.arturius;
    case HeroId.Tyro:
      return knightHeroMessages.tyro;
    case HeroId.Maximus:
      return knightHeroMessages.maximus;
    case HeroId.Ector:
      return knightHeroMessages.ector;
    case HeroId.Dimitri:
      return knightHeroMessages.dimitri;
    case HeroId.Ambrose:
      return knightHeroMessages.ambrose;
    // Barbarians
    case HeroId.Thundax:
      return barbarianHeroMessages.thundax;
    case HeroId.Ergon:
      return barbarianHeroMessages.ergon;
    case HeroId.Kelzen:
      return barbarianHeroMessages.kelzen;
    case HeroId.Tsabu:
      return barbarianHeroMessages.tsabu;
    case HeroId.CragHack:
      return barbarianHeroMessages.cragHack;
    case HeroId.JoJosh:
      return barbarianHeroMessages.joJosh;
    case HeroId.Atlas:
      return barbarianHeroMessages.atlas;
    case HeroId.Yog:
      return barbarianHeroMessages.yog;
    case HeroId.Antoine:
      return barbarianHeroMessages.antoine;
    // Sorceresses
    case HeroId.Ariel:
      return sorceressHeroMessages.ariel;
    case HeroId.Vatawna:
      return sorceressHeroMessages.vatawna;
    case HeroId.Carlawn:
      return sorceressHeroMessages.carlawn;
    case HeroId.Rebecca:
      return sorceressHeroMessages.rebecca;
    case HeroId.Luna:
      return sorceressHeroMessages.luna;
    case HeroId.Astra:
      return sorceressHeroMessages.astra;
    case HeroId.Natasha:
      return sorceressHeroMessages.natasha;
    case HeroId.Gem:
      return sorceressHeroMessages.gem;
    case HeroId.Troyan:
      return sorceressHeroMessages.troyan;
    // Warlocks
    case HeroId.Agar:
      return warlockHeroMessages.agar;
    case HeroId.Crodo:
      return warlockHeroMessages.crodo;
    case HeroId.Falagar:
      return warlockHeroMessages.falagar;
    case HeroId.Barok:
      return warlockHeroMessages.barok;
    case HeroId.Arie:
      return warlockHeroMessages.arie;
    case HeroId.Kastore:
      return warlockHeroMessages.kastore;
    case HeroId.Sandro:
      return warlockHeroMessages.sandro;
    case HeroId.Wrathmont:
      return warlockHeroMessages.wrathmont;
    case HeroId.Vesper:
      return warlockHeroMessages.vesper;
    // Default
    default:
      return unknownMessage;
  }
};
