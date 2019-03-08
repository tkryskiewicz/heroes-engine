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
import { SpellBookWindowState } from "./spellBookWindow";
import { TownWindowState } from "./townWindow";
import { TroopWindowState } from "./troopWindow";

export interface AppState {
  readonly game: GameState;
  readonly adventureScreen: AdventureScreenState;
  readonly gameSettings: GameSettingsState;
  readonly locators: LocatorsState;
  readonly heroWindow: HeroWindowState;
  readonly kingdomOverviewWindow: KingdomOverviewWindowState;
  readonly townWindow: TownWindowState;
  readonly adventureOptions: AdventureOptionsState;
  readonly gameOptions: GameOptionsState;
  readonly puzzleWindow: PuzzleWindowState;
  readonly scenarioInfoWindow: ScenarioInfoWindowState;
  readonly mageGuildWindow: MageGuildWindowState;
  readonly spellBookWindow: SpellBookWindowState;
  readonly troopWindow: TroopWindowState;
}
