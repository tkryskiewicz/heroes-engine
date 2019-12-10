import {
  Army,
  GameData,
  GameObject,
  GameObjectData,
  initializeOwnableObject,
  OwnableObject,
  Troop,
} from "heroes-core";

import { ObjectId } from "../ObjectId";

export interface RandomTownObjectData extends GameObjectData {
  readonly id: ObjectId.RandomTown | ObjectId.RandomCastle;
}

export const isRandomTownObjectData = (objectData: GameObjectData): objectData is RandomTownObjectData =>
  objectData.id === ObjectId.RandomTown || objectData.id === ObjectId.RandomCastle;

export interface RandomTownObject extends OwnableObject {
  readonly dataId: ObjectId.RandomTown | ObjectId.RandomCastle;
  readonly customized: boolean;
  readonly army: Army;
}

export const initializeRandomTownObject = (
  object: GameObject,
  objectData: RandomTownObjectData,
  data: Pick<GameData, "armySize" | "creatures">,
): RandomTownObject => ({
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

export const isRandomTownObject = (object: GameObject): object is RandomTownObject =>
  (object.dataId === ObjectId.RandomTown || object.dataId === ObjectId.RandomCastle);
