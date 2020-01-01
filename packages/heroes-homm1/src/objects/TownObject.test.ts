import { DwellingStructure, GameObject, Structure, TownData } from "heroes-core";

import {
  initializeTownObject,
  isTownObject,
  recruitTownObjectTroop,
  TownObject,
  TownObjectData,
} from "./TownObject";

describe("initializeTownObject", () => {
  it("should create object", () => {
    const objectData: TownObjectData = {
      army: {
        preventMovingLastTroop: false,
      },
      heroClass: "heroClass",
      id: "dataId",
      isCastleBuilt: false,
      ownable: true,
      town: "town",
    };

    const townData: TownData = {
      id: "town",
      structures: [],
    };

    const data: Parameters<typeof initializeTownObject>[2] = {
      towns: {
        [townData.id]: townData,
      },
    };

    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = initializeTownObject(object, objectData, data);

    const expected: TownObject = {
      ...object,
      army: [],
      canConstructStructures: true,
      heroClass: "",
      name: "",
      owner: undefined,
      structures: [],
    };

    expect(result).toEqual(expected);
  });
});

describe("isTownObject", () => {
  it("should return true when town object", () => {
    const object: TownObject = {
      army: [],
      canConstructStructures: true,
      dataId: "dataId",
      heroClass: "",
      id: "id",
      name: "",
      owner: undefined,
      structures: [],
    };

    const result = isTownObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not town object", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = isTownObject(object);

    expect(result).toBe(false);
  });
});

describe("recruitTownObjectTroop", () => {
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

    const object: TownObject = {
      army: [],
      canConstructStructures: true,
      dataId: "dataId",
      heroClass: "heroClass",
      id: "id",
      name: "Name",
      owner: undefined,
      structures: [
        structure,
        otherStructure,
      ],
    };

    const result = recruitTownObjectTroop(object, "structure", 1);

    const expected: TownObject = {
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
    const object: TownObject = {
      army: [],
      canConstructStructures: true,
      dataId: "dataId",
      heroClass: "heroClass",
      id: "id",
      name: "Name",
      owner: undefined,
      structures: [],
    };

    expect(() => {
      recruitTownObjectTroop(object, "structure", 1);
    }).toThrow();
  });
});
