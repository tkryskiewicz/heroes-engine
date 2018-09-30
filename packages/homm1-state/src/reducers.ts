import { combineReducers } from "redux";

import { gameReducer } from "./game";
import { locatorsReducer } from "./locators";
import { AppState } from "./state";

export const rootReducer = combineReducers<AppState>({
  game: gameReducer,
  locators: locatorsReducer,
});
