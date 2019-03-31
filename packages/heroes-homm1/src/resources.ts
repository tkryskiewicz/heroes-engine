import { MapObjectId } from "./mapObjects";
import { Resource } from "./Resource";

// TODO: move to game data
const resourceMineMap: { readonly [resource: string]: string } = {
  [Resource.Crystal]: MapObjectId.CrystalMine,
  [Resource.Gems]: MapObjectId.GemsMine,
  [Resource.Gold]: MapObjectId.GoldMine,
  [Resource.Mercury]: MapObjectId.Alchemist,
  [Resource.Ore]: MapObjectId.OreMine,
  [Resource.Sulfur]: MapObjectId.SulfurMine,
  [Resource.Wood]: MapObjectId.Sawmill,
};

export const getResourceMineMapObjectId = (resource: string): string =>
  resourceMineMap[resource];
