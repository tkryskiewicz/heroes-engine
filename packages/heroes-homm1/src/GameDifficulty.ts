export enum GameDifficulty {
  Easy = "easy",
  Normal = "normal",
  Hard = "hard",
  Expert = "expert",
}

const GameDifficulties = [
  GameDifficulty.Easy,
  GameDifficulty.Normal,
  GameDifficulty.Hard,
  GameDifficulty.Expert,
];

export const getGameDifficultyRating = (difficulty: GameDifficulty): number =>
  (GameDifficulties.indexOf(difficulty) + 1) * 10;
