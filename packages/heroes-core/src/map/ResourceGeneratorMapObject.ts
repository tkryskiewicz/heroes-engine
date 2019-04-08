import { Resources } from "../Resource";
import { createMapObject, MapObjectData } from "./MapObject";
import { OwnableMapObject, OwnableMapObjectData } from "./OwnableMapObject";

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

export const createResourceGeneratorMapObject = (
  id: string,
  objectData: ResourceGeneratorMapObjectData,
  owner?: string,
): ResourceGeneratorMapObject => ({
  ...createMapObject(id, objectData),
  owner,
});

export const generateResourceGeneratorMapObjectResources = (objectData: ResourceGeneratorMapObjectData): Resources => ({
  [objectData.resourceGenerator.resource]: objectData.resourceGenerator.amount,
});
