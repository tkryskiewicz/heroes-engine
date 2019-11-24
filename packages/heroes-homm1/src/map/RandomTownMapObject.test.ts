import { createMapObject, CreatureData } from "heroes-core";

import { MapObjectId } from "./MapObjectId";
import {
  initializeRandomTownMapObject,
  isRandomTownMapObject,
  isRandomTownMapObjectData,
  RandomTownMapObject,
  RandomTownMapObjectData,
} from "./RandomTownMapObject";

describe("isRandomTownMapObjectData", () => {
  it("should return true when random town object data", () => {
    const objectData: RandomTownMapObjectData = {
      grid: [],
      height: 1,
      id: MapObjectId.RandomTown,
      type: "type",
      width: 1,
    };

    const result = isRandomTownMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return true when random castle object data", () => {
    const objectData: RandomTownMapObjectData = {
      grid: [],
      height: 1,
      id: MapObjectId.RandomCastle,
      type: "type",
      width: 1,
    };

    const result = isRandomTownMapObjectData(objectData);

    expect(result).toBe(true);
  });
});

describe("initializeRandomTownMapObject", () => {
  it("should create a random town object", () => {
    const objectData: RandomTownMapObjectData = {
      grid: [],
      height: 1,
      id: MapObjectId.RandomTown,
      type: "type",
      width: 1,
    };

    const creature: CreatureData = {
      attack: 1,
      damage: {
        max: 1,
        min: 1,
      },
      defense: 1,
      hitPoints: 1,
      id: "creature",
      speed: 0,
    };

    const data: Parameters<typeof initializeRandomTownMapObject>[2] = {
      armySize: 1,
      creatures: {
        [creature.id]: creature,
      },
    };

    const result = initializeRandomTownMapObject(createMapObject("id", objectData), objectData, data);

    const expected: RandomTownMapObject = {
      army: [
        {
          count: 0,
          creature: "creature",
        },
      ],
      customized: false,
      dataId: MapObjectId.RandomTown,
      id: "id",
      owner: undefined,
    };

    expect(result).toEqual(expected);
  });
});

describe("isRandomTownMapObject", () => {
  it("should return true when random town object", () => {
    const objectData: RandomTownMapObjectData = {
      grid: [],
      height: 1,
      id: MapObjectId.RandomTown,
      type: "type",
      width: 1,
    };

    const data: Parameters<typeof initializeRandomTownMapObject>[2] = {
      armySize: 0,
      creatures: {},
    };

    const object = initializeRandomTownMapObject(createMapObject("id", objectData), objectData, data);

    const result = isRandomTownMapObject(object);

    expect(result).toBe(true);
  });

  it("should return true when random castle map object", () => {
    const objectData: RandomTownMapObjectData = {
      grid: [],
      height: 1,
      id: MapObjectId.RandomCastle,
      type: "type",
      width: 1,
    };

    const data: Parameters<typeof initializeRandomTownMapObject>[2] = {
      armySize: 0,
      creatures: {},
    };

    const object = initializeRandomTownMapObject(createMapObject("id", objectData), objectData, data);

    const result = isRandomTownMapObject(object);

    expect(result).toBe(true);
  });
});
