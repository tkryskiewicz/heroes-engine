import {
  LimitedInteractionObject,
  LimitedInteractionObjectData,
  MapObject,
  MapObjectData,
  PuzzleMapObjectData,
} from "heroes-core";

import { MapObjectId } from "./MapObjectId";

export interface ObeliskMapObjectData extends PuzzleMapObjectData, LimitedInteractionObjectData {
}

export const isObeliskMapObjectData = (objectData: MapObjectData): objectData is ObeliskMapObjectData =>
  objectData.id === MapObjectId.Obelisk;

export type ObeliskMapObject = LimitedInteractionObject;

export const isObeliskMapObject = (object: MapObject): object is ObeliskMapObject =>
  object.dataId === MapObjectId.Obelisk;
