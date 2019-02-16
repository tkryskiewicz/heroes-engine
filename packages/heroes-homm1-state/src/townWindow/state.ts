export interface TownWindowState {
  readonly townIndex?: number;
  readonly selectedGarrisonTroopIndex?: number;
  readonly visitingHeroDetailsVisible: boolean;
  readonly selectedHeroTroopIndex?: number;
  readonly visibleStructureDetails?: string;
  readonly visibleOptionDetails?: string;
  readonly recruitTroopCount: number;
}
