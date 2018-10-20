import { HeroClass } from "./HeroClass";

export interface HeroInfo {
  id: string;
  name: string;
  heroClass: string;
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
    name: "Lord Kilburn",
  },
  {
    heroClass: HeroClass.Knight,
    id: HeroId.LordHaart,
    name: "Lord Haart",
  },
  {
    heroClass: HeroClass.Knight,
    id: HeroId.SirGallant,
    name: "Sir Gallant",
  },
  {
    heroClass: HeroClass.Knight,
    id: HeroId.Arturius,
    name: "Arturius",
  },
  {
    heroClass: HeroClass.Knight,
    id: HeroId.Tyro,
    name: "Tyro",
  },
  {
    heroClass: HeroClass.Knight,
    id: HeroId.Maximus,
    name: "Maximus",
  },
  {
    heroClass: HeroClass.Knight,
    id: HeroId.Ector,
    name: "Ector",
  },
  {
    heroClass: HeroClass.Knight,
    id: HeroId.Dimitri,
    name: "Dimitri",
  },
  {
    heroClass: HeroClass.Knight,
    id: HeroId.Ambrose,
    name: "Ambrose",
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

const barbarianHeroes = [
  {
    heroClass: HeroClass.Barbarian,
    id: HeroId.Thundax,
    name: "Thundax",
  },
  {
    heroClass: HeroClass.Barbarian,
    id: HeroId.Ergon,
    name: "Ergon",
  },
  {
    heroClass: HeroClass.Barbarian,
    id: HeroId.Kelzen,
    name: "Kelzen",
  },
  {
    heroClass: HeroClass.Barbarian,
    id: HeroId.Tsabu,
    name: "Tsabu",
  },
  {
    heroClass: HeroClass.Barbarian,
    id: HeroId.CragHack,
    name: "Crag Hack",
  },
  {
    heroClass: HeroClass.Barbarian,
    id: HeroId.JoJosh,
    name: "Jojosh",
  },
  {
    heroClass: HeroClass.Barbarian,
    id: HeroId.Atlas,
    name: "Atlas",
  },
  {
    heroClass: HeroClass.Barbarian,
    id: HeroId.Yog,
    name: "Yog",
  },
  {
    heroClass: HeroClass.Barbarian,
    id: HeroId.Antoine,
    name: "Antoine",
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

const sorceressHeroes = [
  {
    heroClass: HeroClass.Sorceress,
    id: HeroId.Ariel,
    name: "Ariel",
  },
  {
    heroClass: HeroClass.Sorceress,
    id: HeroId.Vatawna,
    name: "Vatawna",
  },
  {
    heroClass: HeroClass.Sorceress,
    id: HeroId.Carlawn,
    name: "Carlawn",
  },
  {
    heroClass: HeroClass.Sorceress,
    id: HeroId.Rebecca,
    name: "Rebecca",
  },
  {
    heroClass: HeroClass.Sorceress,
    id: HeroId.Luna,
    name: "Luna",
  },
  {
    heroClass: HeroClass.Sorceress,
    id: HeroId.Astra,
    name: "Astra",
  },
  {
    heroClass: HeroClass.Sorceress,
    id: HeroId.Natasha,
    name: "Natasha",
  },
  {
    heroClass: HeroClass.Sorceress,
    id: HeroId.Gem,
    name: "Gem",
  },
  {
    heroClass: HeroClass.Sorceress,
    id: HeroId.Troyan,
    name: "Troyan",
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

const warlockHeroes = [
  {
    heroClass: HeroClass.Warlock,
    id: HeroId.Agar,
    name: "Agar",
  },
  {
    heroClass: HeroClass.Warlock,
    id: HeroId.Crodo,
    name: "Crodo",
  },
  {
    heroClass: HeroClass.Warlock,
    id: HeroId.Falagar,
    name: "Falagar",
  },
  {
    heroClass: HeroClass.Warlock,
    id: HeroId.Barok,
    name: "Barok",
  },
  {
    heroClass: HeroClass.Warlock,
    id: HeroId.Arie,
    name: "Arie",
  },
  {
    heroClass: HeroClass.Warlock,
    id: HeroId.Kastore,
    name: "Kastore",
  },
  {
    heroClass: HeroClass.Warlock,
    id: HeroId.Sandro,
    name: "Sandro",
  },
  {
    heroClass: HeroClass.Warlock,
    id: HeroId.Wrathmont,
    name: "Wrathmont",
  },
  {
    heroClass: HeroClass.Warlock,
    id: HeroId.Vesper,
    name: "Vesper",
  },
];

export const heroes = [
  ...knightHeroes,
  ...barbarianHeroes,
  ...sorceressHeroes,
  ...warlockHeroes,
];
