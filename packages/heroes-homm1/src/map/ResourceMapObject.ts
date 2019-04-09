import { GameData, MapObject, PickableMapObjectData, TreasureMapObject, TreasureMapObjectData } from "heroes-core";

export interface ResourceMapObjectData extends TreasureMapObjectData, PickableMapObjectData {
}

export type ResourceMapObject = TreasureMapObject;

export const isResourceMapObject = (object: MapObject, data: GameData): object is ResourceMapObject =>
  data.resources[object.dataId] !== undefined;
