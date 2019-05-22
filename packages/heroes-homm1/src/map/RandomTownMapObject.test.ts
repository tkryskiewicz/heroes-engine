import { CreatureData } from "heroes-core";

import { MapObjectId } from "./MapObjectId";
import {
  createRandomTownMapObject,
  getTownMapObjectDetails,
  isRandomTownMapObject,
  isRandomTownMapObjectData,
  RandomTownMapObject,
  RandomTownMapObjectData,
  setTownMapObjectDetails,
  TownMapObjectDetails,
} from "./RandomTownMapObject";

describe("isRandomTownMapObjectData", () => {
  it("should return true when random town object data", () => {
    const objectData: RandomTownMapObjectData = {
      grid: [],
      height: 1,
      id: MapObjectId.RandomTown,
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

describe("getTownMapObjectDetails", () => {
  it("should return object details", () => {
    const object: RandomTownMapObject = {
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      customized: false,
      dataId: MapObjectId.RandomTown,
      id: "dataId",
      owner: "alignment",
    };

    const result = getTownMapObjectDetails(object);

    const expected: TownMapObjectDetails = {
      alignment: "alignment",
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      customized: false,
    };

    expect(result).toEqual(expected);
  });
});

describe("setTownMapObjectDetails", () => {
  it("should set object details", () => {
    const object: RandomTownMapObject = {
      army: [],
      customized: false,
      dataId: MapObjectId.RandomTown,
      id: "id",
    };

    const value: TownMapObjectDetails = {
      alignment: "alignment",
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      customized: true,
    };

    const result = setTownMapObjectDetails(object, value);

    const expected: RandomTownMapObject = {
      ...object,
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      customized: true,
      owner: "alignment",
    };

    expect(result).toEqual(expected);
  });
});
