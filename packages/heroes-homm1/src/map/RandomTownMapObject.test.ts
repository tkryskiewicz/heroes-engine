import { CreatureData } from "heroes-core";

import { MapObjectId } from "./MapObjectId";
import {
  createRandomTownMapObject,
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

describe("createRandomTownMapObject", () => {
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

    const data: Parameters<typeof createRandomTownMapObject>[2] = {
      alignments: [
        "alignment",
      ],
      armySize: 1,
      creatures: {
        [creature.id]: creature,
      },
    };

    const result = createRandomTownMapObject("id", objectData, data);

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
      owner: "alignment",
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

    const data: Parameters<typeof createRandomTownMapObject>[2] = {
      alignments: [],
      armySize: 0,
      creatures: {},
    };

    const object = createRandomTownMapObject("id", objectData, data);

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

    const data: Parameters<typeof createRandomTownMapObject>[2] = {
      alignments: [],
      armySize: 0,
      creatures: {},
    };

    const object = createRandomTownMapObject("id", objectData, data);

    const result = isRandomTownMapObject(object);

    expect(result).toBe(true);
  });
});
