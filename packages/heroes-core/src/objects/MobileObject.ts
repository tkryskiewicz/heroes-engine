import { GameObject, GameObjectData } from "../GameObject";
import { MapObjectOrientation } from "../map";

export interface MobileObjectData extends GameObjectData {
  readonly baseMobility: number;
}

export const isMobileObjectData = (objectData: GameObjectData): objectData is MobileObjectData =>
  (objectData as MobileObjectData).baseMobility !== undefined;

export interface MobileObject extends GameObject {
  readonly mobility: number;
  readonly orientation: MapObjectOrientation;
}

export const initializeMobileObject = (object: GameObject, objectData: MobileObjectData): MobileObject => ({
  ...object,
  mobility: objectData.baseMobility,
  orientation: MapObjectOrientation.North,
});

export const isMobileObject = (object: GameObject): object is MobileObject =>
  (object as MobileObject).mobility !== undefined &&
  (object as MobileObject).orientation !== undefined;

export const canMobileObjectMove = (object: MobileObject): boolean =>
  object.mobility > 0;

export const moveMobileObject = (
  object: MobileObject,
  direction: MapObjectOrientation,
  cost: number,
): MobileObject => ({
  ...object,
  mobility: Math.max(object.mobility - cost, 0),
  orientation: direction,
});

export const resetMobileObjectMobility = (object: MobileObject): MobileObject => ({
  ...object,
  mobility: 0,
});
