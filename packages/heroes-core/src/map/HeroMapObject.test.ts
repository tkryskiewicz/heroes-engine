import { Hero } from "../Hero";
import { createHeroMapObject, HeroMapObject, isHeroMapObject } from "./HeroMapObject";
import { MapObject } from "./MapObject";
import { MapObjectOrientation } from "./MapObjectOrientation";

describe("createHeroMapObject", () => {
  it("should create object", () => {
    const hero: Hero = {
      army: [],
      artifacts: [],
      experience: 0,
      heroClass: "heroClass",
      id: "heroId",
      luck: 0,
      mobility: 0,
      morale: 0,
      skills: {},
    };

    const result = createHeroMapObject("id", hero);

    const expected: HeroMapObject = {
      hero,
      id: "id",
      orientation: MapObjectOrientation.North,
    };

    expect(result).toEqual(expected);
  });

  it("should create object with initial owner", () => {
    const hero: Hero = {
      army: [],
      artifacts: [],
      experience: 0,
      heroClass: "heroClass",
      id: "heroId",
      luck: 0,
      mobility: 0,
      morale: 0,
      skills: {},
    };

    const result = createHeroMapObject("id", hero, "owner");

    const expected: HeroMapObject = {
      hero,
      id: "id",
      orientation: MapObjectOrientation.North,
      owner: "owner",
    };

    expect(result).toEqual(expected);
  });
});

describe("isHeroMapObject", () => {
  it("should return true when hero map object", () => {
    const hero: Hero = {
      army: [],
      artifacts: [],
      experience: 0,
      heroClass: "heroClass",
      id: "id",
      luck: 0,
      mobility: 0,
      morale: 0,
      skills: {},
    };

    const object: HeroMapObject = createHeroMapObject("id", hero);

    const result = isHeroMapObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not hero map object", () => {
    const object: MapObject = {
      id: "id",
    };

    const result = isHeroMapObject(object);

    expect(result).toBe(false);
  });
});
