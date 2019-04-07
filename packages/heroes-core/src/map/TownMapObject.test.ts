import { Town } from "../Town";
import { MapObject } from "./MapObject";
import { createTownMapObject, isTownMapObject, TownMapObject, TownMapObjectData } from "./TownMapObject";

describe("createTownMapObject", () => {
  it("should create object", () => {
    const objectData: TownMapObjectData = {
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
