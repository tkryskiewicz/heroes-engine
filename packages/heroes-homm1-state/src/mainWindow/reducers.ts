import { GameType, initialHighScores } from "heroes-homm1";

import { MainWindowAction, MainWindowActionType } from "./actions";
import { MainWindowState } from "./state";

const initialState: MainWindowState = {
  creditsVisible: false,
  gameType: GameType.Standard,
  highScores: initialHighScores,
  highScoresVisible: false,
};

export const mainWindowReducer = (
  state: MainWindowState = initialState,
  action: MainWindowAction,
): MainWindowState => {
  switch (action.type) {
    case MainWindowActionType.ChangeGameType:
      return {
        ...state,
        gameType: action.value,
      };
    case MainWindowActionType.OpenHighScores:
      return {
        ...state,
        highScoresVisible: true,
      };
    case MainWindowActionType.CloseHighScores:
      return {
        ...state,
        gameType: GameType.Standard,
        highScoresVisible: false,
      };
    case MainWindowActionType.OpenCredits:
      return {
        ...state,
        creditsVisible: true,
      };
    case MainWindowActionType.CloseCredits:
        return {
          ...state,
          creditsVisible: false,
        };
    default:
      return state;
  }
};
