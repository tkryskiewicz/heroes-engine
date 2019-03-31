import { Game } from "../Game";
import { Resources } from "../Resource";
import { createMap, placeObject } from "./Map";
import { MapObjectData } from "./MapObject";
import {
  createMineMapObject,
  handleMineMapObject,
  isMineMapObjectData,
  MineMapObject,
  MineMapObjectData,
} from "./MineMapObject";

describe("isMineMapObjectData", () => {
  it("should return true when mine map object data", () => {
    const objectData: MineMapObjectData = {
      id: "id",
      mine: {
        amount: 1,
        resource: "resource",
      },
      ownable: true,
    };

    const result = isMineMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not mine map object data", () => {
    const objectData: MapObjectData = {
      id: "id",
    };

    const result = isMineMapObjectData(objectData);

    expect(result).toEqual(false);
  });
});

describe("createMineMapObject", () => {
  it("should create mine map object", () => {
    const objectData: MineMapObjectData = {
      id: "id",
      mine: {
        amount: 1,
        resource: "resource",
      },
      ownable: true,
    };

    const result = createMineMapObject(objectData);

    const expected: MineMapObject = {
      id: "id",
    };

    expect(result).toEqual(expected);
  });

  it("should create mine map object with initial owner", () => {
    const objectData: MineMapObjectData = {
      id: "id",
      mine: {
        amount: 1,
        resource: "resource",
      },
      ownable: true,
    };

    const result = createMineMapObject(objectData, "owner");

    const expected: MineMapObject = {
      id: "id",
      owner: "owner",
    };

    expect(result).toEqual(expected);
  });
});

describe("handleMineMapObject", () => {
  it("should add resources", () => {
    const objectData: MineMapObjectData = {
      id: "id",
      mine: {
        amount: 1,
        resource: "resource",
      },
      ownable: true,
    };

    const object = createMineMapObject(objectData, "owner");

    const game: Game = {
      alignment: "owner",
      data: {
        artifacts: {},
        creatures: {},
        mapObjects: {},
        resources: {},
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

    const result = handleMineMapObject(game, object, objectData);

    const expectedResources: Resources = {
      resource: 1,
    };

    expect(result.resources).toEqual(expectedResources);
  });

  it("should throw when object is not owned by player", () => {
    const objectData: MineMapObjectData = {
      id: "id",
      mine: {
        amount: 1,
        resource: "resource",
      },
      ownable: true,
    };

    const object = createMineMapObject(objectData, "owner");

    const game: Game = {
      alignment: "otherOwner",
      data: {
        artifacts: {},
        creatures: {},
        mapObjects: {},
        resources: {},
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
      handleMineMapObject(game, object, objectData);
    }).toThrow();
  });
});
