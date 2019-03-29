import { Game } from "../Game";
import { removeObject } from "./Map";
import { MapObject, MapObjectData } from "./MapObject";

export interface PickableMapObjectData extends MapObjectData {
  readonly pickable: true;
}

export const isPickableMapObjectData = (objectData: MapObjectData): objectData is PickableMapObjectData =>
  (objectData as PickableMapObjectData).pickable === true;

export const handlePickableMapObject = (game: Game, object: MapObject): Game => ({
  ...game,
  map: removeObject(game.map, object.id),
});
