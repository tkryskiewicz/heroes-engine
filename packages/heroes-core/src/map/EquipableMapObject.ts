import { Item } from "../Item";
import { isMapObject, MapObject, MapObjectData } from "./MapObject";

export interface EquipableMapObjectData extends MapObjectData {
  readonly equipable: boolean;
}

export const isEquipableMapObjectData = (objectData: MapObjectData): objectData is EquipableMapObjectData =>
  (objectData as EquipableMapObjectData).equipable === true;

export type ItemSlot = Item | undefined;

export interface EquipableMapObject extends MapObject {
  readonly items: ItemSlot[];
}

export const initializeEquipableMapObject = (object: MapObject): EquipableMapObject => ({
  ...object,
  items: [],
});

export const isEquipableMapObject = (object: MapObject | undefined): object is EquipableMapObject =>
  isMapObject(object) && (object as EquipableMapObject).items !== undefined;

// TODO: handle no free slot
export const addEquipableMapObjectItem = (object: EquipableMapObject, item: Item): EquipableMapObject => ({
  ...object,
  items: [
    ...object.items,
    item,
  ],
});

export const hasEquipableMapObjectItem = (object: EquipableMapObject, item: string): boolean =>
  object.items.some((a) => a !== undefined && a.id === item);

export const tradeEquipableMapObjectItems = (
  object: EquipableMapObject,
  index: number,
  withObject: EquipableMapObject,
  withIndex: number,
): [EquipableMapObject, EquipableMapObject] => {
  const items = [...object.items];

  const withItems = object.id === withObject.id ?
    items :
    [...withObject.items];

  items[index] = withObject.items[withIndex];
  withItems[withIndex] = object.items[index];

  const objectResult: EquipableMapObject = {
    ...object,
    items,
  };

  const withObjectResult: EquipableMapObject = {
    ...withObject,
    items: withItems,
  };

  return [
    objectResult,
    withObjectResult,
  ];
};
