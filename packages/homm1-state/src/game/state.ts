import { Hero, Town } from "heroes-core";

export interface GameState {
  heroes: Hero[];
  towns: Town[];
}
