import { GameState } from "./game";
import { LocatorsState } from "./locators";

export interface AppState {
  game: GameState;
  locators: LocatorsState;
}
