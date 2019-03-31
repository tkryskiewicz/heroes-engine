import { isMapObject, MapObject } from "./MapObject";

describe("isMapObject", () => {
  it("should return true when map object", () => {
    const object: MapObject = {
      id: "id",
    };

    const result = isMapObject(object);

    expect(result).toBe(true);
  });

  it("should return false when undefined", () => {
    const result = isMapObject(undefined);

    expect(result).toBe(false);
  });
});
