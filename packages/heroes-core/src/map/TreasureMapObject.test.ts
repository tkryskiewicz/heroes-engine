import { Resources } from "../Resource";
import { MapObject, MapObjectData } from "./MapObject";
import {
  createTreasureMapObject,
  generateTreasureMapObjectResources,
  isTreasureMapObject,
  isTreasureMapObjectData,
  TreasureMapObject,
  TreasureMapObjectData,
} from "./TreasureMapObject";

describe("isTreasureMapObjectData", () => {
  it("should return true when treasure map object data", () => {
    const objectData: TreasureMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      treasure: {},
      width: 1,
    };

    const result = isTreasureMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not treasure map object data", () => {
    const objectData: MapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      width: 1,
    };

    const result = isTreasureMapObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("createTreasureMapObject", () => {
  it("should create treasure map object", () => {
    const objectData: TreasureMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      treasure: {},
      width: 1,
    };

    const result = createTreasureMapObject("id", objectData);

    const expected: TreasureMapObject = {
      dataId: "dataId",
      id: "id",
      treasure: {},
    };

    expect(result).toEqual(expected);
  });

  it("should randomize resource amount", () => {
    const objectData: TreasureMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      treasure: {
        resource: {
          max: 1,
          min: 0,
        },
      },
      width: 1,
    };

    const result = createTreasureMapObject("id", objectData);

    expect(result.treasure.resource).toBeGreaterThanOrEqual(0);
    expect(result.treasure.resource).toBeLessThanOrEqual(1);
  });
});

describe("isTreasureMapObject", () => {
  it("should return true when treasure map object", () => {
    const objectData: TreasureMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      treasure: {},
      width: 1,
    };

    const object = createTreasureMapObject("id", objectData);

    const result = isTreasureMapObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not treasure map object", () => {
    const object: MapObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = isTreasureMapObject(object);

    expect(result).toBe(false);
  });
});

describe("generateTreasureMapObjectResources", () => {
  it("should generate resources", () => {
    const object: TreasureMapObject = {
      dataId: "dataId",
      id: "id",
      treasure: {
        resource: 1,
      },
    };

    const result = generateTreasureMapObjectResources(object);

    const expected: Resources = {
      resource: 1,
    };

    expect(result).toEqual(expected);
  });
});
