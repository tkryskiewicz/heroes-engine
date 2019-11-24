import { Resources } from "../Resource";
import { random } from "../util";
import { isMapObject, MapObject, MapObjectData } from "./MapObject";

export interface TreasureMapObjectData extends MapObjectData {
  readonly treasure: {
    readonly [resource: string]: {
      readonly min: number;
      readonly max: number;
    };
  };
}

export const isTreasureMapObjectData = (objectData: MapObjectData): objectData is TreasureMapObjectData =>
  (objectData as TreasureMapObjectData).treasure !== undefined;

export interface TreasureMapObject extends MapObject {
  readonly treasure: Resources;
}

export const initializeTreasureMapObject = (
  object: MapObject,
  objectData: TreasureMapObjectData,
): TreasureMapObject => ({
  ...object,
  treasure: Object.keys(objectData.treasure).reduce((p, c) => ({
    ...p,
    [c]: random(objectData.treasure[c].min, objectData.treasure[c].max),
  }), {}),
});

export const isTreasureMapObject = (object: MapObject | undefined): object is TreasureMapObject =>
  isMapObject(object) && (object as TreasureMapObject).treasure !== undefined;

export const generateTreasureMapObjectResources = (object: TreasureMapObject): Resources =>
  object.treasure;
