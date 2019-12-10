import {
  GameObject,
  GameObjectData,
  LimitedInteractionObject,
  LimitedInteractionObjectData,
  PuzzleObjectData,
} from "heroes-core";

import { ObjectId } from "../ObjectId";

export interface ObeliskObjectData extends GameObjectData, PuzzleObjectData, LimitedInteractionObjectData {
}

export const isObeliskObjectData = (objectData: GameObjectData): objectData is ObeliskObjectData =>
  objectData.id === ObjectId.Obelisk;

export type ObeliskObject = LimitedInteractionObject;

export const isObeliskObject = (object: GameObject): object is ObeliskObject =>
  object.dataId === ObjectId.Obelisk;
