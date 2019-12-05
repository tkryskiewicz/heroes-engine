import { GameObject, GameObjectData } from "../GameObject";

export interface OwnableObjectData extends GameObjectData {
  readonly ownable: true;
}

export const isOwnableObjectData = (objectData: GameObjectData): objectData is OwnableObjectData =>
  (objectData as OwnableObjectData).ownable === true;

export interface OwnableObject extends GameObject {
  readonly owner: string | undefined;
}

export const initializeOwnableObject = (object: GameObject): OwnableObject => ({
  ...object,
  owner: undefined,
});

export const isOwnableObject = (object: GameObject): object is OwnableObject =>
  "owner" in object;

export const isObjectOwnedBy = (object: OwnableObject, owner: string): boolean =>
  object.owner === owner;

export const changeObjectOwner = (object: OwnableObject, owner: string | undefined): OwnableObject => ({
  ...object,
  owner,
});
