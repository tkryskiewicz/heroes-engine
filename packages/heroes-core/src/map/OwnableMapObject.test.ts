import { Hero } from "../Hero";
import { createMap, getObject, placeObject } from "./Map";
import { MapObject, MapObjectData } from "./MapObject";
import {
  createOwnableMapObject,
  handleOwnableMapObject,
  isObjectOwnedBy,
  isOwnableMapObject,
  isOwnableMapObjectData,
  OwnableMapObject,
  OwnableMapObjectData,
} from "./OwnableMapObject";

describe("isOwnableMapObjectData", () => {
  it("should return true when ownable map object data", () => {
    const objectData: OwnableMapObjectData = {
      id: "id",
      ownable: true,
    };

    const result = isOwnableMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not ownable map object data", () => {
    const objectData: MapObjectData = {
      id: "id",
    };

    const result = isOwnableMapObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("createOwnableMapObject", () => {
  it("should create ownable map object", () => {
    const objectData: OwnableMapObjectData = {
      id: "id",
      ownable: true,
    };

    const result = createOwnableMapObject(objectData);

    const expected: OwnableMapObject = {
      id: "id",
      owner: undefined,
    };

    expect(result).toEqual(expected);
  });

  it("should create with initial owner", () => {
    const objectData: OwnableMapObjectData = {
      id: "id",
      ownable: true,
    };

    const result = createOwnableMapObject(objectData, "owner");

    const expected: OwnableMapObject = {
      id: "id",
      owner: "owner",
    };

    expect(result).toEqual(expected);
  });
});

describe("isOwnableMapObject", () => {
  it("should return true when ownable map object", () => {
    const objectData: OwnableMapObjectData = {
      id: "id",
      ownable: true,
    };

    const object = createOwnableMapObject(objectData);

    const result = isOwnableMapObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not ownable map object", () => {
    const object: MapObject = {
      id: "id",
    };

    const result = isOwnableMapObject(object);

    expect(result).toBe(false);
  });
});

describe("isObjectOwnedBy", () => {
  it("should return true when owner", () => {
    const objectData: OwnableMapObjectData = {
      id: "id",
      ownable: true,
    };

    const object = createOwnableMapObject(objectData, "owner");

    const result = isObjectOwnedBy(object, "owner");

    expect(result).toBe(true);
  });

  it("should return false when not owner", () => {
    const objectData: OwnableMapObjectData = {
      id: "id",
      ownable: true,
    };

    const object = createOwnableMapObject(objectData, "otherOwner");

    const result = isObjectOwnedBy(object, "owner");

    expect(result).toBe(false);
  });
});

describe("handleOwnableMapObject", () => {
  it("should set owner", () => {
    const objectData: OwnableMapObjectData = {
      id: "id",
      ownable: true,
    };

    const object = createOwnableMapObject(objectData);

    const hero: Hero = {
      alignment: "owner",
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

    const game = {
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

    const result = handleOwnableMapObject(game, object, objectData, hero);

    const expectedObject: OwnableMapObject = {
      id: "id",
      owner: "owner",
    };

    expect(getObject(result.map, "id")).toEqual(expectedObject);
  });

  it("should throw when already an owner", () => {
    const objectData: OwnableMapObjectData = {
      id: "id",
      ownable: true,
    };

    const object = createOwnableMapObject(objectData, "owner");

    const hero: Hero = {
      alignment: "owner",
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

    const game = {
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

    expect(() => {
      handleOwnableMapObject(game, object, objectData, hero);
    }).toThrow();
  });
});
