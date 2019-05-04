import { MapObjectData } from "./MapObject";
import { isPickableMapObjectData, PickableMapObjectData } from "./PickableMapObject";

describe("isPickableMapObjectData", () => {
  it("should return true when pickable map object data", () => {
    const objectData: PickableMapObjectData = {
      grid: [],
      height: 1,
      id: "id",
      pickable: true,
      width: 1,
    };

    const result = isPickableMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not pickable map object data", () => {
    const objectData: MapObjectData = {
      grid: [],
      height: 1,
      id: "id",
      width: 1,
    };

    const result = isPickableMapObjectData(objectData);

    expect(result).toBe(false);
  });
});
