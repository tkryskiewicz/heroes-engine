import { getCurrentLevel, getNextLevelExperience } from "./experience";

describe("getCurrentLevel", () => {
  it("should return 1 when no experience", () => {
    const result = getCurrentLevel(0);

    expect(result).toEqual(1);
  });

  it("should throw when experience is negative", () => {
    expect(() => {
      getCurrentLevel(-1);
    }).toThrow();
  });

  it("should return correct level", () => {
    const result = getCurrentLevel(9543);

    expect(result).toEqual(8);
  });

  it("should return max level when experience above ", () => {
    const result = getCurrentLevel(1751997163);

    expect(result).toEqual(75);
  });
});

describe("getNextLevelExperience", () => {
  it("should return level 2 value when no experience", () => {
    const result = getNextLevelExperience(0);

    expect(result).toEqual(1000);
  });

  it("should return currect value", () => {
    const result = getNextLevelExperience(9543);

    expect(result).toEqual(11000);
  });

  it("should throw when experience is negative", () => {
    expect(() => {
      getNextLevelExperience(-1);
    }).toThrow();
  });

  it("should return undefined when no next level", () => {
    const result = getNextLevelExperience(1751997163);

    expect(result).toBeUndefined();
  });
});
