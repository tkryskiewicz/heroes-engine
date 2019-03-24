export interface AdventureScreenState {
  readonly visibleMapObjectDetails?: string;
  readonly endTurnPromptVisible: boolean;
  readonly heroTradingWindowVisible: boolean;
  readonly hero?: string;
  readonly otherHero?: string;
}
