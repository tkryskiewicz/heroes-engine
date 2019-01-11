export interface HeroWindowState {
  readonly visible: boolean;
  readonly visibleSkillDetails?: string;
  readonly visibleMiscInfoDetails?: string;
  readonly selectedTroopIndex?: number;
  readonly visibleTroopDetails: boolean;
  readonly dismissTroopPromptVisisble: boolean;
  readonly visibleArtifactDetails?: number;
  readonly dismissHeroPromptVisible: boolean;
}
