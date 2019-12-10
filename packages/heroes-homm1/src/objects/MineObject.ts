import {
  GameData,
  GameObject,
  GameObjectData,
  OwnableObject,
  OwnableObjectData,
  ResourceGeneratorObjectData,
} from "heroes-core";

export interface MineObjectData extends GameObjectData, ResourceGeneratorObjectData, OwnableObjectData {
}

const isMine = (id: string, data: Pick<GameData, "resources">): boolean =>
  Object.values(data.resources).some((r) => r.mine === id);

export const isMineObjectData = (
  objectData: GameObjectData,
  data: Pick<GameData, "resources">,
): objectData is MineObjectData =>
  isMine(objectData.id, data);

export type MineObject = OwnableObject;

export const isMineObject = (object: GameObject, data: Pick<GameData, "resources">): object is MineObject =>
  isMine(object.dataId, data);
