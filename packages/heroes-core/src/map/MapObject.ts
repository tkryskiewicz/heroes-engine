import { GameObject, GameObjectData } from "../GameObject";

export type MapObjectGridCell = boolean | undefined;

export interface MapObjectData extends GameObjectData {
  readonly id: string;
  readonly width: number;
  readonly height: number;
  readonly grid: MapObjectGridCell[];
}

export interface MapObject extends GameObject {
  readonly id: string;
  readonly dataId: string;
}

export const createMapObject = (id: string, objectData: MapObjectData): MapObject => ({
  dataId: objectData.id,
  id,
});

export const isMapObject = (object: MapObject | undefined): object is MapObject =>
  object !== undefined && object.id !== undefined && object.dataId !== undefined;
