import { GameObjectData } from "../GameObject";
import { isPickableObjectData, PickableObjectData } from "./PickableObject";

describe("isPickableObjectData", () => {
  it("should return true when pickable object data", () => {
    const objectData: PickableObjectData = {
      id: "id",
      pickable: true,
    };

    const result = isPickableObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not pickable object data", () => {
    const objectData: GameObjectData = {
      id: "id",
    };

    const result = isPickableObjectData(objectData);

    expect(result).toBe(false);
  });
});
