import {
  GameData,
  MapObject,
  MapObjectData,
  OwnableObject,
  OwnableObjectData,
  ResourceGeneratorObjectData,
} from "heroes-core";

export interface MineMapObjectData extends MapObjectData, ResourceGeneratorObjectData, OwnableObjectData {
}

const isMine = (id: string, data: Pick<GameData, "resources">): boolean =>
  Object.values(data.resources).some((r) => r.mine === id);

export const isMineMapObjectData = (
  objectData: MapObjectData,
  data: Pick<GameData, "resources">,
): objectData is MineMapObjectData =>
  isMine(objectData.id, data);

export type MineMapObject = OwnableObject;

export const isMineMapObject = (object: MapObject, data: Pick<GameData, "resources">): object is MineMapObject =>
  isMine(object.dataId, data);
