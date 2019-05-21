import {
  Army,
  createMapObject,
  GameData,
  isMapObject,
  MapObject,
  MapObjectData,
  OwnableMapObject,
  Troop,
} from "heroes-core";

import { MapObjectId } from "./MapObjectId";

export interface RandomTownMapObjectData extends MapObjectData {
  readonly id: MapObjectId.RandomTown;
}

export const isRandomTownMapObjectData = (objectData: MapObjectData): objectData is RandomTownMapObjectData =>
  objectData.id === MapObjectId.RandomTown || objectData.id === MapObjectId.RandomCastle;

export interface RandomTownMapObject extends OwnableMapObject {
  readonly customized: boolean;
  readonly army: Army;
}

export const createRandomTownMapObject = (
  id: string,
  objectData: RandomTownMapObjectData,
  data: GameData,
): RandomTownMapObject => ({
  ...createMapObject(id, objectData),
  army: [...new Array(data.armySize).keys()].map<Troop>(() => ({
    count: 0,
    creature: Object.keys(data.creatures)[0],
  })),
  customized: false,
  owner: data.alignments[0],
});

export const isRandomTownMapObject = (object: MapObject | undefined): object is RandomTownMapObject =>
  isMapObject(object) && (object.dataId === MapObjectId.RandomTown || object.dataId === MapObjectId.RandomCastle);

export interface TownMapObjectDetails {
  readonly customized: boolean;
  readonly army: Army;
  readonly alignment?: string;
}

export const getTownMapObjectDetails = (object: RandomTownMapObject): TownMapObjectDetails => ({
  alignment: object.owner,
  army: object.army,
  customized: object.customized,
});

export const setTownMapObjectDetails = (
  object: RandomTownMapObject,
  details: TownMapObjectDetails,
): RandomTownMapObject => ({
  ...object,
  army: details.army,
  customized: details.customized,
  owner: details.alignment,
});