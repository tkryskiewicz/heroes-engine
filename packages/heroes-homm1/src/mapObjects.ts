import {
  ArtifactMapObjectData,
  CreatureMapObjectData,
  DwellingMapObjectData,
  InteractionLimitType,
  MapObjectData,
  PickableMapObjectData,
  TownMapObjectData,
  TreasureMapObjectData,
} from "heroes-core";

import { ArtifactId, artifacts } from "./artifacts";
import { CreatureId, creatures } from "./creatures";
import { HeroMapObjectData, MapObjectId, MineMapObjectData, ObeliskMapObjectData, ResourceMapObjectData } from "./map";
import { Resource } from "./Resource";

const heroObjects: HeroMapObjectData[] = [
  {
    army: {
      preventMovingLastTroop: true,
    },
    id: MapObjectId.Hero,
    ownable: true,
  },
];

const townObjects: TownMapObjectData[] = [
  {
    army: {
      preventMovingLastTroop: false,
    },
    id: MapObjectId.Town,
    ownable: true,
  },
];

type CreatureObjectData = CreatureMapObjectData;

const creatureObjects: CreatureObjectData[] = creatures
  .map<CreatureObjectData>((c) => ({
    creature: c.id,
    id: c.id,
  }));

type ArtifactObjectData = ArtifactMapObjectData & PickableMapObjectData;

const artifactObjects: ArtifactObjectData[] = artifacts
  .filter((a) => a.id !== ArtifactId.Spellbook && !a.isUltimate)
  .map<ArtifactObjectData>((a) => ({
    artifact: a.id,
    id: a.id,
    pickable: true,
  }));

const resourceObjects: ResourceMapObjectData[] = [
  {
    id: MapObjectId.Gold,
    pickable: true,
    treasure: {
      [Resource.Gold]: {
        // TODO: multiplies of 100
        max: 500,
        min: 1000,
      },
    },
  },
  {
    id: MapObjectId.Wood,
    pickable: true,
    treasure: {
      [Resource.Wood]: {
        max: 15,
        min: 8,
      },
    },
  },
  {
    id: MapObjectId.Ore,
    pickable: true,
    treasure: {
      [Resource.Ore]: {
        max: 16,
        min: 8,
      },
    },
  },
  {
    id: MapObjectId.Crystal,
    pickable: true,
    treasure: {
      [Resource.Crystal]: {
        max: 7,
        min: 4,
      },
    },
  },
  {
    id: MapObjectId.Sulfur,
    pickable: true,
    treasure: {
      [Resource.Sulfur]: {
        max: 7,
        min: 4,
      },
    },
  },
  {
    id: MapObjectId.Gems,
    pickable: true,
    treasure: {
      [Resource.Gems]: {
        max: 7,
        min: 4,
      },
    },
  },
  {
    id: MapObjectId.Mercury,
    pickable: true,
    treasure: {
      [Resource.Mercury]: {
        max: 7,
        min: 4,
      },
    },
  },
];

const treasureObjects: Array<TreasureMapObjectData & PickableMapObjectData> = [
  {
    id: MapObjectId.Fireplace,
    pickable: true,
    treasure: {
      [Resource.Gold]: {
        max: 7,
        min: 4,
      },
      // TODO: gold + one other resource, x * 100 gold + x other resource
      [Resource.Wood]: {
        max: 7,
        min: 4,
      },
    },
  },
];

const mineObjects: MineMapObjectData[] = [
  {
    id: MapObjectId.CrystalMine,
    ownable: true,
    resourceGenerator: {
      amount: 1,
      resource: Resource.Crystal,
    },
  },
  {
    id: MapObjectId.GemsMine,
    ownable: true,
    resourceGenerator: {
      amount: 1,
      resource: Resource.Crystal,
    },
  },
  {
    id: MapObjectId.GoldMine,
    ownable: true,
    resourceGenerator: {
      amount: 1000,
      resource: Resource.Gold,
    },
  },
  {
    id: MapObjectId.Alchemist,
    ownable: true,
    resourceGenerator: {
      amount: 2,
      resource: Resource.Mercury,
    },
  },
  {
    id: MapObjectId.OreMine,
    ownable: true,
    resourceGenerator: {
      amount: 2,
      resource: Resource.Ore,
    },
  },
  {
    id: MapObjectId.SulfurMine,
    ownable: true,
    resourceGenerator: {
      amount: 1,
      resource: Resource.Sulfur,
    },
  },
  {
    id: MapObjectId.Sawmill,
    ownable: true,
    resourceGenerator: {
      amount: 2,
      resource: Resource.Wood,
    },
  },
];

const dwellingObjects: DwellingMapObjectData[] = [
  {
    dwelling: {
      creature: CreatureId.Archer,
      initialCount: 3,
    },
    id: MapObjectId.Cottage,
  },
  {
    dwelling: {
      creature: CreatureId.Goblin,
      initialCount: 27,
    },
    id: MapObjectId.Hut,
  },
  {
    dwelling: {
      creature: CreatureId.Peasant,
      initialCount: 50,
    },
    id: MapObjectId.ThatchedHut,
  },
];

const puzzleObjects: ObeliskMapObjectData[] = [
  {
    id: MapObjectId.Obelisk,
    interactionLimit: InteractionLimitType.OncePerAlignment,
    uncoversPuzzlePiece: true,
  },
];

export const mapObjects: MapObjectData[] = [
  ...heroObjects,
  ...townObjects,
  ...creatureObjects,
  ...resourceObjects,
  ...treasureObjects,
  ...artifactObjects,
  ...mineObjects,
  ...dwellingObjects,
  ...puzzleObjects,
];
