import { TroopSelection } from "heroes-core";

export interface HeroTradingWindowState {
  readonly visibleHeroDetails?: string;
  readonly selectedTroop?: TroopSelection;
}
