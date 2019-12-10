import { DwellingStructure, GameObject, MapObject, Structure } from "heroes-core";

import { ObjectId } from "../ObjectId";
import {
  initializeTownObject,
  isTownObject,
  recruitTownObjectTroop,
  TownObject,
} from "./TownObject";

describe("initializeTownObject", () => {
  it("should create object", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = initializeTownObject(object);

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
      dataId: ObjectId.Town,
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
    const object: MapObject = {
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
