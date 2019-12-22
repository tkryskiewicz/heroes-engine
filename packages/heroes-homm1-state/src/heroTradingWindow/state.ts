import { ItemSelection, TroopSelection } from "heroes-core";

export interface HeroTradingWindowState {
  readonly visibleHeroDetails?: string;
  readonly selectedTroop?: TroopSelection;
  readonly selectedArtifact?: ItemSelection;
  readonly artifactDetailsVisible: boolean;
  readonly artifactNotTradablePromptVisible: boolean;
}
