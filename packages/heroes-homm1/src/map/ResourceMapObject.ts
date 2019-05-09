import {
  GameData,
  MapObject,
  MapObjectData,
  PickableMapObjectData,
  TreasureMapObject,
  TreasureMapObjectData,
} from "heroes-core";

export interface ResourceMapObjectData extends TreasureMapObjectData, PickableMapObjectData {
}

export const isResourceMapObjectData = (
  objectData: MapObjectData,
  data: GameData,
): objectData is ResourceMapObjectData =>
  data.resources[objectData.id] !== undefined;

export type ResourceMapObject = TreasureMapObject;

export const isResourceMapObject = (object: MapObject, data: GameData): object is ResourceMapObject =>
  data.resources[object.dataId] !== undefined;
