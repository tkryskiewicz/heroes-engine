import { Resources } from "../Resource";
import { MapObject, MapObjectData } from "./MapObject";
import { initializeOwnableMapObject, OwnableMapObject, OwnableMapObjectData } from "./OwnableMapObject";

export interface ResourceGeneratorMapObjectData extends MapObjectData, OwnableMapObjectData {
  readonly resourceGenerator: {
    readonly resource: string;
    readonly amount: number;
  };
}

export const isResourceGeneratorMapObjectData = (
  objectData: MapObjectData,
): objectData is ResourceGeneratorMapObjectData =>
  (objectData as ResourceGeneratorMapObjectData).resourceGenerator !== undefined;

export type ResourceGeneratorMapObject = OwnableMapObject;

export const initializeResourceGeneratorMapObject = (object: MapObject): ResourceGeneratorMapObject =>
  initializeOwnableMapObject(object);

export const generateResourceGeneratorMapObjectResources = (objectData: ResourceGeneratorMapObjectData): Resources => ({
  [objectData.resourceGenerator.resource]: objectData.resourceGenerator.amount,
});
