import { GameType, HighScores } from "heroes-homm1";

export interface HighScoresWindowState {
  readonly scores: HighScores;
  readonly gameType: GameType;
}
