import { CreatureId } from "./creatures";
import { getCampaignGameRating, getStandardGameRating } from "./scores";

describe("getCampaignGameRating", () => {
  it("should return paladin when days is below 500", () => {
    const result = getCampaignGameRating(0);

    expect(result).toBe(CreatureId.Paladin);
  });

  it("should return correct rating", () => {
    const result = getCampaignGameRating(1623);

    expect(result).toBe(CreatureId.Dwarf);
  });

  it("should return peasant when days is above 4400", () => {
    const result = getCampaignGameRating(4500);

    expect(result).toBe(CreatureId.Peasant);
  });
});

describe("getStandardGameRating", () => {
  it("should return cavalry when score above 130", () => {
    const result = getStandardGameRating(140);

    expect(result).toBe(CreatureId.Cavalry);
  });

  it("should return correct rating", () => {
    const result = getStandardGameRating(57);

    expect(result).toBe(CreatureId.Gargoyle);
  });

  it("should return goblin when score below 10", () => {
    const result = getStandardGameRating(4);

    expect(result).toBe(CreatureId.Goblin);
  });
});
