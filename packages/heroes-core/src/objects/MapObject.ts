import { GameObjectData } from "../GameObject";

export type MapObjectGridCell = boolean | undefined;

export interface MapObjectData extends GameObjectData {
  readonly width: number;
  readonly height: number;
  readonly grid: MapObjectGridCell[];
}

export const isMapObjectData = (objectData: GameObjectData): objectData is MapObjectData =>
  "width" in objectData && "height" in objectData && "grid" in objectData;
