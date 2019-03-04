import { TroopSelection } from "heroes-core";

export interface TownWindowState {
  readonly selectedTroop?: TroopSelection;
  readonly visitingHeroDetailsVisible: boolean;
  readonly visibleStructureDetails?: string;
  readonly visibleOptionDetails?: string;
  readonly recruitTroopCount: number;
}
