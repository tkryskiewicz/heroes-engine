import { initializeOwnableObject, OwnableObject, OwnableObjectData } from "../objects";
import { Resources } from "../Resource";
import { MapObject, MapObjectData } from "./MapObject";

export interface ResourceGeneratorMapObjectData extends MapObjectData, OwnableObjectData {
  readonly resourceGenerator: {
    readonly resource: string;
    readonly amount: number;
  };
}

export const isResourceGeneratorMapObjectData = (
  objectData: MapObjectData,
): objectData is ResourceGeneratorMapObjectData =>
  (objectData as ResourceGeneratorMapObjectData).resourceGenerator !== undefined;

export type ResourceGeneratorMapObject = OwnableObject;

export const initializeResourceGeneratorMapObject = (object: MapObject): ResourceGeneratorMapObject =>
  initializeOwnableObject(object);

export const generateResourceGeneratorMapObjectResources = (objectData: ResourceGeneratorMapObjectData): Resources => ({
  [objectData.resourceGenerator.resource]: objectData.resourceGenerator.amount,
});
