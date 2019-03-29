import { DwellingMapObjectData, MapObjectData, TreasureMapObjectData } from "heroes-core";

import { CreatureId } from "./creatures";
import { Resource } from "./Resource";

export enum MapObjectId {
  // treasures
  Crystal = "crystal",
  Gems = "gems",
  Gold = "gold",
  Mercury = "mercury",
  Ore = "ore",
  Sulfur = "sulfur",
  Wood = "wood",

  Fireplace = "fireplace",

  // dwellings
  Cottage = "cottage",
  Hut = "hut",
  ThatchedHut = "thatched-hut",

  // other
  Bouy = "bouy",
  FaerieRing = "faerie-ring",
  Fountain = "fountain",
  Gazebo = "gazebo",
  Graveyard = "graveyard",
  Oasis = "oasis",
  Obelisk = "obelisk",
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

const treasureObjects: TreasureMapObjectData[] = [
  {
    id: MapObjectId.Gold,
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
    treasure: {
      [Resource.Wood]: {
        max: 15,
        min: 8,
      },
    },
  },
  {
    id: MapObjectId.Ore,
    treasure: {
      [Resource.Ore]: {
        max: 16,
        min: 8,
      },
    },
  },
  {
    id: MapObjectId.Crystal,
    treasure: {
      [Resource.Crystal]: {
        max: 7,
        min: 4,
      },
    },
  },
  {
    id: MapObjectId.Sulfur,
    treasure: {
      [Resource.Sulfur]: {
        max: 7,
        min: 4,
      },
    },
  },
  {
    id: MapObjectId.Gems,
    treasure: {
      [Resource.Gems]: {
        max: 7,
        min: 4,
      },
    },
  },
  {
    id: MapObjectId.Mercury,
    treasure: {
      [Resource.Mercury]: {
        max: 7,
        min: 4,
      },
    },
  },
  {
    id: MapObjectId.Fireplace,
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

export const mapObjects: MapObjectData[] = [
  ...treasureObjects,
  ...dwellingObjects,
];
