import { combineReducers } from "redux";

import { adventureOptionsReducer } from "./adventureOptions";
import { gameReducer } from "./game";
import { heroWindowReducer } from "./heroWindow";
import { kingdomOverviewWindowReducer } from "./kingdomOverviewWindow";
import { locatorsReducer } from "./locators";
import { AppState } from "./state";
import { townWindowReducer } from "./townWindow";

export const rootReducer = combineReducers<AppState>({
  adventureOptions: adventureOptionsReducer,
  game: gameReducer,
  heroWindow: heroWindowReducer,
  kingdomOverviewWindow: kingdomOverviewWindowReducer,
  locators: locatorsReducer,
  townWindow: townWindowReducer,
});
