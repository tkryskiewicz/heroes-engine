import { Army } from "../Army";
import { Hero } from "../Hero";
import {
  createDwellingMapObject,
  DwellingMapObject,
  DwellingMapObjectData,
  DwellingMapObjectType,
  isDwellingMapObject,
  isDwellingMapObjectData,
  visitDwelling,
} from "./DwellingMapObject";
import { MapObject, MapObjectData } from "./MapObject";

describe("isDwellingMapObjectData", () => {
  it("should return true when object data is dwelling object data", () => {
    const objectData: DwellingMapObjectData = {
      dwelling: {
        creature: "creature",
        initialCount: 1,
      },
      id: "id",
    };

    const result = isDwellingMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when object data is not dwelling object data", () => {
    const objectData: MapObjectData = {
      id: "id",
    };

    const result = isDwellingMapObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("createDwellingMapObject", () => {
  it("should create object", () => {
    const objectData: DwellingMapObjectData = {
      dwelling: {
        creature: "creature",
        initialCount: 1,
      },
      id: "id",
    };

    const result = createDwellingMapObject(objectData);

    const expected: DwellingMapObject = {
      availableCount: 1,
      id: "id",
      type: DwellingMapObjectType,
    };

    expect(result).toEqual(expected);
  });
});

describe("isDwellingMapObject", () => {
  it("should return true when dwelling map object", () => {
    const objectData: DwellingMapObjectData = {
      dwelling: {
        creature: "creature",
        initialCount: 1,
      },
      id: "id",
    };

    const object = createDwellingMapObject(objectData);

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
    const objectData: DwellingMapObjectData = {
      dwelling: {
        creature: "creature",
        initialCount: 1,
      },
      id: "id",
    };

    const object = createDwellingMapObject(objectData);

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

    const [result] = visitDwelling(object, objectData, hero);

    const expected: DwellingMapObject = {
      availableCount: 0,
      id: "id",
      type: DwellingMapObjectType,
    };

    expect(result).toEqual(expected);
  });

  it("should add troop to hero army", () => {
    const objectData: DwellingMapObjectData = {
      dwelling: {
        creature: "creature",
        initialCount: 1,
      },
      id: "id",
    };

    const object = createDwellingMapObject(objectData);

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

    const [, result] = visitDwelling(object, objectData, hero);

    const expected: Army = [
      {
        count: 1,
        creature: "creature",
      },
    ];

    expect(result.army).toEqual(expected);
  });
});
