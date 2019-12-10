import { ResourceData } from "heroes-core";

import { ObjectId } from "./ObjectId";
import { ResourceId } from "./ResourceId";

export const resources: ResourceData[] = [
  {
    id: ResourceId.Wood,
    mine: ObjectId.Sawmill,
  },
  {
    id: ResourceId.Mercury,
    mine: ObjectId.Alchemist,
  },
  {
    id: ResourceId.Ore,
    mine: ObjectId.OreMine,
  },
  {
    id: ResourceId.Sulfur,
    mine: ObjectId.SulfurMine,
  },
  {
    id: ResourceId.Crystal,
    mine: ObjectId.CrystalMine,
  },
  {
    id: ResourceId.Gems,
    mine: ObjectId.GemsMine,
  },
  {
    id: ResourceId.Gold,
    mine: ObjectId.GoldMine,
  },
];
