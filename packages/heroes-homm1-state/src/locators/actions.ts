import { Locator } from "./state";

export enum LocatorsActionType {
  Select = "locators/select",
  Deselect = "locators/deselect",
  OpenLocatorDetails = "locators/openLocatorDetails",
  CloseLocatorDetails = "locators/closeLocatorDetails",
}

export type LocatorsAction =
  SelectLocatorAction |
  DeselectAction |
  OpenLocatorDetailsAction |
  CloseLocatorDetailsAction;

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

export interface OpenLocatorDetailsAction {
  readonly type: LocatorsActionType.OpenLocatorDetails;
}

export const openLocatorDetails = (): OpenLocatorDetailsAction => ({
  type: LocatorsActionType.OpenLocatorDetails,
});

export interface CloseLocatorDetailsAction {
  readonly type: LocatorsActionType.CloseLocatorDetails;
}

export const closeLocatorDetails = (): CloseLocatorDetailsAction => ({
  type: LocatorsActionType.CloseLocatorDetails,
});
