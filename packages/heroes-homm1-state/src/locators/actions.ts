import { Locator } from "./state";

export enum LocatorsActionType {
  SelectLocator = "locators/selectLocator",
  DeselectLocator = "locators/deselectLocator",
  OpenLocatorDetails = "locators/openLocatorDetails",
  CloseLocatorDetails = "locators/closeLocatorDetails",
}

export type LocatorsAction =
  SelectLocatorAction |
  DeselectLocatorAction |
  OpenLocatorDetailsAction |
  CloseLocatorDetailsAction;

export interface SelectLocatorAction {
  readonly type: LocatorsActionType.SelectLocator;
  readonly locator: Locator;
}

export const selectLocator = (locator: Locator): SelectLocatorAction => ({
  locator,
  type: LocatorsActionType.SelectLocator,
});

export interface DeselectLocatorAction {
  readonly type: LocatorsActionType.DeselectLocator;
}

export const deselectLocator = (): DeselectLocatorAction => ({
  type: LocatorsActionType.DeselectLocator,
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
