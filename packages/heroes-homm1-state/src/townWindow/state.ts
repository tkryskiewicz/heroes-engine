export interface TownWindowState {
  readonly visible: boolean;
  readonly selectedGarrisonTroopIndex?: number;
  readonly selectedHeroTroopIndex?: number;
  readonly visibleStructureDetails?: string;
  readonly visibleOptionDetails?: string;
  readonly recruitTroopCount: number;
}
