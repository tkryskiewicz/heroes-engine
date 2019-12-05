import { GameObject, GameObjectData } from "../GameObject";
import { Item } from "../Item";

export interface EquipableObjectData extends GameObjectData {
  readonly equipable: boolean;
}

export const isEquipableObjectData = (objectData: GameObjectData): objectData is EquipableObjectData =>
  (objectData as EquipableObjectData).equipable === true;

export type ItemSlot = Item | undefined;

export interface EquipableObject extends GameObject {
  readonly items: ItemSlot[];
}

export const initializeEquipableObject = (object: GameObject): EquipableObject => ({
  ...object,
  items: [],
});

export const isEquipableObject = (object: GameObject): object is EquipableObject =>
  (object as EquipableObject).items !== undefined;

// TODO: handle no free slot
export const addObjectItem = (object: EquipableObject, item: Item): EquipableObject => ({
  ...object,
  items: [
    ...object.items,
    item,
  ],
});

export const hasObjectItem = (object: EquipableObject, item: string): boolean =>
  object.items.some((a) => a !== undefined && a.id === item);

export const tradeObjectItems = (
  object: EquipableObject,
  index: number,
  withObject: EquipableObject,
  withIndex: number,
): [EquipableObject, EquipableObject] => {
  const items = [...object.items];

  const withItems = object.id === withObject.id ?
    items :
    [...withObject.items];

  items[index] = withObject.items[withIndex];
  withItems[withIndex] = object.items[index];

  const objectResult: EquipableObject = {
    ...object,
    items,
  };

  const withObjectResult: EquipableObject = {
    ...withObject,
    items: withItems,
  };

  return [
    objectResult,
    withObjectResult,
  ];
};
