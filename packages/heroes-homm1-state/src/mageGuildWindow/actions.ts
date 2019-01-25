export enum MageGuildWindowActionType {
  ChangeVisibleSpellDetail = "mageGuildWindow/changeVisibleSpellDetail",
}

export type MageGuildWindowAction =
  ChangeVisibleSpellDetailAction;

export interface ChangeVisibleSpellDetailAction {
  readonly type: MageGuildWindowActionType.ChangeVisibleSpellDetail;
  readonly spell?: string;
}

export const changeVisibleSpellDetail = (spell?: string): ChangeVisibleSpellDetailAction => ({
  spell,
  type: MageGuildWindowActionType.ChangeVisibleSpellDetail,
});
