import { HeroMapObjectDetails } from "heroes-homm1";

export enum HeroMapObjectDetailsActionType {
  ChangeValue = "heroMapObjectDetails/changeValue",
}

export type HeroMapObjectDetailsAction =
  ChangeValueAction;

export interface ChangeValueAction {
  readonly type: HeroMapObjectDetailsActionType.ChangeValue;
  readonly value: HeroMapObjectDetails;
}

export const changeValue = (value: HeroMapObjectDetails): ChangeValueAction => ({
  type: HeroMapObjectDetailsActionType.ChangeValue,
  value,
});
