import { combineReducers } from "redux";

import { gameReducer } from "./game";
import { heroWindowReducer } from "./heroWindow";
import { locatorsReducer } from "./locators";
import { AppState } from "./state";

export const rootReducer = combineReducers<AppState>({
  game: gameReducer,
  heroWindow: heroWindowReducer,
  locators: locatorsReducer,
});
