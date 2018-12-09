export interface HeroWindowState {
  visible: boolean;
  visibleSkillDetails?: string;
  visibleMiscInfoDetails?: string;
  selectedTroopIndex?: number;
  dismissHeroPromptVisible: boolean;
  statusText: string;
}
