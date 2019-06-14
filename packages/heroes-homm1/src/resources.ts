import { ResourceData } from "heroes-core";

import { MapObjectId } from "./map";
import { Resource } from "./Resource";

export const resources: ResourceData[] = [
  {
    id: Resource.Wood,
    mine: MapObjectId.Sawmill,
  },
  {
    id: Resource.Mercury,
    mine: MapObjectId.Alchemist,
  },
  {
    id: Resource.Ore,
    mine: MapObjectId.OreMine,
  },
  {
    id: Resource.Sulfur,
    mine: MapObjectId.SulfurMine,
  },
  {
    id: Resource.Crystal,
    mine: MapObjectId.CrystalMine,
  },
  {
    id: Resource.Gems,
    mine: MapObjectId.GemsMine,
  },
  {
    id: Resource.Gold,
    mine: MapObjectId.GoldMine,
  },
];
