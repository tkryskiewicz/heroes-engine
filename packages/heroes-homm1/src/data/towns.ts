import { TownData } from "heroes-core";

import { HeroClassId } from "./HeroClassId";
import {
  commonStructures,
  coreStructures,
  farmStructures,
  forestStructures,
  mountainsStructures,
  plainsStructures,
} from "./structures";
import { TownId } from "./TownId";

export const townObjects: TownData[] = [
  {
    heroClass: HeroClassId.Knight,
    id: TownId.Farm,
    structures: [
      ...coreStructures,
      ...commonStructures,
      ...farmStructures,
    ],
  },
  {
    heroClass: HeroClassId.Barbarian,
    id: TownId.Plains,
    structures: [
      ...coreStructures,
      ...commonStructures,
      ...plainsStructures,
    ],
  },
  {
    heroClass: HeroClassId.Sorceress,
    id: TownId.Forest,
    structures: [
      ...coreStructures,
      ...commonStructures,
      ...forestStructures,
    ],
  },
  {
    heroClass: HeroClassId.Warlock,
    id: TownId.Mountains,
    structures: [
      ...coreStructures,
      ...commonStructures,
      ...mountainsStructures,
    ],
  },
];
