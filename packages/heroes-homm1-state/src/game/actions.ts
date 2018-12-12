export enum GameActionType {
  SwapHeroTroops = "game/swapHeroTroops",
  DismissHeroTroop = "game/dismissHeroTroop",
  DismissHero = "game/dismissHero",
  SwapGarrisonTroops = "game/swapGarrisonTroops",
  BuildStructure = "game/buildStructure",
  RecruitTroop = "game/recruitTroop",
}

export type GameAction =
  SwapHeroTroopsAction |
  DismissHeroTroopAction |
  DismissHeroAction |
  SwapGarrisonTroopsAction |
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

export interface DismissHeroTroopAction {
  type: GameActionType.DismissHeroTroop;
  hero: string;
  index: number;
}

export const dismissHeroTroop = (hero: string, index: number): DismissHeroTroopAction => ({
  hero,
  index,
  type: GameActionType.DismissHeroTroop,
});

export interface DismissHeroAction {
  type: GameActionType.DismissHero;
  hero: string;
}

export const dismissHero = (hero: string): DismissHeroAction => ({
  hero,
  type: GameActionType.DismissHero,
});

export interface SwapGarrisonTroopsAction {
  type: GameActionType.SwapGarrisonTroops;
  town: string;
  index: number;
  withIndex: number;
}

export const swapGarrisonTroops = (town: string, index: number, withIndex: number): SwapGarrisonTroopsAction => ({
  index,
  town,
  type: GameActionType.SwapGarrisonTroops,
  withIndex,
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
