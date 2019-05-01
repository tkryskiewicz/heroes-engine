import { StatusWindowOption } from "./state";

export enum StatusWindowActionType {
  ChangeSelectedOption = "statusWindow/changeSelectedOption",
  SetDefaultOption = "statusWindow/setDefaultOption",
}

export type StatusWindowAction =
  ChangeSelectedOptionAction |
  SetDefaultOptionAction;

export interface ChangeSelectedOptionAction {
  readonly type: StatusWindowActionType.ChangeSelectedOption;
  readonly value: StatusWindowOption;
}

export const changeSelectedOption = (value: StatusWindowOption): ChangeSelectedOptionAction => ({
  type: StatusWindowActionType.ChangeSelectedOption,
  value,
});

export interface SetDefaultOptionAction {
  readonly type: StatusWindowActionType.SetDefaultOption;
}

export const setDefaultOption = (): SetDefaultOptionAction => ({
  type: StatusWindowActionType.SetDefaultOption,
});
