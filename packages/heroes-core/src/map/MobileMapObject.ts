import { isMapObject, MapObject, MapObjectData } from "./MapObject";
import { MapObjectOrientation } from "./MapObjectOrientation";

export interface MobileMapObjectData extends MapObjectData {
  readonly baseMobility: number;
}

export const isMobileMapObjectData = (objectData: MapObjectData): objectData is MobileMapObjectData =>
  (objectData as MobileMapObjectData).baseMobility !== undefined;

export interface MobileMapObject extends MapObject {
  readonly mobility: number;
  readonly orientation: MapObjectOrientation;
}

export const isMobileMapObject = (object: MapObject | undefined): object is MobileMapObject =>
  isMapObject(object) &&
  (object as MobileMapObject).mobility !== undefined &&
  (object as MobileMapObject).orientation !== undefined;

export const canMobileMapObjectMove = (object: MobileMapObject): boolean =>
  object.mobility > 0;

export const moveMobileMapObject = (
  object: MobileMapObject,
  direction: MapObjectOrientation,
  cost: number,
): MobileMapObject => ({
  ...object,
  mobility: Math.max(object.mobility - cost, 0),
  orientation: direction,
});
