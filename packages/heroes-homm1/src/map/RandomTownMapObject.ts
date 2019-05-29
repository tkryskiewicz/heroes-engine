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
  readonly id: MapObjectId.RandomTown | MapObjectId.RandomCastle;
}

export const isRandomTownMapObjectData = (objectData: MapObjectData): objectData is RandomTownMapObjectData =>
  objectData.id === MapObjectId.RandomTown || objectData.id === MapObjectId.RandomCastle;

export interface RandomTownMapObject extends OwnableMapObject {
  readonly dataId: MapObjectId.RandomTown | MapObjectId.RandomCastle;
  readonly customized: boolean;
  readonly army: Army;
}

export const createRandomTownMapObject = (
  id: string,
  objectData: RandomTownMapObjectData,
  data: Pick<GameData, "alignments" | "armySize" | "creatures">,
): RandomTownMapObject => ({
  ...createMapObject(id, objectData),
  army: [...new Array(data.armySize).keys()].map<Troop>(() => ({
    count: 0,
    creature: Object.keys(data.creatures)[0],
  })),
  customized: false,
  // FIXME: this is already set by createMapObject but doesn't preserve type
  dataId: objectData.id,
  owner: data.alignments[0],
});

export const isRandomTownMapObject = (object: MapObject | undefined): object is RandomTownMapObject =>
  isMapObject(object) && (object.dataId === MapObjectId.RandomTown || object.dataId === MapObjectId.RandomCastle);
