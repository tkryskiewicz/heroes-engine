import { Game } from "../Game";
import { MapObject, MapObjectData } from "./MapObject";

export interface OwnableMapObjectData extends MapObjectData {
  readonly ownable: true;
}

export const isOwnableMapObjectData = (objectData: MapObjectData): objectData is OwnableMapObjectData =>
  (objectData as OwnableMapObjectData).ownable === true;

export interface OwnableMapObject extends MapObject {
  readonly owner?: string;
}

export const isOwnableMapObject = (object: MapObject): object is OwnableMapObject =>
  "owner" in object;

export const createOwnableMapObject = (objectData: MapObjectData, owner?: string): OwnableMapObject => ({
  id: objectData.id,
  owner,
});

export const isObjectOwnedBy = (object: OwnableMapObject, owner: string): boolean =>
  object.owner === owner;

export const handleOwnableMapObject = (
  game: Game,
  object: OwnableMapObject,
  objectData: OwnableMapObjectData,
): Game => {
  if (isObjectOwnedBy(object, game.alignment)) {
    throw new Error(`${objectData.id} (${object.id}) is already owned by ${game.alignment}`);
  }

  const ownedObject: OwnableMapObject = {
    ...object,
    owner: game.alignment,
  };

  return {
    ...game,
    map: {
      ...game.map,
      tiles: game.map.tiles.map((t) => t.object && t.object.id === object.id ?
        {
          ...t,
          object: ownedObject,
        } :
        t,
      ),
    },
  };
};
