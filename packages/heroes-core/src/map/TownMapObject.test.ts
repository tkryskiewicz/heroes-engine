import { DwellingStructure, Structure } from "../Structure";
import { Town } from "../Town";
import { MapObject } from "./MapObject";
import {
  createTownMapObject,
  isTownMapObject,
  recruitTownMapObjectTroop,
  TownMapObject,
  TownMapObjectData,
} from "./TownMapObject";

describe("createTownMapObject", () => {
  it("should create object", () => {
    const objectData: TownMapObjectData = {
      army: {
        preventMovingLastTroop: true,
      },
      id: "dataId",
      ownable: true,
    };

    const town: Town = {
      army: [],
      canConstructStructures: false,
      heroClass: "heroClass",
      id: "townId",
      name: "name",
      structures: [],
    };

    const result = createTownMapObject("id", objectData, town);

    const expected: TownMapObject = {
      ...town,
      dataId: "dataId",
      id: "townId",
      owner: undefined,
    };

    expect(result).toEqual(expected);
  });

  it("should create object with initial owner", () => {
    const objectData: TownMapObjectData = {
      army: {
        preventMovingLastTroop: true,
      },
      id: "dataId",
      ownable: true,
    };

    const town: Town = {
      army: [],
      canConstructStructures: false,
      heroClass: "heroClass",
      id: "townId",
      name: "name",
      structures: [],
    };

    const result = createTownMapObject("id", objectData, town, "owner");

    const expected: TownMapObject = {
      ...town,
      dataId: "dataId",
      id: "townId",
      owner: "owner",
    };

    expect(result).toEqual(expected);
  });
});

describe("isTownMapObject", () => {
  it("should return true when town map object", () => {
    const objectData: TownMapObjectData = {
      army: {
        preventMovingLastTroop: true,
      },
      id: "town",
      ownable: true,
    };

    const town: Town = {
      army: [],
      canConstructStructures: true,
      heroClass: "heroClass",
      id: "id",
      name: "Name",
      structures: [],
    };

    const object = createTownMapObject("id", objectData, town);

    const result = isTownMapObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not town map object", () => {
    const object: MapObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = isTownMapObject(object);

    expect(result).toBe(false);
  });
});

describe("recruitTownMapObjectTroop", () => {
  // TODO: split into recruiting and adding to army tests?
  it("should recruit troop and add it to army", () => {
    const structure: DwellingStructure = {
      cost: {},
      data: {},
      dwelling: {
        availableCount: 1,
        cost: {},
        creature: "creature",
        growth: 0,
      },
      id: "structure",
      isBuilt: true,
    };

    // TODO: remove, coverage dummy for replacing structure
    const otherStructure: Structure = {
      cost: {},
      data: {},
      id: "otherStructure",
      isBuilt: true,
    };

    const object: TownMapObject = {
      army: [],
      canConstructStructures: true,
      dataId: "dataId",
      heroClass: "heroClass",
      id: "id",
      name: "Name",
      structures: [
        structure,
        otherStructure,
      ],
    };

    const result = recruitTownMapObjectTroop(object, "structure", 1);

    const expected: TownMapObject = {
      ...object,
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      structures: [
        {
          ...structure,
          dwelling: {
            ...structure.dwelling,
            availableCount: 0,
          },
        },
        otherStructure,
      ],
    };

    expect(result).toEqual(expected);
  });

  it("should throw when invalid structure", () => {
    const object: TownMapObject = {
      army: [],
      canConstructStructures: true,
      dataId: "dataId",
      heroClass: "heroClass",
      id: "id",
      name: "Name",
      structures: [],
    };

    expect(() => {
      recruitTownMapObjectTroop(object, "structure", 1);
    }).toThrow();
  });
});
