import { GameObject, GameObjectData } from "../GameObject";
import { Resources } from "../Resource";
import { initializeOwnableObject, OwnableObject, OwnableObjectData } from "./OwnableObject";

export interface ResourceGeneratorMapObjectData extends GameObjectData, OwnableObjectData {
  readonly resourceGenerator: {
    readonly resource: string;
    readonly amount: number;
  };
}

export const isResourceGeneratorMapObjectData = (
  objectData: GameObjectData,
): objectData is ResourceGeneratorMapObjectData =>
  (objectData as ResourceGeneratorMapObjectData).resourceGenerator !== undefined;

export type ResourceGeneratorMapObject = OwnableObject;

export const initializeResourceGeneratorMapObject = (object: GameObject): ResourceGeneratorMapObject =>
  initializeOwnableObject(object);

export const generateResourceGeneratorMapObjectResources = (objectData: ResourceGeneratorMapObjectData): Resources => ({
  [objectData.resourceGenerator.resource]: objectData.resourceGenerator.amount,
});
