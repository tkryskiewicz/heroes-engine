import {
  Army,
  GameData,
  initializeOwnableObject,
  isMapObject,
  MapObject,
  MapObjectData,
  OwnableObject,
  Troop,
} from "heroes-core";

import { MapObjectId } from "./MapObjectId";

export interface RandomTownMapObjectData extends MapObjectData {
  readonly id: MapObjectId.RandomTown | MapObjectId.RandomCastle;
}

export const isRandomTownMapObjectData = (objectData: MapObjectData): objectData is RandomTownMapObjectData =>
  objectData.id === MapObjectId.RandomTown || objectData.id === MapObjectId.RandomCastle;

export interface RandomTownMapObject extends OwnableObject {
  readonly dataId: MapObjectId.RandomTown | MapObjectId.RandomCastle;
  readonly customized: boolean;
  readonly army: Army;
}

export const initializeRandomTownMapObject = (
  object: MapObject,
  objectData: RandomTownMapObjectData,
  data: Pick<GameData, "armySize" | "creatures">,
): RandomTownMapObject => ({
  ...object,
  ...initializeOwnableObject(object),
  army: [...new Array(data.armySize).keys()].map<Troop>(() => ({
    count: 0,
    creature: Object.keys(data.creatures)[0],
  })),
  customized: false,
  // FIXME: this is already set by createMapObject but doesn't preserve type
  dataId: objectData.id,
});

export const isRandomTownMapObject = (object: MapObject | undefined): object is RandomTownMapObject =>
  isMapObject(object) && (object.dataId === MapObjectId.RandomTown || object.dataId === MapObjectId.RandomCastle);
