import { combineReducers } from "redux";

import { adventureOptionsReducer } from "./adventureOptions";
import { adventureScreenReducer } from "./adventureScreen";
import { editorWindowReducer } from "./editorWindow";
import { gameReducer } from "./game";
import { gameOptionsReducer } from "./gameOptions";
import { gameSettingsReducer } from "./gameSettings";
import { heroTradingWindowReducer } from "./heroTradingWindow";
import { heroWindowReducer } from "./heroWindow";
import { kingdomOverviewWindowReducer } from "./kingdomOverviewWindow";
import { locatorsReducer } from "./locators";
import { mageGuildWindowReducer } from "./mageGuildWindow";
import { puzzleWindowReducer } from "./puzzleWindow";
import { scenarioInfoWindowReducer } from "./scenarioInfoWindow";
import { spellBookWindowReducer } from "./spellBookWindow";
import { AppState } from "./state";
import { statusWindowReducer } from "./statusWindow";
import { townWindowReducer } from "./townWindow";
import { troopWindowReducer } from "./troopWindow";

export const rootReducer = combineReducers<AppState>({
  adventureOptions: adventureOptionsReducer,
  adventureScreen: adventureScreenReducer,
  editorWindow: editorWindowReducer,
  game: gameReducer,
  gameOptions: gameOptionsReducer,
  gameSettings: gameSettingsReducer,
  heroTradingWindow: heroTradingWindowReducer,
  heroWindow: heroWindowReducer,
  kingdomOverviewWindow: kingdomOverviewWindowReducer,
  locators: locatorsReducer,
  mageGuildWindow: mageGuildWindowReducer,
  puzzleWindow: puzzleWindowReducer,
  scenarioInfoWindow: scenarioInfoWindowReducer,
  spellBookWindow: spellBookWindowReducer,
  statusWindow: statusWindowReducer,
  townWindow: townWindowReducer,
  troopWindow: troopWindowReducer,
});
