import { TroopSelection } from "heroes-core";
import { ArtifactSelection } from "heroes-homm1";

export interface HeroTradingWindowState {
  readonly visibleHeroDetails?: string;
  readonly selectedTroop?: TroopSelection;
  readonly selectedArtifact?: ArtifactSelection;
  readonly artifactDetailsVisible: boolean;
  readonly artifactNotTradablePromptVisible: boolean;
}
