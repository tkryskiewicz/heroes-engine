import { Hero } from "../Hero";
import { createHeroMapObject, HeroMapObject, HeroMapObjectData, isHeroMapObject } from "./HeroMapObject";
import { MapObject } from "./MapObject";
import { MapObjectOrientation } from "./MapObjectOrientation";

describe("createHeroMapObject", () => {
  it("should create object", () => {
    const objectData: HeroMapObjectData = {
      id: "dataId",
      ownable: true,
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
      dataId: "hero",
      id: "heroId",
      orientation: MapObjectOrientation.North,
      owner: undefined,
    };

    expect(result).toEqual(expected);
  });

  it("should create object with initial owner", () => {
    const objectData: HeroMapObjectData = {
      id: "dataId",
      ownable: true,
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
      dataId: "hero",
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
      id: "dataId",
      ownable: true,
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

    const object: HeroMapObject = createHeroMapObject("id", objectData, hero);

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
