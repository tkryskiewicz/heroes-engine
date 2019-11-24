import { Army, Hero, HeroClassData, HeroData, random, Troop } from "heroes-core";

import { HeroClass } from "./HeroClass";
import { MapObjectId } from "./map";

export enum HeroId {
  // Knights
  LordKilburn = "lord-kilburn",
  LordHaart = "lord-haart",
  SirGallant = "sir-gallant",
  Arturius = "arturius",
  Tyro = "tyro",
  Maximus = "maximus",
  Ector = "ector",
  Dimitri = "dimitri",
  Ambrose = "ambrose",

  // Barbarians
  Thundax = "thundax",
  Ergon = "ergon",
  Kelzen = "kelzen",
  Tsabu = "tsabu",
  CragHack = "crag-hack",
  JoJosh = "jojosh",
  Atlas = "atlas",
  Yog = "yog",
  Antoine = "antoine",

  // Sorceresses
  Ariel = "ariel",
  Vatawna = "vatawna",
  Carlawn = "carlawn",
  Rebecca = "rebecca",
  Luna = "luna",
  Astra = "astra",
  Natasha = "natasha",
  Gem = "gem",
  Troyan = "troyan",

  // Warlocks
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

const knightHeroes: HeroData[] = [
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

const barbarianHeroes: HeroData[] = [
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

const sorceressHeroes: HeroData[] = [
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

const warlockHeroes: HeroData[] = [
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

export const heroes: HeroData[] = [
  ...knightHeroes,
  ...barbarianHeroes,
  ...sorceressHeroes,
  ...warlockHeroes,
];

export const constructHero = (id: string, heroId: string, heroClass: HeroClassData): Hero => {
  const army: Army = heroClass.army
    .map((t): Troop => ({
      count: random(t.min, t.max),
      creature: t.creature,
    }))
    .filter((t) => t.count);

  return {
    army,
    dataId: MapObjectId.Hero,
    experience: 0,
    heroClass: heroClass.id,
    heroId,
    id,
    items: [],
    luck: 0,
    mobility: 0,
    morale: 0,
    skills: {
      ...heroClass.skills,
    },
  };
};
