import {
  createRandomCreatureMapObject,
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

describe("createRandomCreatureMapObject", () => {
  it("should create object", () => {
    const objectData: RandomCreatureMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      randomCreature: {},
      type: "type",
      width: 1,
    };

    const result = createRandomCreatureMapObject("id", objectData);

    const expected: RandomCreatureMapObject = {
      count: 0,
      dataId: "dataId",
      id: "id",
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

    const object = createRandomCreatureMapObject("id", objectData);

    const data: Parameters<typeof isRandomCreatureMapObject>[1] = {
      mapObjects: {
        [objectData.id]: objectData,
      },
    };

    const result = isRandomCreatureMapObject(object, data);

    expect(result).toBe(true);
  });
});
