export enum MageGuildWindowActionType {
  ChangeVisibleSpellDetails = "mageGuildWindow/changeVisibleSpellDetails",
}

export type MageGuildWindowAction =
  ChangeVisibleSpellDetailsAction;

export interface ChangeVisibleSpellDetailsAction {
  readonly type: MageGuildWindowActionType.ChangeVisibleSpellDetails;
  readonly spell?: string;
}

export const changeVisibleSpellDetails = (spell?: string): ChangeVisibleSpellDetailsAction => ({
  spell,
  type: MageGuildWindowActionType.ChangeVisibleSpellDetails,
});
