import { combineReducers } from "redux";

import { adventureScreenReducer } from "./adventureScreen";
import { editorWindowReducer } from "./editorWindow";
import { gameReducer } from "./game";
import { gameOptionsReducer } from "./gameOptions";
import { gameSettingsReducer } from "./gameSettings";
import { heroTradingWindowReducer } from "./heroTradingWindow";
import { heroWindowReducer } from "./heroWindow";
import { highScoresWindowReducer } from "./highScoresWindow";
import { locatorsReducer } from "./locators";
import { mageGuildWindowReducer } from "./mageGuildWindow";
import { spellBookWindowReducer } from "./spellBookWindow";
import { AppState } from "./state";
import { statusWindowReducer } from "./statusWindow";
import { townWindowReducer } from "./townWindow";
import { troopWindowReducer } from "./troopWindow";

export const rootReducer = combineReducers<AppState>({
  adventureScreen: adventureScreenReducer,
  editorWindow: editorWindowReducer,
  game: gameReducer,
  gameOptions: gameOptionsReducer,
  gameSettings: gameSettingsReducer,
  heroTradingWindow: heroTradingWindowReducer,
  heroWindow: heroWindowReducer,
  highScoresWindow: highScoresWindowReducer,
  locators: locatorsReducer,
  mageGuildWindow: mageGuildWindowReducer,
  spellBookWindow: spellBookWindowReducer,
  statusWindow: statusWindowReducer,
  townWindow: townWindowReducer,
  troopWindow: troopWindowReducer,
});
