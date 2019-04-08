import { MapObjectData } from "./MapObject";

export interface PickableMapObjectData extends MapObjectData {
  readonly pickable: true;
}

export const isPickableMapObjectData = (objectData: MapObjectData): objectData is PickableMapObjectData =>
  (objectData as PickableMapObjectData).pickable === true;
