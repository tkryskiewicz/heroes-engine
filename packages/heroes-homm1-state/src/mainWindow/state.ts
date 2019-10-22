import { GameType, HighScores } from "heroes-homm1";

export interface MainWindowState {
  readonly highScores: HighScores;
  readonly gameType: GameType;
  readonly highScoresVisible: boolean;
  readonly creditsVisible: boolean;
}
