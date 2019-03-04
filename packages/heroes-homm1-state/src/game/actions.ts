import { Resources, TroopSelection } from "heroes-core";

export enum GameActionType {
  SwapTroops = "game/swapTroops",
  DismissHeroTroop = "game/dismissHeroTroop",
  DismissHero = "game/dismissHero",
  BuildStructure = "game/buildStructure",
  RecruitTroop = "game/recruitTroop",
  BuyMageGuildSpellBook = "game/buyMageGuildSpellBook",
  EndTurn = "game/endTurn",
}

export type GameAction =
  SwapTroopsAction |
  DismissHeroTroopAction |
  DismissHeroAction |
  BuildStructureAction |
  RecruitTroopAction |
  BuyMageGuildSpellBookAction |
  EndTurnAction;

export interface SwapTroopsAction {
  readonly type: GameActionType.SwapTroops;
  readonly troop: TroopSelection;
  readonly withTroop: TroopSelection;
}

export const swapTroops = (troop: TroopSelection, withTroop: TroopSelection): SwapTroopsAction => ({
  troop,
  type: GameActionType.SwapTroops,
  withTroop,
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
