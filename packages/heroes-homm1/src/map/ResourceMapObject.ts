import {
  GameData,
  MapObject,
  MapObjectData,
  PickableObjectData,
  TreasureMapObject,
  TreasureMapObjectData,
} from "heroes-core";

export interface ResourceMapObjectData extends TreasureMapObjectData, PickableObjectData {
}

export const isResourceMapObjectData = (
  objectData: MapObjectData,
  data: Pick<GameData, "resources">,
): objectData is ResourceMapObjectData =>
  data.resources[objectData.id] !== undefined;

export type ResourceMapObject = TreasureMapObject;

export const isResourceMapObject = (
  object: MapObject,
  data: Pick<GameData, "resources">,
): object is ResourceMapObject =>
  data.resources[object.dataId] !== undefined;
