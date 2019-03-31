export interface MapObjectData {
  readonly id: string;
}

export interface MapObject {
  readonly id: string;
}

export const isMapObject = (object: MapObject | undefined): object is MapObject =>
  object !== undefined && object.id !== "";
