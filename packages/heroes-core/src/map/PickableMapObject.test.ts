import { MapObjectData } from "./MapObject";
import { isPickableMapObjectData, PickableMapObjectData } from "./PickableMapObject";

describe("isPickableMapObjectData", () => {
  it("should return true when pickable map object data", () => {
    const objectData: PickableMapObjectData = {
      id: "id",
      pickable: true,
    };

    const result = isPickableMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not pickable map object data", () => {
    const objectData: MapObjectData = {
      id: "id",
    };

    const result = isPickableMapObjectData(objectData);

    expect(result).toBe(false);
  });
});
