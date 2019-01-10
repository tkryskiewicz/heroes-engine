import { combineReducers } from "redux";

import { adventureOptionsReducer } from "./adventureOptions";
import { adventureScreenReducer } from "./adventureScreen";
import { gameReducer } from "./game";
import { gameOptionsReducer } from "./gameOptions";
import { gameSettingsReducer } from "./gameSettings";
import { heroWindowReducer } from "./heroWindow";
import { kingdomOverviewWindowReducer } from "./kingdomOverviewWindow";
import { locatorsReducer } from "./locators";
import { mageGuildWindowReducer } from "./mageGuildWindow";
import { puzzleWindowReducer } from "./puzzleWindow";
import { scenarioInfoWindowReducer } from "./scenarioInfoWindow";
import { spellBookWindowReducer } from "./spellBookWindow";
import { AppState } from "./state";
import { townWindowReducer } from "./townWindow";

export const rootReducer = combineReducers<AppState>({
  adventureOptions: adventureOptionsReducer,
  adventureScreen: adventureScreenReducer,
  game: gameReducer,
  gameOptions: gameOptionsReducer,
  gameSettings: gameSettingsReducer,
  heroWindow: heroWindowReducer,
  kingdomOverviewWindow: kingdomOverviewWindowReducer,
  locators: locatorsReducer,
  mageGuildWindow: mageGuildWindowReducer,
  puzzleWindow: puzzleWindowReducer,
  scenarioInfoWindow: scenarioInfoWindowReducer,
  spellBookWindow: spellBookWindowReducer,
  townWindow: townWindowReducer,
});
