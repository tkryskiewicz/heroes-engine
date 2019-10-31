import { GameOptionsAction, GameOptionsActionType } from "./actions";
import { GameOptionsState } from "./state";

export const gameOptionsReducer = (
  state: GameOptionsState = {},
  action: GameOptionsAction,
): GameOptionsState => {
  switch (action.type) {
    case GameOptionsActionType.OpenEndGamePrompt:
      return {
        ...state,
        endGameOption: action.option,
      };
    case GameOptionsActionType.CloseEndGamePrompt:
      return {
        ...state,
        endGameOption: undefined,
      };
    default:
      return state;
  }
};
