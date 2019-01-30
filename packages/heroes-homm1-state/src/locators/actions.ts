import { Locator } from "./state";

export enum LocatorsActionType {
  Select = "locators/select",
  Deselect = "locators/deselect",
}

export type LocatorsAction =
  SelectLocatorAction |
  DeselectAction;

export interface SelectLocatorAction {
  readonly type: LocatorsActionType.Select;
  readonly locator: Locator;
}

export const selectLocator = (locator: Locator): SelectLocatorAction => ({
  locator,
  type: LocatorsActionType.Select,
});

export interface DeselectAction {
  readonly type: LocatorsActionType.Deselect;
}

export const deselectLocator = (): DeselectAction => ({
  type: LocatorsActionType.Deselect,
});
