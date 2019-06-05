import { changeTerrain, createMap, createPoint } from "heroes-core";

import { getTerrainTransition, TerrainTransition } from "./TerrainTransition";

describe("getTerrainTransition", () => {
  it("should return none", () => {
    const map = createMap(1, 1, "terrain");

    const result = getTerrainTransition(map, createPoint(0, 0));

    expect(result).toBe(TerrainTransition.None);
  });

  it("should return south east out", () => {
    const map = changeTerrain(
      createMap(2, 2, "terrain"),
      createPoint(0, 0),
      "otherTerrain",
    );

    const result = getTerrainTransition(map, createPoint(0, 0));

    expect(result).toBe(TerrainTransition.SouthEastOut);
  });

  it("should return south west out", () => {
    const map = changeTerrain(
      createMap(2, 2, "terrain"),
      createPoint(1, 0),
      "otherTerrain",
    );

    const result = getTerrainTransition(map, createPoint(1, 0));

    expect(result).toBe(TerrainTransition.SouthWestOut);
  });

  it("should return north east out", () => {
    const map = changeTerrain(
      createMap(2, 2, "terrain"),
      createPoint(0, 1),
      "otherTerrain",
    );

    const result = getTerrainTransition(map, createPoint(0, 1));

    expect(result).toBe(TerrainTransition.NorthEastOut);
  });

  it("should return north west out", () => {
    const map = changeTerrain(
      createMap(2, 2, "terrain"),
      createPoint(1, 1),
      "otherTerrain",
    );

    const result = getTerrainTransition(map, createPoint(1, 1));

    expect(result).toBe(TerrainTransition.NorthWestOut);
  });

  it("should return east", () => {
    const map = changeTerrain(
      createMap(2, 1, "terrain"),
      createPoint(1, 0),
      "otherTerrain",
    );

    const result = getTerrainTransition(map, createPoint(0, 0));

    expect(result).toBe(TerrainTransition.East);
  });

  it("should return west", () => {
    const map = changeTerrain(
      createMap(2, 1, "terrain"),
      createPoint(0, 0),
      "otherTerrain",
    );

    const result = getTerrainTransition(map, createPoint(1, 0));

    expect(result).toBe(TerrainTransition.West);
  });

  it("should return south", () => {
    const map = changeTerrain(
      createMap(1, 2, "terrain"),
      createPoint(0, 1),
      "otherTerrain",
    );

    const result = getTerrainTransition(map, createPoint(0, 0));

    expect(result).toBe(TerrainTransition.South);
  });

  it("should return north", () => {
    const map = changeTerrain(
      createMap(1, 2, "terrain"),
      createPoint(0, 0),
      "otherTerrain",
    );

    const result = getTerrainTransition(map, createPoint(0, 1));

    expect(result).toBe(TerrainTransition.North);
  });

  it("should return north west in", () => {
    const map =
      changeTerrain(
        createMap(2, 2, "terrain"),
        createPoint(0, 0),
        "otherTerrain",
      );

    const result = getTerrainTransition(map, createPoint(1, 1));

    expect(result).toBe(TerrainTransition.NorthWestIn);
  });

  it("should return south east in", () => {
    const map =
      changeTerrain(
        createMap(2, 2, "terrain"),
        createPoint(1, 1),
        "otherTerrain",
      );

    const result = getTerrainTransition(map, createPoint(0, 0));

    expect(result).toBe(TerrainTransition.SouthEastIn);
  });

  it("should return south west in", () => {
    const map =
      changeTerrain(
        createMap(2, 2, "terrain"),
        createPoint(0, 1),
        "otherTerrain",
      );

    const result = getTerrainTransition(map, createPoint(1, 0));

    expect(result).toBe(TerrainTransition.SouthWestIn);
  });

  it("should return north east in", () => {
    const map =
      changeTerrain(
        createMap(2, 2, "terrain"),
        createPoint(1, 0),
        "otherTerrain",
      );

    const result = getTerrainTransition(map, createPoint(0, 1));

    expect(result).toBe(TerrainTransition.NorthEastIn);
  });
});
