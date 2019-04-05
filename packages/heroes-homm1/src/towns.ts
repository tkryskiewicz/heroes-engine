import { Town } from "heroes-core";

import { HeroClass } from "./HeroClass";
import {
  commonStructures,
  constructStructure,
  coreStructures,
  farmStructures,
  forestStructures,
  mountainsStructures,
  plainsStructures,
  StructureType,
} from "./structures";
import { TownId } from "./TownId";

interface TownType {
  readonly id: TownId;
  readonly heroClass: HeroClass;
  readonly structures: StructureType[];
}

const towns: TownType[] = [
  {
    heroClass: HeroClass.Knight,
    id: TownId.Farm,
    structures: farmStructures,
  },
  {
    heroClass: HeroClass.Barbarian,
    id: TownId.Plains,
    structures: plainsStructures,
  },
  {
    heroClass: HeroClass.Sorceress,
    id: TownId.Forest,
    structures: forestStructures,
  },
  {
    heroClass: HeroClass.Warlock,
    id: TownId.Mountains,
    structures: mountainsStructures,
  },
];

export const constructTown = (id: TownId, name: string): Town => {
  const town = towns.find((t) => t.id === id)!;

  return {
    canConstructStructures: true,
    heroClass: town.heroClass,
    id: town.id,
    name,
    structures: [
      ...coreStructures,
      ...commonStructures,
      ...town.structures,
    ].map(constructStructure),
  };
};
