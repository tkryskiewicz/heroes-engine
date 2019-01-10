export interface TownWindowState {
  readonly visible: boolean;
  readonly selectedGarrisonTroopIndex?: number;
  readonly selectedHeroTroopIndex?: number;
  readonly visibleStructureDetails?: string;
  readonly recruitTroopCount: number;
}
