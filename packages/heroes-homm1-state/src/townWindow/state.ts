export interface TownWindowState {
  readonly townIndex?: number;
  readonly selectedGarrisonTroopIndex?: number;
  readonly selectedHeroTroopIndex?: number;
  readonly visibleStructureDetails?: string;
  readonly visibleOptionDetails?: string;
  readonly recruitTroopCount: number;
}
