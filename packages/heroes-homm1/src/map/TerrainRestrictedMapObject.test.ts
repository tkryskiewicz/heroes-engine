import { isTerrainRestrictedMapObjectData, TerrainRestrictedMapObjectData } from "./TerrainRestrictedMapObject";

describe("isTerrainRestrictedMapObjectData", () => {
  it("should return true when terrain restricted object data", () => {
    const objectData: TerrainRestrictedMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      restrictedTerrains: [],
      width: 1,
    };

    const result = isTerrainRestrictedMapObjectData(objectData);

    expect(result).toBe(true);
  });
});
