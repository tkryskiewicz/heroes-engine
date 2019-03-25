import { Hero } from "../Hero";
import { createHeroMapObject, HeroMapObject, HeroMapObjectType } from "./HeroMapObject";
import { MapObjectOrientation } from "./MapObjectOrientation";

describe("createHeroMapObject", () => {
  it("should create object", () => {
    const hero: Hero = {
      alignment: "alignment",
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
      type: HeroMapObjectType,
    };

    expect(result).toEqual(expected);
  });
});
