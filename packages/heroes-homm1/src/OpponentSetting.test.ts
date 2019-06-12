import { getOpponentSettingRating, OpponentSetting } from "./OpponentSetting";

describe("getOpponentSettingRating", () => {
  it("should return 15 when dumb", () => {
    const result = getOpponentSettingRating(OpponentSetting.Dumb);

    expect(result).toBe(15);
  });

  it("should return 20 when average", () => {
    const result = getOpponentSettingRating(OpponentSetting.Average);

    expect(result).toBe(20);
  });

  it("should return 25 when smart", () => {
    const result = getOpponentSettingRating(OpponentSetting.Smart);

    expect(result).toBe(25);
  });

  it("should return 30 when genius", () => {
    const result = getOpponentSettingRating(OpponentSetting.Genius);

    expect(result).toBe(30);
  });

  it("should return 0 when none", () => {
    const result = getOpponentSettingRating(OpponentSetting.None);

    expect(result).toBe(0);
  });
});
