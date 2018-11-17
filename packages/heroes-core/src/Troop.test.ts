import { isTroopValid, Troop } from "./Troop";

describe("isTroopValid", () => {
  it("should return true when troop is valid", () => {
    const troop: Troop = {
      count: 1,
      creature: "creature",
    };

    const result = isTroopValid(troop);

    expect(result).toBe(true);
  });

  it("should return true when troop count is zero", () => {
    const troop: Troop = {
      count: 0,
      creature: "creature",
    };

    const result = isTroopValid(troop);

    expect(result).toBe(true);
  });

  it("should return false when count is negative", () => {
    const troop: Troop = {
      count: -1,
      creature: "creature",
    };

    const result = isTroopValid(troop);

    expect(result).toBe(false);
  });
});
