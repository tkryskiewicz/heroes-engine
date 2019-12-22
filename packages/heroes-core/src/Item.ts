import { GameObject, GameObjectData } from "./GameObject";

export type ItemData = GameObjectData;

export type Item = GameObject;

export interface ItemSelection {
  readonly objectId: string;
  readonly index: number;
}
