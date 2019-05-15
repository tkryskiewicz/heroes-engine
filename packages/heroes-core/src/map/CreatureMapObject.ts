import { isMapObject, MapObject, MapObjectData } from "./MapObject";

export interface CreatureMapObjectData extends MapObjectData {
  readonly creature: string;
}

export const isCreatureMapObjectData = (objectData: MapObjectData): objectData is CreatureMapObjectData =>
  (objectData as CreatureMapObjectData).creature !== undefined;

export interface CreatureMapObject extends MapObject {
  readonly count: number;
}

export const createCreatureMapObject = (id: string, objectData: CreatureMapObjectData): CreatureMapObject => ({
  count: 0,
  dataId: objectData.id,
  id,
});

export const isCreatureMapObject = (
  object: MapObject | undefined,
  data: import("../Game").GameData,
): object is CreatureMapObject =>
  isMapObject(object) && data.creatures[object.dataId] !== undefined;
