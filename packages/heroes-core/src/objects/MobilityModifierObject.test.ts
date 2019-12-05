import { GameObjectData } from "../GameObject";
import { isMobilityModifierObjectData, MobilityModifierObjectData } from "./MobilityModifierObject";

describe("isMobilityModifierObjectData", () => {
  it("should return true when numeric value specified", () => {
    const objectData: MobilityModifierObjectData = {
      id: "dataId",
      mobilityModifier: { type: "add", value: 1 },
    };

    const result = isMobilityModifierObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return true when object value specified", () => {
    const objectData: MobilityModifierObjectData = {
      id: "dataId",
      mobilityModifier: {
        terrain: { type: "add", value: 1 },
      },
    };

    const result = isMobilityModifierObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not object data", () => {
    const objectData: GameObjectData = {
      id: "dataId",
    };

    const result = isMobilityModifierObjectData(objectData);

    expect(result).toBe(false);
  });
});
