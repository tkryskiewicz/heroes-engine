export enum LocatorsActionType {
  SelectActiveObject = "locators/selectActiveObject",
  DeselectActiveObject = "locators/deselectActiveObject",
  OpenLocatorDetails = "locators/openLocatorDetails",
  CloseLocatorDetails = "locators/closeLocatorDetails",
}

export type LocatorsAction =
  SelectActiveObjectAction |
  DeselectActiveObjectAction |
  OpenLocatorDetailsAction |
  CloseLocatorDetailsAction;

export interface SelectActiveObjectAction {
  readonly type: LocatorsActionType.SelectActiveObject;
  readonly objectId: string;
}

export const selectActiveObject = (objectId: string): SelectActiveObjectAction => ({
  objectId,
  type: LocatorsActionType.SelectActiveObject,
});

export interface DeselectActiveObjectAction {
  readonly type: LocatorsActionType.DeselectActiveObject;
}

export const deselectActiveObject = (): DeselectActiveObjectAction => ({
  type: LocatorsActionType.DeselectActiveObject,
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
