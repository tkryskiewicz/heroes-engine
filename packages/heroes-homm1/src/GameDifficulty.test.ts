import { GameDifficulty, getGameDifficultyRating } from "./GameDifficulty";

describe("getGameDifficultyRating", () => {
  it("should return 10 when easy", () => {
    const result = getGameDifficultyRating(GameDifficulty.Easy);

    expect(result).toBe(10);
  });

  it("should return 20 when normal", () => {
    const result = getGameDifficultyRating(GameDifficulty.Normal);

    expect(result).toBe(20);
  });

  it("should return 30 when hard", () => {
    const result = getGameDifficultyRating(GameDifficulty.Hard);

    expect(result).toBe(30);
  });

  it("should return 40 when expert", () => {
    const result = getGameDifficultyRating(GameDifficulty.Expert);

    expect(result).toBe(40);
  });
});
