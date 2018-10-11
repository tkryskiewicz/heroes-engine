import { AdventureOptionsState } from "./adventureOptions";
import { GameState } from "./game";
import { GameOptionsState } from "./gameOptions";
import { GameSettingsState } from "./gameSettings";
import { HeroWindowState } from "./heroWindow";
import { KingdomOverviewWindowState } from "./kingdomOverviewWindow";
import { LocatorsState } from "./locators";
import { PuzzleWindowState } from "./puzzleWindow";
import { TownWindowState } from "./townWindow";

export interface AppState {
  game: GameState;
  gameSettings: GameSettingsState;
  locators: LocatorsState;
  heroWindow: HeroWindowState;
  kingdomOverviewWindow: KingdomOverviewWindowState;
  townWindow: TownWindowState;
  adventureOptions: AdventureOptionsState;
  gameOptions: GameOptionsState;
  puzzleWindow: PuzzleWindowState;
}
