export enum LocatorsActionType {
  Select = "locators/select",
}

export type LocatorsAction =
  SelectLocatorAction;

export interface SelectLocatorAction {
  type: LocatorsActionType.Select;
  index: number;
}

export const selectLocator = (index: number): SelectLocatorAction => ({
  index,
  type: LocatorsActionType.Select,
});
