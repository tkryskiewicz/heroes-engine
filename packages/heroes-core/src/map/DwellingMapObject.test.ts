import { Army } from "../Army";
import { Game, getGameHero } from "../Game";
import { Hero } from "../Hero";
import {
  createDwellingMapObject,
  DwellingMapObject,
  DwellingMapObjectData,
  DwellingMapObjectType,
  handleDwellingMapObject,
  isDwellingMapObject,
  isDwellingMapObjectData,
} from "./DwellingMapObject";
import { createHeroMapObject } from "./HeroMapObject";
import { createMap, getObject, placeObject } from "./Map";
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

describe("handleDwellingMapObject", () => {
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

    const game: Game = {
      alignment: "alignment",
      data: {
        artifacts: {},
        creatures: {},
        mapObjects: {
          id: objectData,
        },
        spells: {},
      },
      heroes: [],
      map: placeObject(createMap(1, 1, "terrain"), { x: 0, y: 0 }, object),
      puzzle: {
        totalPieces: 0,
        uncoveredPieces: 0,
      },
      resources: {},
      scenario: {
        description: "Description",
        name: "Name",
      },
      towns: [],
    };

    const result = handleDwellingMapObject(game, object, objectData, hero);

    const expected: DwellingMapObject = {
      availableCount: 0,
      id: "id",
      type: DwellingMapObjectType,
    };

    expect(getObject(result.map, "id")).toEqual(expected);
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
      id: "hero",
      luck: 0,
      mobility: 0,
      morale: 0,
      skills: {},
    };

    const game: Game = {
      alignment: "alignment",
      data: {
        artifacts: {},
        creatures: {},
        mapObjects: {
          id: objectData,
        },
        spells: {},
      },
      heroes: [
        hero,
      ],
      map: placeObject(
        placeObject(
          createMap(2, 2, "terrain"),
          { x: 0, y: 0 },
          object,
        ),
        { x: 1, y: 0 },
        createHeroMapObject("hero", hero),
      ),
      puzzle: {
        totalPieces: 0,
        uncoveredPieces: 0,
      },
      resources: {},
      scenario: {
        description: "Description",
        name: "Name",
      },
      towns: [],
    };

    const result = handleDwellingMapObject(game, object, objectData, hero);

    const expected: Army = [
      {
        count: 1,
        creature: "creature",
      },
    ];

    expect(getGameHero(result, "hero")!.army).toEqual(expected);
  });
});
