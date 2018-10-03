export enum GameActionType {
  SwapHeroTroops = "game/swapHeroTroops",
  DismissHero = "game/dismissHero",
}

export type GameAction =
  SwapHeroTroopsAction |
  DismissHeroAction;

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

export interface DismissHeroAction {
  type: GameActionType.DismissHero;
  hero: string;
}

export const dismissHero = (hero: string): DismissHeroAction => ({
  hero,
  type: GameActionType.DismissHero,
});
