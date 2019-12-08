import { GameObjectData } from "../GameObject";
import { Resources } from "../Resource";

export interface ResourceGeneratorObjectData extends GameObjectData {
  readonly resourceGenerator: {
    readonly resource: string;
    readonly amount: number;
  };
}

export const isResourceGeneratorObjectData = (
  objectData: GameObjectData,
): objectData is ResourceGeneratorObjectData =>
  (objectData as ResourceGeneratorObjectData).resourceGenerator !== undefined;

export const generateObjectResources = (objectData: ResourceGeneratorObjectData): Resources => ({
  [objectData.resourceGenerator.resource]: objectData.resourceGenerator.amount,
});
