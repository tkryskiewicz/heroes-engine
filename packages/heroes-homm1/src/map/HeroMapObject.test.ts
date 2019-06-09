import { Hero, MapObject, MapObjectOrientation } from "heroes-core";

import {
  createHeroMapObject,
  HeroMapObject,
  HeroMapObjectData,
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

describe("createHeroMapObject", () => {
  it("should create object", () => {
    const objectData: HeroMapObjectData = {
      army: {
        preventMovingLastTroop: true,
      },
      grid: [],
      height: 1,
      id: MapObjectId.Hero,
      ownable: true,
      type: "type",
      width: 1,
    };

    const hero: Hero = {
      army: [],
      artifacts: [],
      dataId: "hero",
      experience: 0,
      heroClass: "heroClass",
      id: "heroId",
      luck: 0,
      mobility: 0,
      morale: 0,
      skills: {},
    };

    const result = createHeroMapObject("id", objectData, hero);

    const expected: HeroMapObject = {
      ...hero,
      dataId: MapObjectId.Hero,
      id: "heroId",
      orientation: MapObjectOrientation.North,
      owner: undefined,
    };

    expect(result).toEqual(expected);
  });

  it("should create object with initial owner", () => {
    const objectData: HeroMapObjectData = {
      army: {
        preventMovingLastTroop: true,
      },
      grid: [],
      height: 1,
      id: MapObjectId.Hero,
      ownable: true,
      type: "type",
      width: 1,
    };

    const hero: Hero = {
      army: [],
      artifacts: [],
      dataId: "hero",
      experience: 0,
      heroClass: "heroClass",
      id: "heroId",
      luck: 0,
      mobility: 0,
      morale: 0,
      skills: {},
    };

    const result = createHeroMapObject("id", objectData, hero, "owner");

    const expected: HeroMapObject = {
      ...hero,
      dataId: MapObjectId.Hero,
      id: "heroId",
      orientation: MapObjectOrientation.North,
      owner: "owner",
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
      grid: [],
      height: 1,
      id: MapObjectId.Hero,
      ownable: true,
      type: "type",
      width: 1,
    };

    const hero: Hero = {
      army: [],
      artifacts: [],
      dataId: "hero",
      experience: 0,
      heroClass: "heroClass",
      id: "id",
      luck: 0,
      mobility: 0,
      morale: 0,
      skills: {},
    };

    const object = createHeroMapObject("id", objectData, hero);

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
