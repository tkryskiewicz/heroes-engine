import { Army, Hero, HeroClassData, HeroData, random, Troop } from "heroes-core";

import { HeroClassId } from "./HeroClassId";
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
    heroClass: HeroClassId.Knight,
    id: HeroId.LordKilburn,
  },
  {
    heroClass: HeroClassId.Knight,
    id: HeroId.LordHaart,
  },
  {
    heroClass: HeroClassId.Knight,
    id: HeroId.SirGallant,
  },
  {
    heroClass: HeroClassId.Knight,
    id: HeroId.Arturius,
  },
  {
    heroClass: HeroClassId.Knight,
    id: HeroId.Tyro,
  },
  {
    heroClass: HeroClassId.Knight,
    id: HeroId.Maximus,
  },
  {
    heroClass: HeroClassId.Knight,
    id: HeroId.Ector,
  },
  {
    heroClass: HeroClassId.Knight,
    id: HeroId.Dimitri,
  },
  {
    heroClass: HeroClassId.Knight,
    id: HeroId.Ambrose,
  },
];

const barbarianHeroes: HeroData[] = [
  {
    heroClass: HeroClassId.Barbarian,
    id: HeroId.Thundax,
  },
  {
    heroClass: HeroClassId.Barbarian,
    id: HeroId.Ergon,
  },
  {
    heroClass: HeroClassId.Barbarian,
    id: HeroId.Kelzen,
  },
  {
    heroClass: HeroClassId.Barbarian,
    id: HeroId.Tsabu,
  },
  {
    heroClass: HeroClassId.Barbarian,
    id: HeroId.CragHack,
  },
  {
    heroClass: HeroClassId.Barbarian,
    id: HeroId.JoJosh,
  },
  {
    heroClass: HeroClassId.Barbarian,
    id: HeroId.Atlas,
  },
  {
    heroClass: HeroClassId.Barbarian,
    id: HeroId.Yog,
  },
  {
    heroClass: HeroClassId.Barbarian,
    id: HeroId.Antoine,
  },
];

const sorceressHeroes: HeroData[] = [
  {
    heroClass: HeroClassId.Sorceress,
    id: HeroId.Ariel,
  },
  {
    heroClass: HeroClassId.Sorceress,
    id: HeroId.Vatawna,
  },
  {
    heroClass: HeroClassId.Sorceress,
    id: HeroId.Carlawn,
  },
  {
    heroClass: HeroClassId.Sorceress,
    id: HeroId.Rebecca,
  },
  {
    heroClass: HeroClassId.Sorceress,
    id: HeroId.Luna,
  },
  {
    heroClass: HeroClassId.Sorceress,
    id: HeroId.Astra,
  },
  {
    heroClass: HeroClassId.Sorceress,
    id: HeroId.Natasha,
  },
  {
    heroClass: HeroClassId.Sorceress,
    id: HeroId.Gem,
  },
  {
    heroClass: HeroClassId.Sorceress,
    id: HeroId.Troyan,
  },
];

const warlockHeroes: HeroData[] = [
  {
    heroClass: HeroClassId.Warlock,
    id: HeroId.Agar,
  },
  {
    heroClass: HeroClassId.Warlock,
    id: HeroId.Crodo,
  },
  {
    heroClass: HeroClassId.Warlock,
    id: HeroId.Falagar,
  },
  {
    heroClass: HeroClassId.Warlock,
    id: HeroId.Barok,
  },
  {
    heroClass: HeroClassId.Warlock,
    id: HeroId.Arie,
  },
  {
    heroClass: HeroClassId.Warlock,
    id: HeroId.Kastore,
  },
  {
    heroClass: HeroClassId.Warlock,
    id: HeroId.Sandro,
  },
  {
    heroClass: HeroClassId.Warlock,
    id: HeroId.Wrathmont,
  },
  {
    heroClass: HeroClassId.Warlock,
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
