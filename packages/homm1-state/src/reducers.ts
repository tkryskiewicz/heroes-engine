import { combineReducers } from "redux";

import { gameReducer } from "./game";
import { heroWindowReducer } from "./heroWindow";
import { kingdomOverviewWindowReducer } from "./kingdomOverviewWindow";
import { locatorsReducer } from "./locators";
import { AppState } from "./state";
import { townWindowReducer } from "./townWindow";

export const rootReducer = combineReducers<AppState>({
  game: gameReducer,
  heroWindow: heroWindowReducer,
  kingdomOverviewWindow: kingdomOverviewWindowReducer,
  locators: locatorsReducer,
  townWindow: townWindowReducer,
});
