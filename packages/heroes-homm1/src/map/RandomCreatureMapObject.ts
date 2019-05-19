import { GameData, isMapObject, MapObject, MapObjectData } from "heroes-core";

export interface RandomCreatureMapObjectData extends MapObjectData {
  readonly randomCreature: {
    readonly level?: number;
  };
}

export const isRandomCreatureMapObjectData = (objectData: MapObjectData): objectData is RandomCreatureMapObjectData =>
  (objectData as RandomCreatureMapObjectData).randomCreature !== undefined;

export interface RandomCreatureMapObject extends MapObject {
  readonly count: number;
}

export const createRandomCreatureMapObject = (
  id: string,
  objectData: RandomCreatureMapObjectData,
): RandomCreatureMapObject => ({
  count: 0,
  dataId: objectData.id,
  id,
});

export const isRandomCreatureMapObject = (
  object: MapObject | undefined,
  data: GameData,
): object is RandomCreatureMapObject =>
  isMapObject(object) && isRandomCreatureMapObjectData(data.mapObjects[object.dataId]);
