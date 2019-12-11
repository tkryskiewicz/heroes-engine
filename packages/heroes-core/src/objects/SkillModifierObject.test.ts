import { GameObjectData } from "../GameObject";
import { isSkillModifierObjectData, SkillModifierObjectData } from "./SkillModifierObject";

describe("isSkillModifierObjectData", () => {
  it("should return true when skill modifier object data", () => {
    const objectData: SkillModifierObjectData = {
      id: "dataId",
      skillModifier: {
        type: "add",
        value: 1,
      },
    };

    const result = isSkillModifierObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not skill modifier object data", () => {
    const objectData: GameObjectData = {
      id: "dataId",
    };

    const result = isSkillModifierObjectData(objectData);

    expect(result).toBe(false);
  });
});
