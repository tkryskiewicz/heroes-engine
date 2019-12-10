import { GameObjectData } from "./GameObject";

export interface ItemData extends GameObjectData {
  readonly id: string;
}

export interface Item<T = {}> {
  readonly id: string;
  readonly data: T;
}

export interface ItemSelection {
  readonly objectId: string;
  readonly index: number;
}
