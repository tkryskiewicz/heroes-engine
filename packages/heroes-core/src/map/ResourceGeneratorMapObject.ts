import { Game } from "../Game";
import { addResources, Resources } from "../Resource";
import { MapObjectData } from "./MapObject";
import { isObjectOwnedBy, OwnableMapObject, OwnableMapObjectData } from "./OwnableMapObject";

// TODO: should be like resource generator object?
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
  objectData: ResourceGeneratorMapObjectData,
  owner?: string,
): ResourceGeneratorMapObject => ({
  id: objectData.id,
  owner,
});

export const handleResourceGeneratorMapObject = (
  game: Game,
  object: ResourceGeneratorMapObject,
  objectData: ResourceGeneratorMapObjectData,
): Game => {
  if (!isObjectOwnedBy(object, game.alignment)) {
    throw new Error(`${objectData.id} (${object.id}) is not owned by ${game.alignment}`);
  }

  const generatedResources: Resources = {
    [objectData.resourceGenerator.resource]: objectData.resourceGenerator.amount,
  };

  return {
    ...game,
    resources: addResources(game.resources, generatedResources),
  };
};
