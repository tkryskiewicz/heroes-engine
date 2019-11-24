import { createMapObject } from "heroes-core";

import {
  initializeRandomCreatureMapObject,
  isRandomCreatureMapObject,
  isRandomCreatureMapObjectData,
  RandomCreatureMapObject,
  RandomCreatureMapObjectData,
} from "./RandomCreatureMapObject";

describe("isRandomCreatureMapObjectData", () => {
  it("should return true when random creature object data", () => {
    const objectData: RandomCreatureMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      randomCreature: {},
      type: "type",
      width: 1,
    };

    const result = isRandomCreatureMapObjectData(objectData);

    expect(result).toBe(true);
  });
});

describe("initializeRandomCreatureMapObject", () => {
  it("should initialize count", () => {
    const objectData: RandomCreatureMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      randomCreature: {},
      type: "type",
      width: 1,
    };

    const object = createMapObject("id", objectData);

    const result = initializeRandomCreatureMapObject(object);

    const expected: RandomCreatureMapObject = {
      ...object,
      count: 0,
    };

    expect(result).toEqual(expected);
  });
});

describe("isRandomCreatureMapObject", () => {
  it("should return true when random creature object", () => {
    const objectData: RandomCreatureMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      randomCreature: {},
      type: "type",
      width: 1,
    };

    const object = initializeRandomCreatureMapObject(createMapObject("id", objectData));

    const data: Parameters<typeof isRandomCreatureMapObject>[1] = {
      mapObjects: {
        [objectData.id]: objectData,
      },
    };

    const result = isRandomCreatureMapObject(object, data);

    expect(result).toBe(true);
  });
});
