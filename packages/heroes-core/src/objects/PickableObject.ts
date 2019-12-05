import { GameObjectData } from "../GameObject";

export interface PickableObjectData extends GameObjectData {
  readonly pickable: true;
}

export const isPickableObjectData = (objectData: GameObjectData): objectData is PickableObjectData =>
  (objectData as PickableObjectData).pickable === true;
