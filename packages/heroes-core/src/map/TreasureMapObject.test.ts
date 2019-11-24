import { Resources } from "../Resource";
import { createMapObject, MapObject, MapObjectData } from "./MapObject";
import {
  generateTreasureMapObjectResources,
  initializeTreasureMapObject,
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

describe("initializeTreasureMapObject", () => {
  it("should initialize treasure", () => {
    const objectData: TreasureMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      treasure: {},
      width: 1,
    };

    const object = createMapObject("id", objectData);

    const result = initializeTreasureMapObject(object, objectData);

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

    const object = createMapObject("id", objectData);

    const result = initializeTreasureMapObject(object, objectData);

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

    const object = initializeTreasureMapObject(createMapObject("id", objectData), objectData);

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
