import { Army, Hero, Troop } from "heroes-core";

import { HeroClass } from "./HeroClass";
import { heroClasses } from "./heroClasses";

export interface HeroInfo {
  readonly id: string;
  readonly heroClass: string;
}

// Knights
export enum HeroId {
  LordKilburn = "lord-kilburn",
  LordHaart = "lord-haart",
  SirGallant = "sir-gallant",
  Arturius = "arturius",
  Tyro = "tyro",
  Maximus = "maximus",
  Ector = "ector",
  Dimitri = "dimitri",
  Ambrose = "ambrose",
}

const knightHeroes: HeroInfo[] = [
  {
    heroClass: HeroClass.Knight,
    id: HeroId.LordKilburn,
  },
  {
    heroClass: HeroClass.Knight,
    id: HeroId.LordHaart,
  },
  {
    heroClass: HeroClass.Knight,
    id: HeroId.SirGallant,
  },
  {
    heroClass: HeroClass.Knight,
    id: HeroId.Arturius,
  },
  {
    heroClass: HeroClass.Knight,
    id: HeroId.Tyro,
  },
  {
    heroClass: HeroClass.Knight,
    id: HeroId.Maximus,
  },
  {
    heroClass: HeroClass.Knight,
    id: HeroId.Ector,
  },
  {
    heroClass: HeroClass.Knight,
    id: HeroId.Dimitri,
  },
  {
    heroClass: HeroClass.Knight,
    id: HeroId.Ambrose,
  },
];

// Barbarians
export enum HeroId {
  Thundax = "thundax",
  Ergon = "ergon",
  Kelzen = "kelzen",
  Tsabu = "tsabu",
  CragHack = "crag-hack",
  JoJosh = "jojosh",
  Atlas = "atlas",
  Yog = "yog",
  Antoine = "antoine",
}

const barbarianHeroes: HeroInfo[] = [
  {
    heroClass: HeroClass.Barbarian,
    id: HeroId.Thundax,
  },
  {
    heroClass: HeroClass.Barbarian,
    id: HeroId.Ergon,
  },
  {
    heroClass: HeroClass.Barbarian,
    id: HeroId.Kelzen,
  },
  {
    heroClass: HeroClass.Barbarian,
    id: HeroId.Tsabu,
  },
  {
    heroClass: HeroClass.Barbarian,
    id: HeroId.CragHack,
  },
  {
    heroClass: HeroClass.Barbarian,
    id: HeroId.JoJosh,
  },
  {
    heroClass: HeroClass.Barbarian,
    id: HeroId.Atlas,
  },
  {
    heroClass: HeroClass.Barbarian,
    id: HeroId.Yog,
  },
  {
    heroClass: HeroClass.Barbarian,
    id: HeroId.Antoine,
  },
];

// Sorceresses
export enum HeroId {
  Ariel = "ariel",
  Vatawna = "vatawna",
  Carlawn = "carlawn",
  Rebecca = "rebecca",
  Luna = "luna",
  Astra = "astra",
  Natasha = "natasha",
  Gem = "gem",
  Troyan = "troyan",
}

const sorceressHeroes: HeroInfo[] = [
  {
    heroClass: HeroClass.Sorceress,
    id: HeroId.Ariel,
  },
  {
    heroClass: HeroClass.Sorceress,
    id: HeroId.Vatawna,
  },
  {
    heroClass: HeroClass.Sorceress,
    id: HeroId.Carlawn,
  },
  {
    heroClass: HeroClass.Sorceress,
    id: HeroId.Rebecca,
  },
  {
    heroClass: HeroClass.Sorceress,
    id: HeroId.Luna,
  },
  {
    heroClass: HeroClass.Sorceress,
    id: HeroId.Astra,
  },
  {
    heroClass: HeroClass.Sorceress,
    id: HeroId.Natasha,
  },
  {
    heroClass: HeroClass.Sorceress,
    id: HeroId.Gem,
  },
  {
    heroClass: HeroClass.Sorceress,
    id: HeroId.Troyan,
  },
];

// Warlocks
export enum HeroId {
  Agar = "agar",
  Crodo = "crodo",
  Falagar = "falagar",
  Barok = "barok",
  Arie = "arie",
  Kastore = "kastore",
  Sandro = "sandro",
  Wrathmont = "wrathmont",
  Vesper = "vesper",
}

const warlockHeroes: HeroInfo[] = [
  {
    heroClass: HeroClass.Warlock,
    id: HeroId.Agar,
  },
  {
    heroClass: HeroClass.Warlock,
    id: HeroId.Crodo,
  },
  {
    heroClass: HeroClass.Warlock,
    id: HeroId.Falagar,
  },
  {
    heroClass: HeroClass.Warlock,
    id: HeroId.Barok,
  },
  {
    heroClass: HeroClass.Warlock,
    id: HeroId.Arie,
  },
  {
    heroClass: HeroClass.Warlock,
    id: HeroId.Kastore,
  },
  {
    heroClass: HeroClass.Warlock,
    id: HeroId.Sandro,
  },
  {
    heroClass: HeroClass.Warlock,
    id: HeroId.Wrathmont,
  },
  {
    heroClass: HeroClass.Warlock,
    id: HeroId.Vesper,
  },
];

export const heroes: HeroInfo[] = [
  ...knightHeroes,
  ...barbarianHeroes,
  ...sorceressHeroes,
  ...warlockHeroes,
];

export const constructHero = (id: string, alignment: string): Hero => {
  const hero = heroes.find((h) => h.id === id)!;

  const heroClass = heroClasses.find((c) => c.id === hero.heroClass)!;

  const army: Army = heroClass.army
    .map((t): Troop => ({
      count: Math.floor(t.min + Math.random() * (t.max - t.min + 1)),
      creature: t.creature,
    }))
    .filter((t) => t.count);

  return {
    alignment,
    army,
    artifacts: [],
    experience: 0,
    heroClass: hero.heroClass,
    id,
    luck: 0,
    mobility: 0,
    morale: 0,
    skills: {
      ...heroClass.skills,
    },
  };
};
