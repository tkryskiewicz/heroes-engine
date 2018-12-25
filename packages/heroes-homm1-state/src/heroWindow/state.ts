export interface HeroWindowState {
  visible: boolean;
  visibleSkillDetails?: string;
  visibleMiscInfoDetails?: string;
  selectedTroopIndex?: number;
  visibleTroopDetails: boolean;
  dismissTroopPromptVisisble: boolean;
  visibleArtifactDescription?: number;
  dismissHeroPromptVisible: boolean;
  statusText: string;
}
