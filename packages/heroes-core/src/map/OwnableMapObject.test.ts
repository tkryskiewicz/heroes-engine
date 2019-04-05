import { Game } from "../Game";
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
      id: "dataId",
      ownable: true,
    };

    const result = isOwnableMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not ownable map object data", () => {
    const objectData: MapObjectData = {
      id: "dataId",
    };

    const result = isOwnableMapObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("createOwnableMapObject", () => {
  it("should create ownable map object", () => {
    const objectData: OwnableMapObjectData = {
      id: "dataId",
      ownable: true,
    };

    const result = createOwnableMapObject("id", objectData);

    const expected: OwnableMapObject = {
      dataId: "dataId",
      id: "id",
      owner: undefined,
    };

    expect(result).toEqual(expected);
  });

  it("should create with initial owner", () => {
    const objectData: OwnableMapObjectData = {
      id: "dataId",
      ownable: true,
    };

    const result = createOwnableMapObject("id", objectData, "owner");

    const expected: OwnableMapObject = {
      dataId: "dataId",
      id: "id",
      owner: "owner",
    };

    expect(result).toEqual(expected);
  });
});

describe("isOwnableMapObject", () => {
  it("should return true when ownable map object", () => {
    const objectData: OwnableMapObjectData = {
      id: "dataId",
      ownable: true,
    };

    const object = createOwnableMapObject("id", objectData);

    const result = isOwnableMapObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not ownable map object", () => {
    const object: MapObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = isOwnableMapObject(object);

    expect(result).toBe(false);
  });
});

describe("isObjectOwnedBy", () => {
  it("should return true when owner", () => {
    const objectData: OwnableMapObjectData = {
      id: "dataId",
      ownable: true,
    };

    const object = createOwnableMapObject("id", objectData, "owner");

    const result = isObjectOwnedBy(object, "owner");

    expect(result).toBe(true);
  });

  it("should return false when not owner", () => {
    const objectData: OwnableMapObjectData = {
      id: "dataId",
      ownable: true,
    };

    const object = createOwnableMapObject("id", objectData, "otherOwner");

    const result = isObjectOwnedBy(object, "owner");

    expect(result).toBe(false);
  });
});

describe("handleOwnableMapObject", () => {
  it("should set owner", () => {
    const objectData: OwnableMapObjectData = {
      id: "dataId",
      ownable: true,
    };

    const object = createOwnableMapObject("id", objectData);

    const game: Game = {
      alignment: "alignment",
      data: {
        artifacts: {},
        creatures: {},
        mapObjects: {},
        resources: {},
        spells: {},
      },
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
    };

    const result = handleOwnableMapObject(game, object, objectData);

    const expectedObject: OwnableMapObject = {
      dataId: "dataId",
      id: "id",
      owner: "alignment",
    };

    expect(getObject(result.map, "id")).toEqual(expectedObject);
  });

  it("should throw when already an owner", () => {
    const objectData: OwnableMapObjectData = {
      id: "dataId",
      ownable: true,
    };

    const object = createOwnableMapObject("id", objectData, "alignment");

    const game: Game = {
      alignment: "alignment",
      data: {
        artifacts: {},
        creatures: {},
        mapObjects: {},
        resources: {},
        spells: {},
      },
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
    };

    expect(() => {
      handleOwnableMapObject(game, object, objectData);
    }).toThrow();
  });
});
