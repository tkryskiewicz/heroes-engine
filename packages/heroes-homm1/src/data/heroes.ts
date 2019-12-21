import { HeroData } from "heroes-core";

import { HeroClassId } from "./HeroClassId";
import { HeroId } from "./HeroId";

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
