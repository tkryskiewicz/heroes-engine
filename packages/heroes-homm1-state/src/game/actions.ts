export enum GameActionType {
  SwapHeroTroops = "game/swapHeroTroops",
  DismissHero = "game/dismissHero",
  BuildStructure = "game/buildStructure",
  RecruitTroop = "game/recruitTroop",
}

export type GameAction =
  SwapHeroTroopsAction |
  DismissHeroAction |
  BuildStructureAction |
  RecruitTroopAction;

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

export interface BuildStructureAction {
  type: GameActionType.BuildStructure;
  town: string;
  structure: string;
}

export const buildStructure = (town: string, structure: string): BuildStructureAction => ({
  structure,
  town,
  type: GameActionType.BuildStructure,
});

export interface RecruitTroopAction {
  type: GameActionType.RecruitTroop;
  town: string;
  structure: string;
  count: number;
}

export const recruitTroop = (town: string, structure: string, count: number): RecruitTroopAction => ({
  count,
  structure,
  town,
  type: GameActionType.RecruitTroop,
});
