import { GameObjectData } from "../GameObject";
import { isMapObjectData, MapObjectData } from "./MapObject";

describe("isMapObjectData", () => {
  it("should return true when map object data", () => {
    const objectData: MapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      width: 1,
    };

    const result = isMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not map object data", () => {
    const objectData: GameObjectData = {
      id: "dataId",
    };

    const result = isMapObjectData(objectData);

    expect(result).toBe(false);
  });
});
