export interface HeroWindowState {
  visible: boolean;
  visibleSkillDetails?: string;
  visibleMiscInfoDetails?: string;
  selectedTroopIndex?: number;
  visibleTroopDetails: boolean;
  dismissTroopPromptVisisble: boolean;
  dismissHeroPromptVisible: boolean;
  statusText: string;
}
