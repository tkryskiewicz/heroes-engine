import { GameObject } from "heroes-core";

import {
  initializeRandomCreatureObject,
  isRandomCreatureObject,
  isRandomCreatureObjectData,
  RandomCreatureObject,
  RandomCreatureObjectData,
} from "./RandomCreatureObject";

describe("isRandomCreatureObjectData", () => {
  it("should return true when random creature object data", () => {
    const objectData: RandomCreatureObjectData = {
      id: "dataId",
      randomCreature: {},
    };

    const result = isRandomCreatureObjectData(objectData);

    expect(result).toBe(true);
  });
});

describe("initializeRandomCreatureObject", () => {
  it("should initialize count", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = initializeRandomCreatureObject(object);

    const expected: RandomCreatureObject = {
      ...object,
      count: 0,
    };

    expect(result).toEqual(expected);
  });
});

describe("isRandomCreatureObject", () => {
  it("should return true when random creature object", () => {
    const objectData: RandomCreatureObjectData = {
      id: "dataId",
      randomCreature: {},
    };

    const object: RandomCreatureObject = {
      count: 0,
      dataId: "dataId",
      id: "id",
    };

    const result = isRandomCreatureObject(object, objectData);

    expect(result).toBe(true);
  });
});
