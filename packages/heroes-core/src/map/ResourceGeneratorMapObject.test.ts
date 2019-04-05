import { Game } from "../Game";
import { Resources } from "../Resource";
import { createMap, placeObject } from "./Map";
import { MapObjectData } from "./MapObject";
import {
  createResourceGeneratorMapObject,
  handleResourceGeneratorMapObject,
  isResourceGeneratorMapObjectData,
  ResourceGeneratorMapObject,
  ResourceGeneratorMapObjectData,
} from "./ResourceGeneratorMapObject";

describe("isResourceGeneratorMapObjectData", () => {
  it("should return true when resource generator map object data", () => {
    const objectData: ResourceGeneratorMapObjectData = {
      id: "dataId",
      ownable: true,
      resourceGenerator: {
        amount: 1,
        resource: "resource",
      },
    };

    const result = isResourceGeneratorMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not resource generator map object data", () => {
    const objectData: MapObjectData = {
      id: "dataId",
    };

    const result = isResourceGeneratorMapObjectData(objectData);

    expect(result).toEqual(false);
  });
});

describe("createResourceGeneratorMapObject", () => {
  it("should create object", () => {
    const objectData: ResourceGeneratorMapObjectData = {
      id: "dataId",
      ownable: true,
      resourceGenerator: {
        amount: 1,
        resource: "resource",
      },
    };

    const result = createResourceGeneratorMapObject("id", objectData);

    const expected: ResourceGeneratorMapObject = {
      dataId: "dataId",
      id: "id",
    };

    expect(result).toEqual(expected);
  });

  it("should create object with initial owner", () => {
    const objectData: ResourceGeneratorMapObjectData = {
      id: "dataId",
      ownable: true,
      resourceGenerator: {
        amount: 1,
        resource: "resource",
      },
    };

    const result = createResourceGeneratorMapObject("id", objectData, "owner");

    const expected: ResourceGeneratorMapObject = {
      dataId: "dataId",
      id: "id",
      owner: "owner",
    };

    expect(result).toEqual(expected);
  });
});

describe("handleResourceGeneratorMapObject", () => {
  it("should add resources", () => {
    const objectData: ResourceGeneratorMapObjectData = {
      id: "dataId",
      ownable: true,
      resourceGenerator: {
        amount: 1,
        resource: "resource",
      },
    };

    const object = createResourceGeneratorMapObject("id", objectData, "owner");

    const game: Game = {
      alignment: "owner",
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

    const result = handleResourceGeneratorMapObject(game, object, objectData);

    const expectedResources: Resources = {
      resource: 1,
    };

    expect(result.resources).toEqual(expectedResources);
  });

  it("should throw when object is not owned by player", () => {
    const objectData: ResourceGeneratorMapObjectData = {
      id: "dataId",
      ownable: true,
      resourceGenerator: {
        amount: 1,
        resource: "resource",
      },
    };

    const object = createResourceGeneratorMapObject("id", objectData, "owner");

    const game: Game = {
      alignment: "otherOwner",
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
      handleResourceGeneratorMapObject(game, object, objectData);
    }).toThrow();
  });
});
