import {
  GameData,
  MapObject,
  MapObjectData,
  OwnableMapObject,
  OwnableMapObjectData,
  ResourceGeneratorMapObjectData,
} from "heroes-core";

export interface MineMapObjectData extends ResourceGeneratorMapObjectData, OwnableMapObjectData {
}

const isMine = (id: string, data: GameData): boolean =>
  Object.values(data.resources).some((r) => r.mine === id);

export const isMineMapObjectData = (objectData: MapObjectData, data: GameData): objectData is MineMapObjectData =>
  isMine(objectData.id, data);

export type MineMapObject = OwnableMapObject;

export const isMineMapObject = (object: MapObject, data: GameData): object is MineMapObject =>
  isMine(object.dataId, data);
