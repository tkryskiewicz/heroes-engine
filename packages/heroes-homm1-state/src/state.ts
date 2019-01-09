import { AdventureOptionsState } from "./adventureOptions";
import { AdventureScreenState } from "./adventureScreen";
import { GameState } from "./game";
import { GameOptionsState } from "./gameOptions";
import { GameSettingsState } from "./gameSettings";
import { HeroWindowState } from "./heroWindow";
import { KingdomOverviewWindowState } from "./kingdomOverviewWindow";
import { LocatorsState } from "./locators";
import { MageGuildWindowState } from "./mageGuildWindow";
import { PuzzleWindowState } from "./puzzleWindow";
import { ScenarioInfoWindowState } from "./scenarioInfoWindow";
import { TownWindowState } from "./townWindow";

export interface AppState {
  game: GameState;
  adventureScreen: AdventureScreenState;
  gameSettings: GameSettingsState;
  locators: LocatorsState;
  heroWindow: HeroWindowState;
  kingdomOverviewWindow: KingdomOverviewWindowState;
  townWindow: TownWindowState;
  adventureOptions: AdventureOptionsState;
  gameOptions: GameOptionsState;
  puzzleWindow: PuzzleWindowState;
  scenarioInfoWindow: ScenarioInfoWindowState;
  mageGuildWindow: MageGuildWindowState;
}
