import { DwellingMapObjectData, MapObjectData } from "heroes-core";

import { CreatureId } from "./creatures";

export enum MapObjectId {
  Bouy = "bouy",
  Cottage = "cottage",
  FaerieRing = "faerie-ring",
  Fireplace = "fireplace",
  Fountain = "fountain",
  Gazebo = "gazebo",
  Graveyard = "graveyard",
  Hut = "hut",
  Oasis = "oasis",
  Obelisk = "obelisk",
  Rosebush = "rosebush",
  Shipwreck = "shipwreck",
  Shrine = "shrine",
  Shrine2 = "shrine2",
  Signpost = "signpost",
  Statue = "statue",
  ThatchedHut = "thatched-hut",
  TravelGate = "travel-gate",
  WagonCamp = "wagon-camp",
  Waterwheel = "waterwheel",
  Whirlpool = "whirlpool",
  Windmill = "windmill",
}

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
  ...dwellingObjects,
];
