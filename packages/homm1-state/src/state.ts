import { GameState } from "./game";
import { HeroWindowState } from "./heroWindow";
import { KingdomOverviewWindowState } from "./kingdomOverviewWindow";
import { LocatorsState } from "./locators";

export interface AppState {
  game: GameState;
  locators: LocatorsState;
  heroWindow: HeroWindowState;
  kingdomOverviewWindow: KingdomOverviewWindowState;
}
