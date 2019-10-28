import { GameType, initialHighScores } from "heroes-homm1";

import { HighScoresWindowAction, HighScoresWindowActionType } from "./actions";
import { HighScoresWindowState } from "./state";

const initialState: HighScoresWindowState = {
  gameType: GameType.Standard,
  scores: initialHighScores,
};

export const highScoresWindowReducer = (
  state: HighScoresWindowState = initialState,
  action: HighScoresWindowAction,
): HighScoresWindowState => {
  switch (action.type) {
    case HighScoresWindowActionType.ChangeGameType:
      return {
        ...state,
        gameType: action.value,
      };
    default:
      return state;
  }
};
