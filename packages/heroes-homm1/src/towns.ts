import { TownData } from "heroes-core";

import { HeroClass } from "./HeroClass";
import {
  commonStructures,
  coreStructures,
  farmStructures,
  forestStructures,
  mountainsStructures,
  plainsStructures,
} from "./structures";
import { TownId } from "./TownId";

export const towns: TownData[] = [
  {
    heroClass: HeroClass.Knight,
    id: TownId.Farm,
    structures: [
      ...coreStructures,
      ...commonStructures,
      ...farmStructures,
    ],
  },
  {
    heroClass: HeroClass.Barbarian,
    id: TownId.Plains,
    structures: [
      ...coreStructures,
      ...commonStructures,
      ...plainsStructures,
    ],
  },
  {
    heroClass: HeroClass.Sorceress,
    id: TownId.Forest,
    structures: [
      ...coreStructures,
      ...commonStructures,
      ...forestStructures,
    ],
  },
  {
    heroClass: HeroClass.Warlock,
    id: TownId.Mountains,
    structures: [
      ...coreStructures,
      ...commonStructures,
      ...mountainsStructures,
    ],
  },
];
