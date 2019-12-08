import { isMapObject, MapObject, MapObjectData } from "../map";

export interface CreatureMapObjectData extends MapObjectData {
  readonly creature: string;
}

export const isCreatureMapObjectData = (objectData: MapObjectData): objectData is CreatureMapObjectData =>
  (objectData as CreatureMapObjectData).creature !== undefined;

export interface CreatureMapObject extends MapObject {
  readonly count: number;
}

export const initializeCreatureMapObject = (object: MapObject): CreatureMapObject => ({
  ...object,
  count: 0,
});

export const isCreatureMapObject = (
  object: MapObject | undefined,
  // FIXME
  data: Pick<import("../Game").GameData, "creatures">,
): object is CreatureMapObject =>
  isMapObject(object) && data.creatures[object.dataId] !== undefined;
