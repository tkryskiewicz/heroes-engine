import { GameObjectData } from "../GameObject";
import { Item } from "../Item";

export interface ItemObjectData extends GameObjectData {
  readonly item: string;
}

export const isItemObjectData = (objectData: GameObjectData): objectData is ItemObjectData =>
  (objectData as ItemObjectData).item !== undefined;

export const constructItemObjectItem = (objectData: ItemObjectData): Item => ({
  data: {},
  id: objectData.item,
});
