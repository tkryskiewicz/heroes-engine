import { GameObject, GameObjectData } from "../GameObject";
import { Resources } from "../Resource";
import {
  generateTreasureObjectResources,
  initializeTreasureObject,
  isTreasureObject,
  isTreasureObjectData,
  TreasureObject,
  TreasureObjectData,
} from "./TreasureObject";

describe("isTreasureObjectData", () => {
  it("should return true when treasure object data", () => {
    const objectData: TreasureObjectData = {
      id: "dataId",
      treasure: {},
    };

    const result = isTreasureObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not treasure object data", () => {
    const objectData: GameObjectData = {
      id: "dataId",
    };

    const result = isTreasureObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("initializeTreasureObject", () => {
  it("should initialize treasure", () => {
    const objectData: TreasureObjectData = {
      id: "dataId",
      treasure: {},
    };

    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = initializeTreasureObject(object, objectData);

    const expected: TreasureObject = {
      dataId: "dataId",
      id: "id",
      treasure: {},
    };

    expect(result).toEqual(expected);
  });

  it("should randomize resource amount", () => {
    const objectData: TreasureObjectData = {
      id: "dataId",
      treasure: {
        resource: {
          max: 1,
          min: 0,
        },
      },
    };

    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = initializeTreasureObject(object, objectData);

    expect(result.treasure.resource).toBeGreaterThanOrEqual(0);
    expect(result.treasure.resource).toBeLessThanOrEqual(1);
  });
});

describe("isTreasureObject", () => {
  it("should return true when treasure object", () => {
    const object: TreasureObject = {
      dataId: "dataId",
      id: "id",
      treasure: {},
    };

    const result = isTreasureObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not treasure object", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = isTreasureObject(object);

    expect(result).toBe(false);
  });
});

describe("generateTreasureObjectResources", () => {
  it("should generate resources", () => {
    const object: TreasureObject = {
      dataId: "dataId",
      id: "id",
      treasure: {
        resource: 1,
      },
    };

    const result = generateTreasureObjectResources(object);

    const expected: Resources = {
      resource: 1,
    };

    expect(result).toEqual(expected);
  });
});
