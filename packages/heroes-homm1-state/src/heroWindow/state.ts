export interface HeroWindowState {
  readonly visibleSkillDetails?: string;
  readonly visibleAdditionalStatDetails?: string;
  readonly selectedTroopIndex?: number;
  readonly troopDetailsVisible: boolean;
  readonly visibleArtifactDetails?: number;
  readonly dismissHeroPromptVisible: boolean;
}
