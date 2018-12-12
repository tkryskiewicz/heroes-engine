export interface HeroWindowState {
  visible: boolean;
  visibleSkillDetails?: string;
  visibleMiscInfoDetails?: string;
  selectedTroopIndex?: number;
  visibleTroopDetails: boolean;
  dismissHeroPromptVisible: boolean;
  statusText: string;
}
