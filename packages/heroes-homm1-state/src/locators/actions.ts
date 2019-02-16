import { Locator } from "./state";

export enum LocatorsActionType {
  Select = "locators/select",
  Deselect = "locators/deselect",
  OpenHeroDetails = "locators/openHeroDetails",
  CloseHeroDetails = "locators/closeHeroDetails",
}

export type LocatorsAction =
  SelectLocatorAction |
  DeselectAction |
  OpenHeroDetailsAction |
  CloseHeroDetailsAction;

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

export interface OpenHeroDetailsAction {
  readonly type: LocatorsActionType.OpenHeroDetails;
}

export const openHeroDetails = (): OpenHeroDetailsAction => ({
  type: LocatorsActionType.OpenHeroDetails,
});

export interface CloseHeroDetailsAction {
  readonly type: LocatorsActionType.CloseHeroDetails;
}

export const closeHeroDetails = (): CloseHeroDetailsAction => ({
  type: LocatorsActionType.CloseHeroDetails,
});
