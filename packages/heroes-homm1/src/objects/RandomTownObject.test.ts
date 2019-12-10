import { CreatureData, GameObject } from "heroes-core";

import { ObjectId } from "../ObjectId";
import {
  initializeRandomTownObject,
  isRandomTownObject,
  isRandomTownObjectData,
  RandomTownObject,
  RandomTownObjectData,
} from "./RandomTownObject";

describe("isRandomTownObjectData", () => {
  it("should return true when random town object data", () => {
    const objectData: RandomTownObjectData = {
      id: ObjectId.RandomTown,
    };

    const result = isRandomTownObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return true when random castle object data", () => {
    const objectData: RandomTownObjectData = {
      id: ObjectId.RandomCastle,
    };

    const result = isRandomTownObjectData(objectData);

    expect(result).toBe(true);
  });
});

describe("initializeRandomTownObject", () => {
  it("should create a random town object", () => {
    const objectData: RandomTownObjectData = {
      id: ObjectId.RandomTown,
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

    const data: Parameters<typeof initializeRandomTownObject>[2] = {
      armySize: 1,
      creatures: {
        [creature.id]: creature,
      },
    };

    const object: GameObject = {
      dataId: ObjectId.RandomTown,
      id: "id",
    };

    const result = initializeRandomTownObject(object, objectData, data);

    const expected: RandomTownObject = {
      army: [
        {
          count: 0,
          creature: "creature",
        },
      ],
      customized: false,
      dataId: ObjectId.RandomTown,
      id: "id",
      owner: undefined,
    };

    expect(result).toEqual(expected);
  });
});

describe("isRandomTownObject", () => {
  it("should return true when random town object", () => {
    const object: RandomTownObject = {
      army: [],
      customized: false,
      dataId: ObjectId.RandomTown,
      id: "id",
      owner: undefined,
    };

    const result = isRandomTownObject(object);

    expect(result).toBe(true);
  });

  it("should return true when random castle object", () => {
    const object: RandomTownObject = {
      army: [],
      customized: false,
      dataId: ObjectId.RandomCastle,
      id: "id",
      owner: undefined,
    };

    const result = isRandomTownObject(object);

    expect(result).toBe(true);
  });
});
