import { isMapObject, MapObject, MapObjectData } from "./MapObject";

export interface OwnableMapObjectData extends MapObjectData {
  readonly ownable: true;
}

export const isOwnableMapObjectData = (objectData: MapObjectData): objectData is OwnableMapObjectData =>
  (objectData as OwnableMapObjectData).ownable === true;

export interface OwnableMapObject extends MapObject {
  readonly owner: string | undefined;
}

export const initializeOwnableMapObject = (object: MapObject): OwnableMapObject => ({
  ...object,
  owner: undefined,
});

export const isOwnableMapObject = (object: MapObject | undefined): object is OwnableMapObject =>
  isMapObject(object) && "owner" in object;

export const isObjectOwnedBy = (object: OwnableMapObject, owner: string): boolean =>
  object.owner === owner;

export const changeOwnableMapObjectOwner = (object: OwnableMapObject, owner: string | undefined): OwnableMapObject => ({
  ...object,
  owner,
});
