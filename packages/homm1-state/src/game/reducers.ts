import { GameState } from "./state";

const initialState: GameState = {
  heroes: [],
};

export const gameReducer = (state: GameState = initialState): GameState => {
  return state;
};
