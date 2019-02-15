export interface HeroWindowState {
  readonly heroIndex?: number;
  readonly visibleSkillDetails?: string;
  readonly visibleAdditionalStatDetails?: string;
  readonly selectedTroopIndex?: number;
  readonly visibleTroopDetails: boolean;
  readonly dismissTroopPromptVisisble: boolean;
  readonly visibleArtifactDetails?: number;
  readonly dismissHeroPromptVisible: boolean;
}
