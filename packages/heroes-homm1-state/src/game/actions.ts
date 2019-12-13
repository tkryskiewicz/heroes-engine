import { Direction, Resources, TroopSelection } from "heroes-core";
import { ArtifactSelection } from "heroes-homm1";

export enum GameActionType {
  SwapTroops = "game/swapTroops",
  DismissTroop = "game/dismissTroop",
  TradeArtifacts = "game/tradeArtifacts",
  DismissHero = "game/dismissHero",
  BuildStructure = "game/buildStructure",
  RecruitTroop = "game/recruitTroop",
  BuyMageGuildSpellBook = "game/buyMageGuildSpellBook",
  StartTurn = "game/startTurn",
  EndTurn = "game/endTurn",
  VisitMapObject = "game/visitMapObject",
  MoveObject = "game/moveObject",
}

export type GameAction =
  SwapTroopsAction |
  DismissTroopAction |
  TradeArtifactsAction |
  DismissHeroAction |
  BuildStructureAction |
  RecruitTroopAction |
  BuyMageGuildSpellBookAction |
  StartTurnAction |
  EndTurnAction |
  VisitMapObjectAction |
  MoveObjectAction;

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

export interface DismissTroopAction {
  readonly type: GameActionType.DismissTroop;
  readonly troop: TroopSelection;
}

export const dismissTroop = (troop: TroopSelection): DismissTroopAction => ({
  troop,
  type: GameActionType.DismissTroop,
});

export interface TradeArtifactsAction {
  readonly type: GameActionType.TradeArtifacts;
  readonly artifact: ArtifactSelection;
  readonly withArtifact: ArtifactSelection;
}

export const tradeArtifacts = (artifact: ArtifactSelection, withArtifact: ArtifactSelection): TradeArtifactsAction => ({
  artifact,
  type: GameActionType.TradeArtifacts,
  withArtifact,
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

export interface StartTurnAction {
  readonly type: GameActionType.StartTurn;
}

export const startTurn = (): StartTurnAction => ({
  type: GameActionType.StartTurn,
});

export interface EndTurnAction {
  readonly type: GameActionType.EndTurn;
}

export const endTurn = (): EndTurnAction => ({
  type: GameActionType.EndTurn,
});

export interface VisitMapObjectAction {
  readonly type: GameActionType.VisitMapObject;
  readonly id: string;
  readonly hero: string;
}

export const visitMapObject = (id: string, hero: string): VisitMapObjectAction => ({
  hero,
  id,
  type: GameActionType.VisitMapObject,
});

export interface MoveObjectAction {
  readonly type: GameActionType.MoveObject;
  readonly id: string;
  readonly direction: Direction;
}

export const moveObject = (id: string, direction: Direction): MoveObjectAction => ({
  direction,
  id,
  type: GameActionType.MoveObject,
});
