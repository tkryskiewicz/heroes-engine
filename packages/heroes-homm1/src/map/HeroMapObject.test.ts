import { createMapObject, MapObject, MapObjectOrientation } from "heroes-core";

import {
  HeroMapObject,
  HeroMapObjectData,
  initializeHeroMapObject,
  isHeroMapObject,
  isHeroMapObjectData,
} from "./HeroMapObject";
import { MapObjectId } from "./MapObjectId";

describe("isHeroMapObjectData", () => {
  it("should return true when hero object data", () => {
    const objectData: HeroMapObjectData = {
      army: {
        preventMovingLastTroop: true,
      },
      baseMobility: 0,
      grid: [],
      height: 1,
      id: MapObjectId.Hero,
      ownable: true,
      type: "type",
      width: 1,
    };

    const result = isHeroMapObjectData(objectData);

    expect(result).toBe(true);
  });
});

describe("initializeHeroMapObject", () => {
  it("should initialize object", () => {
    const objectData: HeroMapObjectData = {
      army: {
        preventMovingLastTroop: true,
      },
      baseMobility: 0,
      grid: [],
      height: 1,
      id: MapObjectId.Hero,
      ownable: true,
      type: "type",
      width: 1,
    };

    const object = createMapObject("id", objectData);

    const result = initializeHeroMapObject(object, objectData);

    const expected: HeroMapObject = {
      ...object,
      army: [],
      dataId: MapObjectId.Hero,
      experience: 0,
      heroClass: "",
      heroId: "",
      items: [],
      luck: 0,
      mobility: 0,
      morale: 0,
      orientation: MapObjectOrientation.North,
      owner: undefined,
      skills: {},
    };

    expect(result).toEqual(expected);
  });
});

describe("isHeroMapObject", () => {
  it("should return true when hero map object", () => {
    const objectData: HeroMapObjectData = {
      army: {
        preventMovingLastTroop: true,
      },
      baseMobility: 0,
      grid: [],
      height: 1,
      id: MapObjectId.Hero,
      ownable: true,
      type: "type",
      width: 1,
    };

    const object = initializeHeroMapObject(createMapObject("id", objectData), objectData);

    const result = isHeroMapObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not hero map object", () => {
    const object: MapObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = isHeroMapObject(object);

    expect(result).toBe(false);
  });
});
