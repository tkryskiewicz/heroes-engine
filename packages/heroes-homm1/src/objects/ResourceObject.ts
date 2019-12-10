import {
  GameData,
  GameObject,
  GameObjectData,
  PickableObjectData,
  TreasureObject,
  TreasureObjectData,
} from "heroes-core";

export interface ResourceObjectData extends TreasureObjectData, PickableObjectData {
}

export const isResourceObjectData = (
  objectData: GameObjectData,
  data: Pick<GameData, "resources">,
): objectData is ResourceObjectData =>
  data.resources[objectData.id] !== undefined;

export type ResourceObject = TreasureObject;

export const isResourceObject = (
  object: GameObject,
  data: Pick<GameData, "resources">,
): object is ResourceObject =>
  data.resources[object.dataId] !== undefined;
