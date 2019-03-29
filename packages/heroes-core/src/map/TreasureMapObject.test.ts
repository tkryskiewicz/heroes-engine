import { Resources } from "../Resource";
import { MapObject, MapObjectData } from "./MapObject";
import {
  createTreasureMapObject,
  isTreasureMapObject,
  isTreasureMapObjectData,
  pickUpTreasure,
  TreasureMapObject,
  TreasureMapObjectData,
  TreasureMapObjectType,
} from "./TreasureMapObject";

describe("isTreasureMapObjectData", () => {
  it("should return true when treasure map object data", () => {
    const objectData: TreasureMapObjectData = {
      id: "id",
      treasure: {},
    };

    const result = isTreasureMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not treasure map object data", () => {
    const objectData: MapObjectData = {
      id: "id",
    };

    const result = isTreasureMapObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("createTreasureMapObject", () => {
  it("should create treasure map object", () => {
    const objectData: TreasureMapObjectData = {
      id: "id",
      treasure: {},
    };

    const result = createTreasureMapObject(objectData);

    const expected: TreasureMapObject = {
      id: "id",
      treasure: {},
      type: TreasureMapObjectType,
    };

    expect(result).toEqual(expected);
  });

  it("should randomize resource amount", () => {
    const objectData: TreasureMapObjectData = {
      id: "id",
      treasure: {
        resource: {
          max: 1,
          min: 0,
        },
      },
    };

    const result = createTreasureMapObject(objectData);

    expect(result.treasure.resource).toBeGreaterThanOrEqual(0);
    expect(result.treasure.resource).toBeLessThanOrEqual(1);
  });
});

describe("isTreasureMapObject", () => {
  it("should return true when treasure map object", () => {
    const objectData: TreasureMapObjectData = {
      id: "id",
      treasure: {},
    };

    const object = createTreasureMapObject(objectData);

    const result = isTreasureMapObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not treasure map object", () => {
    const object: MapObject = {
      id: "id",
      type: "type",
    };

    const result = isTreasureMapObject(object);

    expect(result).toBe(false);
  });
});

describe("pickUpTreasure", () => {
  it("should add resources", () => {
    const object: TreasureMapObject = {
      id: "id",
      treasure: {
        resource: 1,
      },
      type: TreasureMapObjectType,
    };

    const resources: Resources = {
      resource: 0,
    };

    const result = pickUpTreasure(object, resources);

    const expected: Resources = {
      resource: 1,
    };

    expect(result).toEqual(expected);
  });
});
