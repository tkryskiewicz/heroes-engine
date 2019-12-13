import { GameObject, GameObjectData } from "./GameObject";

export type ItemData = GameObjectData;

export interface Item<T = {}> extends GameObject {
  readonly data: T;
}

export interface ItemSelection {
  readonly objectId: string;
  readonly index: number;
}
