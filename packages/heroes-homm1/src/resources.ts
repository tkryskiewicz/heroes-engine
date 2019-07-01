import { ResourceData } from "heroes-core";

import { MapObjectId } from "./map";
import { ResourceId } from "./ResourceId";

export const resources: ResourceData[] = [
  {
    id: ResourceId.Wood,
    mine: MapObjectId.Sawmill,
  },
  {
    id: ResourceId.Mercury,
    mine: MapObjectId.Alchemist,
  },
  {
    id: ResourceId.Ore,
    mine: MapObjectId.OreMine,
  },
  {
    id: ResourceId.Sulfur,
    mine: MapObjectId.SulfurMine,
  },
  {
    id: ResourceId.Crystal,
    mine: MapObjectId.CrystalMine,
  },
  {
    id: ResourceId.Gems,
    mine: MapObjectId.GemsMine,
  },
  {
    id: ResourceId.Gold,
    mine: MapObjectId.GoldMine,
  },
];
