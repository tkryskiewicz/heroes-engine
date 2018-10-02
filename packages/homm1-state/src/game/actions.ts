export enum GameActionType {
  SwapHeroTroops = "game/swapHeroTroops",
}

export type GameAction =
  SwapHeroTroopsAction;

export interface SwapHeroTroopsAction {
  type: GameActionType.SwapHeroTroops;
  hero: string;
  index: number;
  withIndex: number;
}

export const swapHeroTroops = (hero: string, index: number, withIndex: number): SwapHeroTroopsAction => ({
  hero,
  index,
  type: GameActionType.SwapHeroTroops,
  withIndex,
});
