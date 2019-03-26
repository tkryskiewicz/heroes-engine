import { Army } from "../Army";
import { Hero } from "../Hero";
import {
  createDwellingMapObject,
  DwellingMapObject,
  DwellingMapObjectType,
  isDwellingMapObject,
  visitDwelling,
} from "./DwellingMapObject";
import { MapObject } from "./MapObject";

describe("createDwellingMapObject", () => {
  it("should create object", () => {
    const result = createDwellingMapObject("id", "creature", 1);

    const expected: DwellingMapObject = {
      availableCount: 1,
      creature: "creature",
      id: "id",
      type: DwellingMapObjectType,
    };

    expect(result).toEqual(expected);
  });
});

describe("isDwellingMapObject", () => {
  it("should return true when dwelling map object", () => {
    const object = createDwellingMapObject("id", "creature", 0);

    const result = isDwellingMapObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not dwelling map object", () => {
    const object: MapObject = {
      id: "id",
      type: "type",
    };

    const result = isDwellingMapObject(object);

    expect(result).toBe(false);
  });
});

describe("visitDwelling", () => {
  it("should clear dwellings available count", () => {
    const dwelling = createDwellingMapObject("id", "creature", 1);

    const hero: Hero = {
      alignment: "alignment",
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

    const [result] = visitDwelling(dwelling, hero);

    const expected: DwellingMapObject = {
      availableCount: 0,
      creature: "creature",
      id: "id",
      type: DwellingMapObjectType,
    };

    expect(result).toEqual(expected);
  });

  it("should add troop to hero army", () => {
    const dwelling = createDwellingMapObject("id", "creature", 1);

    const hero: Hero = {
      alignment: "alignment",
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

    const [, result] = visitDwelling(dwelling, hero);

    const expected: Army = [
      {
        count: 1,
        creature: "creature",
      },
    ];

    expect(result.army).toEqual(expected);
  });
});
