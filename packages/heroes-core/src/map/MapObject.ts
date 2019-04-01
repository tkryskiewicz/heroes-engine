export interface MapObjectData {
  readonly id: string;
}

export interface MapObject {
  readonly id: string;
  readonly dataId: string;
}

export const createMapObject = (id: string, data: MapObjectData): MapObject => ({
  dataId: data.id,
  id,
});

export const isMapObject = (object: MapObject | undefined): object is MapObject =>
  object !== undefined && object.id !== "" && object.dataId !== "";
