import { SpellType } from "heroes-homm1";

export enum SpellBookWindowActionType {
  ChangeSpellType = "spellBookWindow/changeSpellType",
  ChangePage = "spellBookWindow/changePage",
  ChangeVisibleSpellDetails = "spellBookWindow/changeVisibleSpellDetails",
}

export type SpellBookWindowAction =
  ChangePageAction |
  ChangeSpellTypeAction |
  ChangeVisibleSpellDetailsAction;

export interface ChangeSpellTypeAction {
  readonly type: SpellBookWindowActionType.ChangeSpellType;
  readonly value: SpellType;
}

export const changeSpellType = (value: SpellType): ChangeSpellTypeAction => ({
  type: SpellBookWindowActionType.ChangeSpellType,
  value,
});

export interface ChangePageAction {
  readonly type: SpellBookWindowActionType.ChangePage;
  readonly value: number;
}

export const changePage = (value: number): ChangePageAction => ({
  type: SpellBookWindowActionType.ChangePage,
  value,
});

export interface ChangeVisibleSpellDetailsAction {
  readonly type: SpellBookWindowActionType.ChangeVisibleSpellDetails;
  readonly spell?: string;
}

export const changeVisibleSpellDetails = (spell?: string): ChangeVisibleSpellDetailsAction => ({
  spell,
  type: SpellBookWindowActionType.ChangeVisibleSpellDetails,
});
