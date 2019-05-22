import { Hero, MapObject, MapObjectOrientation } from "heroes-core";

import {
  createHeroMapObject,
  getHeroMapObjectDetails,
  HeroMapObject,
  HeroMapObjectData,
  HeroMapObjectDetails,
  isHeroMapObject,
  isHeroMapObjectData,
  setHeroMapObjectDetails,
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

describe("getHeroMapObjectDetails", () => {
  it("should return object details", () => {
    const objectData: HeroMapObjectData = {
      army: {
        preventMovingLastTroop: true,
      },
      grid: [],
      height: 1,
      id: MapObjectId.Hero,
      ownable: true,
      width: 1,
    };

    const hero: Hero = {
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      artifacts: [
        {
          data: {},
          id: "artifact",
        },
        undefined,
      ],
      dataId: "dataId",
      experience: 1,
      heroClass: "heroClass",
      id: "hero",
      luck: 0,
      mobility: 0,
      morale: 0,
      skills: {},
    };

    const object = createHeroMapObject("id", objectData, hero, "alignment");

    const result = getHeroMapObjectDetails(object);

    const expected: HeroMapObjectDetails = {
      alignment: "alignment",
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      artifacts: [
        "artifact",
        undefined,
      ],
      experience: 1,
      hero: "hero",
    };

    expect(result).toEqual(expected);
  });
});

describe("setHeroMapObjectDetails", () => {
  it("should set object details", () => {
    const object: HeroMapObject = {
      army: [],
      artifacts: [],
      dataId: MapObjectId.Hero,
      experience: 0,
      heroClass: "heroClass",
      id: "hero",
      luck: 0,
      mobility: 0,
      morale: 0,
      orientation: MapObjectOrientation.North,
      owner: "alignment",
      skills: {},
    };

    const value: HeroMapObjectDetails = {
      alignment: "otherAlignment",
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      artifacts: [
        "artifact",
        undefined,
      ],
      experience: 1,
      hero: "otherHero",
    };

    const data: Parameters<typeof setHeroMapObjectDetails>[2] = {
      heroes: {
        otherHero: {
          heroClass: "otherHeroClass",
          id: "otherHero",
        },
      },
    };

    const result = setHeroMapObjectDetails(object, value, data);

    const expected: HeroMapObject = {
      ...object,
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      artifacts: [
        {
          data: {},
          id: "artifact",
        },
        undefined,
      ],
      experience: 1,
      heroClass: "otherHeroClass",
      id: "otherHero",
      owner: "otherAlignment",
    };

    expect(result).toEqual(expected);
  });
});
