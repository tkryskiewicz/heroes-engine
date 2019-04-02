import {
  ArtifactMapObjectData,
  DwellingMapObjectData,
  HeroMapObjectData,
  InteractionLimitType,
  LimitedInteractionMapObjectData,
  MapObjectData,
  PickableMapObjectData,
  PuzzleMapObjectData,
  ResourceGeneratorMapObjectData,
  TownMapObjectData,
  TreasureMapObjectData,
} from "heroes-core";

import { ArtifactId, artifacts } from "./artifacts";
import { CreatureId } from "./creatures";
import { Resource } from "./Resource";

export enum MapObjectId {
  Hero = "hero",
  Town = "town",

  // treasures
  Crystal = "crystal",
  Gems = "gems",
  Gold = "gold",
  Mercury = "mercury",
  Ore = "ore",
  Sulfur = "sulfur",
  Wood = "wood",

  Fireplace = "fireplace",

  // mines
  CrystalMine = "crystal-mine",
  // Gem Mine or Gems Mine??
  GemsMine = "gems-mine",
  GoldMine = "gold-mine",
  Alchemist = "alchemist",
  OreMine = "ore-mine",
  SulfurMine = "sulfur-mine",
  Sawmill = "sawmill",

  // dwellings
  Cottage = "cottage",
  Hut = "hut",
  ThatchedHut = "thatched-hut",

  // puzzle
  Obelisk = "obelisk",

  // other
  Bouy = "bouy",
  FaerieRing = "faerie-ring",
  Fountain = "fountain",
  Gazebo = "gazebo",
  Graveyard = "graveyard",
  Oasis = "oasis",
  Rosebush = "rosebush",
  Shipwreck = "shipwreck",
  Shrine = "shrine",
  Shrine2 = "shrine2",
  Signpost = "signpost",
  Statue = "statue",
  TravelGate = "travel-gate",
  WagonCamp = "wagon-camp",
  Waterwheel = "waterwheel",
  Whirlpool = "whirlpool",
  Windmill = "windmill",
}

const heroObjects: HeroMapObjectData[] = [
  {
    id: MapObjectId.Hero,
    ownable: true,
  },
];

const townObjects: TownMapObjectData[] = [
  {
    id: MapObjectId.Town,
    ownable: true,
  },
];

type ArtifactObjectData = ArtifactMapObjectData & PickableMapObjectData;

const artifactObjects: ArtifactObjectData[] = artifacts
  .filter((a) => a.id !== ArtifactId.Spellbook && !a.isUltimate)
  .map<ArtifactObjectData>((a) => ({
    artifact: a.id,
    id: a.id,
    pickable: true,
  }));

const treasureObjects: Array<TreasureMapObjectData & PickableMapObjectData> = [
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

const mineObjects: ResourceGeneratorMapObjectData[] = [
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

const puzzleObjects: Array<PuzzleMapObjectData & LimitedInteractionMapObjectData> = [
  {
    id: MapObjectId.Obelisk,
    interactionLimit: InteractionLimitType.OncePerAlignment,
    uncoversPuzzlePiece: true,
  },
];

export const mapObjects: MapObjectData[] = [
  ...heroObjects,
  ...townObjects,
  ...treasureObjects,
  ...artifactObjects,
  ...mineObjects,
  ...dwellingObjects,
  ...puzzleObjects,
];
