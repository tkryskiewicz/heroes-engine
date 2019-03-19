import { ArtifactSelection, TroopSelection } from "heroes-core";

export interface HeroTradingWindowState {
  readonly visibleHeroDetails?: string;
  readonly selectedTroop?: TroopSelection;
  readonly selectedArtifact?: ArtifactSelection;
  readonly artifactDetailsVisible: boolean;
  readonly artifactNotTradablePromptVisible: boolean;
}
