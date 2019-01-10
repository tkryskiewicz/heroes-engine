import { SpellType } from "heroes-homm1";

export enum SpellBookWindowActionType {
  ChangeSpellType = "spellBookWindow/changeSpellType",
  ChangePage = "spellBookWindow/changePage",
}

export type SpellBookWindowAction =
  ChangePageAction |
  ChangeSpellTypeAction;

export interface ChangeSpellTypeAction {
  type: SpellBookWindowActionType.ChangeSpellType;
  value: SpellType;
}

export const changeSpellType = (value: SpellType): ChangeSpellTypeAction => ({
  type: SpellBookWindowActionType.ChangeSpellType,
  value,
});

export interface ChangePageAction {
  type: SpellBookWindowActionType.ChangePage;
  value: number;
}

export const changePage = (value: number): ChangePageAction => ({
  type: SpellBookWindowActionType.ChangePage,
  value,
});
