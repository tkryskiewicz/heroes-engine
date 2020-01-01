import { MapObjectData, TownData } from "heroes-core";

import { ObjectId } from "../ObjectId";
import { CategorisedObjectData, TerrainRestrictedObjectData, TownObjectData } from "../objects";
import { HeroClassId } from "./HeroClassId";
import { ObjectType } from "./ObjectType";
import {
  commonStructures,
  coreStructures,
  farmStructures,
  forestStructures,
  mountainsStructures,
  plainsStructures,
} from "./structures";
import { landTerrains } from "./terrains";
import { TownId } from "./TownId";

const farm: TownData = {
  id: TownId.Farm,
  structures: [
    ...coreStructures,
    ...commonStructures,
    ...farmStructures,
  ],
};

const plains: TownData = {
  id: TownId.Plains,
  structures: [
    ...coreStructures,
    ...commonStructures,
    ...plainsStructures,
  ],
};

const forest: TownData = {
  id: TownId.Forest,
  structures: [
    ...coreStructures,
    ...commonStructures,
    ...forestStructures,
  ],
};

const mountains: TownData = {
  id: TownId.Mountains,
  structures: [
    ...coreStructures,
    ...commonStructures,
    ...mountainsStructures,
  ],
};

export const towns: TownData[] = [
  farm,
  plains,
  forest,
  mountains,
];

const randomTown: MapObjectData & TerrainRestrictedObjectData & CategorisedObjectData = {
  category: ObjectType.Town,
  grid: [
    true, true, true, true,
    true, true, true, true,
    false, false, false, false,
  ],
  height: 3,
  id: ObjectId.RandomTown,
  restrictedTerrains: landTerrains,
  width: 4,
};

const randomCastle: MapObjectData & TerrainRestrictedObjectData & CategorisedObjectData = {
  category: ObjectType.Town,
  grid: [
    true, true, true, true,
    true, true, true, true,
    false, false, false, false,
  ],
  height: 3,
  id: ObjectId.RandomCastle,
  restrictedTerrains: landTerrains,
  width: 4,
};

const farmTown: TownObjectData & MapObjectData & TerrainRestrictedObjectData & CategorisedObjectData = {
  army: {
    preventMovingLastTroop: false,
  },
  category: ObjectType.Town,
  grid: [
    true, true, true, true,
    true, true, true, true,
    false, false, false, false,
  ],
  height: 3,
  heroClass: HeroClassId.Knight,
  id: ObjectId.FarmTown,
  isCastleBuilt: false,
  ownable: true,
  restrictedTerrains: landTerrains,
  town: TownId.Farm,
  width: 4,
};

const farmCastle = {
  ...farmTown,
  id: ObjectId.FarmCastle,
  isCastleBuilt: true,
};

const plainsTown: TownObjectData & MapObjectData & TerrainRestrictedObjectData & CategorisedObjectData = {
  army: {
    preventMovingLastTroop: false,
  },
  category: ObjectType.Town,
  grid: [
    true, true, true, true,
    true, true, true, true,
    false, false, false, false,
  ],
  height: 3,
  heroClass: HeroClassId.Barbarian,
  id: ObjectId.PlainsTown,
  isCastleBuilt: false,
  ownable: true,
  restrictedTerrains: landTerrains,
  town: TownId.Plains,
  width: 4,
};

const plainsCastle = {
  ...plainsTown,
  id: ObjectId.PlainsCastle,
  isCastleBuilt: true,
};

const forestTown: TownObjectData & MapObjectData & TerrainRestrictedObjectData & CategorisedObjectData = {
  army: {
    preventMovingLastTroop: false,
  },
  category: ObjectType.Town,
  grid: [
    true, true, true, true,
    true, true, true, true,
    false, false, false, false,
  ],
  height: 3,
  heroClass: HeroClassId.Sorceress,
  id: ObjectId.ForestTown,
  isCastleBuilt: false,
  ownable: true,
  restrictedTerrains: landTerrains,
  town: TownId.Forest,
  width: 4,
};

const forestCastle = {
  ...forestTown,
  id: ObjectId.ForestCastle,
  isCastleBuilt: true,
};

const mountainsTown: TownObjectData & MapObjectData & TerrainRestrictedObjectData & CategorisedObjectData = {
  army: {
    preventMovingLastTroop: false,
  },
  category: ObjectType.Town,
  grid: [
    true, true, true, true,
    true, true, true, true,
    false, false, false, false,
  ],
  height: 3,
  heroClass: HeroClassId.Warlock,
  id: ObjectId.MountainsTown,
  isCastleBuilt: false,
  ownable: true,
  restrictedTerrains: landTerrains,
  town: TownId.Mountains,
  width: 4,
};

const mountainsCastle = {
  ...mountainsTown,
  id: ObjectId.MountainsCastle,
  isCastleBuilt: true,
};

export const townObjects = [
  randomTown,
  randomCastle,
  farmTown,
  farmCastle,
  plainsTown,
  plainsCastle,
  forestTown,
  forestCastle,
  mountainsTown,
  mountainsCastle,
];
