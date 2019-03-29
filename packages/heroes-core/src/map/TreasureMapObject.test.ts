import { Game } from "../Game";
import { Resources } from "../Resource";
import { createMap, placeObject } from "./Map";
import { MapObject, MapObjectData } from "./MapObject";
import {
  createTreasureMapObject,
  handleTreasureMapObject,
  isTreasureMapObject,
  isTreasureMapObjectData,
  TreasureMapObject,
  TreasureMapObjectData,
} from "./TreasureMapObject";

describe("isTreasureMapObjectData", () => {
  it("should return true when treasure map object data", () => {
    const objectData: TreasureMapObjectData = {
      id: "id",
      treasure: {},
    };

    const result = isTreasureMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not treasure map object data", () => {
    const objectData: MapObjectData = {
      id: "id",
    };

    const result = isTreasureMapObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("createTreasureMapObject", () => {
  it("should create treasure map object", () => {
    const objectData: TreasureMapObjectData = {
      id: "id",
      treasure: {},
    };

    const result = createTreasureMapObject(objectData);

    const expected: TreasureMapObject = {
      id: "id",
      treasure: {},
    };

    expect(result).toEqual(expected);
  });

  it("should randomize resource amount", () => {
    const objectData: TreasureMapObjectData = {
      id: "id",
      treasure: {
        resource: {
          max: 1,
          min: 0,
        },
      },
    };

    const result = createTreasureMapObject(objectData);

    expect(result.treasure.resource).toBeGreaterThanOrEqual(0);
    expect(result.treasure.resource).toBeLessThanOrEqual(1);
  });
});

describe("isTreasureMapObject", () => {
  it("should return true when treasure map object", () => {
    const objectData: TreasureMapObjectData = {
      id: "id",
      treasure: {},
    };

    const object = createTreasureMapObject(objectData);

    const result = isTreasureMapObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not treasure map object", () => {
    const object: MapObject = {
      id: "id",
    };

    const result = isTreasureMapObject(object);

    expect(result).toBe(false);
  });
});

describe("handleTreasureMapObject", () => {
  it("should add resources", () => {
    const object: TreasureMapObject = {
      id: "id",
      treasure: {
        resource: 1,
      },
    };

    const game: Game = {
      alignment: "alignment",
      data: {
        artifacts: {},
        creatures: {},
        mapObjects: {},
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

    const result = handleTreasureMapObject(game, object);

    const expected: Resources = {
      resource: 1,
    };

    expect(result.resources).toEqual(expected);
  });
});
