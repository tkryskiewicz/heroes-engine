export interface AdventureScreenState {
  readonly x: number;
  readonly y: number;
  readonly visibleMapObjectDetails?: string;
  readonly endTurnPromptVisible: boolean;
  readonly heroTradingWindowVisible: boolean;
  readonly hero?: string;
  readonly otherHero?: string;
}
