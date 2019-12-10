export interface AdventureWindowState {
  readonly x: number;
  readonly y: number;
  readonly visibleObjectDetails?: string;
  readonly endTurnPromptVisible: boolean;
  readonly heroTradingWindowVisible: boolean;
  readonly hero?: string;
  readonly otherHero?: string;
}
