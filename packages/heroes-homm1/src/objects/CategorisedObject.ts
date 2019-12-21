import { GameObjectData } from "heroes-core";

export interface CategorisedObjectData extends GameObjectData {
  readonly category: string | string[];
}

export const isCategorisedObjectData = (objectData: GameObjectData): objectData is CategorisedObjectData =>
  (objectData as CategorisedObjectData).category !== undefined;

export const isObjectFromCategory = (objectData: CategorisedObjectData, category: string): boolean =>
  objectData.category === category || (Array.isArray(objectData.category) && objectData.category.includes(category));
