import { Resources } from "heroes-core";

export enum GameActionType {
  SwapHeroTroops = "game/swapHeroTroops",
  DismissHeroTroop = "game/dismissHeroTroop",
  DismissHero = "game/dismissHero",
  SwapGarrisonTroops = "game/swapGarrisonTroops",
  BuildStructure = "game/buildStructure",
  RecruitTroop = "game/recruitTroop",
  BuyMageGuildSpellBook = "game/buyMageGuildSpellBook",
  EndTurn = "game/endTurn",
}

export type GameAction =
  SwapHeroTroopsAction |
  DismissHeroTroopAction |
  DismissHeroAction |
  SwapGarrisonTroopsAction |
  BuildStructureAction |
  RecruitTroopAction |
  BuyMageGuildSpellBookAction |
  EndTurnAction;

export interface SwapHeroTroopsAction {
  readonly type: GameActionType.SwapHeroTroops;
  readonly hero: string;
  readonly index: number;
  readonly withIndex: number;
}

export const swapHeroTroops = (hero: string, index: number, withIndex: number): SwapHeroTroopsAction => ({
  hero,
  index,
  type: GameActionType.SwapHeroTroops,
  withIndex,
});

export interface DismissHeroTroopAction {
  readonly type: GameActionType.DismissHeroTroop;
  readonly hero: string;
  readonly index: number;
}

export const dismissHeroTroop = (hero: string, index: number): DismissHeroTroopAction => ({
  hero,
  index,
  type: GameActionType.DismissHeroTroop,
});

export interface DismissHeroAction {
  readonly type: GameActionType.DismissHero;
  readonly hero: string;
}

export const dismissHero = (hero: string): DismissHeroAction => ({
  hero,
  type: GameActionType.DismissHero,
});

export interface SwapGarrisonTroopsAction {
  readonly type: GameActionType.SwapGarrisonTroops;
  readonly town: string;
  readonly index: number;
  readonly withIndex: number;
}

export const swapGarrisonTroops = (town: string, index: number, withIndex: number): SwapGarrisonTroopsAction => ({
  index,
  town,
  type: GameActionType.SwapGarrisonTroops,
  withIndex,
});

export interface BuildStructureAction {
  readonly type: GameActionType.BuildStructure;
  readonly town: string;
  readonly structure: string;
}

export const buildStructure = (town: string, structure: string): BuildStructureAction => ({
  structure,
  town,
  type: GameActionType.BuildStructure,
});

export interface RecruitTroopAction {
  readonly type: GameActionType.RecruitTroop;
  readonly town: string;
  readonly structure: string;
  readonly count: number;
}

export const recruitTroop = (town: string, structure: string, count: number): RecruitTroopAction => ({
  count,
  structure,
  town,
  type: GameActionType.RecruitTroop,
});

export interface BuyMageGuildSpellBookAction {
  readonly type: GameActionType.BuyMageGuildSpellBook;
  readonly hero: string;
  readonly town: string;
  readonly cost: Resources;
}

export const buyMageGuildSpellBook = (hero: string, town: string, cost: Resources): BuyMageGuildSpellBookAction => ({
  cost,
  hero,
  town,
  type: GameActionType.BuyMageGuildSpellBook,
});

export interface EndTurnAction {
  readonly type: GameActionType.EndTurn;
}

export const endTurn = (): EndTurnAction => ({
  type: GameActionType.EndTurn,
});
