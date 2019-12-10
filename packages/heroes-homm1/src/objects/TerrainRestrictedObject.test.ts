import { isTerrainRestrictedObjectData, TerrainRestrictedObjectData } from "./TerrainRestrictedObject";

describe("isTerrainRestrictedObjectData", () => {
  it("should return true when terrain restricted object data", () => {
    const objectData: TerrainRestrictedObjectData = {
      id: "dataId",
      restrictedTerrains: [],
    };

    const result = isTerrainRestrictedObjectData(objectData);

    expect(result).toBe(true);
  });
});
