import { AdventureOptionsState } from "./adventureOptions";
import { AdventureScreenState } from "./adventureScreen";
import { EditorWindowState } from "./editorWindow";
import { GameState } from "./game";
import { GameOptionsState } from "./gameOptions";
import { GameSettingsState } from "./gameSettings";
import { HeroTradingWindowState } from "./heroTradingWindow";
import { HeroWindowState } from "./heroWindow";
import { HighScoresWindowState } from "./highScoresWindow";
import { KingdomOverviewWindowState } from "./kingdomOverviewWindow";
import { LocatorsState } from "./locators";
import { MageGuildWindowState } from "./mageGuildWindow";
import { PuzzleWindowState } from "./puzzleWindow";
import { SpellBookWindowState } from "./spellBookWindow";
import { StatusWindowState } from "./statusWindow";
import { TownWindowState } from "./townWindow";
import { TroopWindowState } from "./troopWindow";

export interface AppState {
  readonly highScoresWindow: HighScoresWindowState;
  readonly game: GameState;
  readonly adventureScreen: AdventureScreenState;
  readonly gameSettings: GameSettingsState;
  readonly locators: LocatorsState;
  readonly heroTradingWindow: HeroTradingWindowState;
  readonly heroWindow: HeroWindowState;
  readonly kingdomOverviewWindow: KingdomOverviewWindowState;
  readonly townWindow: TownWindowState;
  readonly adventureOptions: AdventureOptionsState;
  readonly gameOptions: GameOptionsState;
  readonly puzzleWindow: PuzzleWindowState;
  readonly mageGuildWindow: MageGuildWindowState;
  readonly spellBookWindow: SpellBookWindowState;
  readonly statusWindow: StatusWindowState;
  readonly troopWindow: TroopWindowState;
  readonly editorWindow: EditorWindowState;
}
