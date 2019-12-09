import { Item } from "../Item";
import { MapObjectData } from "./MapObject";

export interface ItemMapObjectData extends MapObjectData {
  readonly item: string;
}

export const isItemMapObjectData = (objectData: MapObjectData): objectData is ItemMapObjectData =>
  (objectData as ItemMapObjectData).item !== undefined;

export const constructItemMapObjectItem = (objectData: ItemMapObjectData): Item => ({
  data: {},
  id: objectData.item,
});
