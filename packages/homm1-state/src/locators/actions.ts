import { Locator } from "./state";

export enum LocatorsActionType {
  Select = "locators/select",
}

export type LocatorsAction =
  SelectLocatorAction;

export interface SelectLocatorAction {
  type: LocatorsActionType.Select;
  locator: Locator;
}

export const selectLocator = (locator: Locator): SelectLocatorAction => ({
  locator,
  type: LocatorsActionType.Select,
});
