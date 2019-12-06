import {
  GameData,
  GameObjectData,
  MapObject,
  PickableObjectData,
  TreasureObject,
  TreasureObjectData,
} from "heroes-core";

export interface ResourceMapObjectData extends TreasureObjectData, PickableObjectData {
}

export const isResourceMapObjectData = (
  objectData: GameObjectData,
  data: Pick<GameData, "resources">,
): objectData is ResourceMapObjectData =>
  data.resources[objectData.id] !== undefined;

export type ResourceMapObject = TreasureObject;

export const isResourceMapObject = (
  object: MapObject,
  data: Pick<GameData, "resources">,
): object is ResourceMapObject =>
  data.resources[object.dataId] !== undefined;
