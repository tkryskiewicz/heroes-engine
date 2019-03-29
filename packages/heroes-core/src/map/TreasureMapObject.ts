import { addResources, Resources } from "../Resource";
import { random } from "../util";
import { MapObject, MapObjectData } from "./MapObject";

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

export const TreasureMapObjectType = "treasure";

export interface TreasureMapObject extends MapObject {
  readonly type: typeof TreasureMapObjectType;
  readonly treasure: {
    readonly [resource: string]: number;
  };
}

export const createTreasureMapObject = (objectData: TreasureMapObjectData): TreasureMapObject => ({
  id: objectData.id,
  treasure: Object.keys(objectData.treasure).reduce((p, c) => ({
    ...p,
    [c]: random(objectData.treasure[c].min, objectData.treasure[c].max),
  }), {}),
  type: TreasureMapObjectType,
});

export const isTreasureMapObject = (object: MapObject): object is TreasureMapObject =>
  object.type === TreasureMapObjectType;

export const pickUpTreasure = (
  object: TreasureMapObject,
  resources: Resources,
): Resources =>
  addResources(resources, object.treasure);
