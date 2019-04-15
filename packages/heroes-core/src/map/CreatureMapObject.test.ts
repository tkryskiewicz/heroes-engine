import { CreatureMapObjectData, isCreatureMapObjectData } from "./CreatureMapObject";
import { MapObjectData } from "./MapObject";

describe("isCreatureMapObjectData", () => {
  it("should return true when creature object data", () => {
    const objectData: CreatureMapObjectData = {
      creature: "creature",
      id: "dataId",
    };

    const result = isCreatureMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not creature object data", () => {
    const objectData: MapObjectData = {
      id: "dataId",
    };

    const result = isCreatureMapObjectData(objectData);

    expect(result).toBe(false);
  });
});