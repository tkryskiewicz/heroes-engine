import {
  closeLocatorDetails,
  CloseLocatorDetailsAction,
  deselectLocator,
  DeselectLocatorAction,
  LocatorsActionType,
  openLocatorDetails,
  OpenLocatorDetailsAction,
  selectLocator,
  SelectLocatorAction,
} from "./actions";
import { Locator, LocatorType } from "./state";

describe("locatorsActions", () => {
  it("should create an action to select locator", () => {
    const locator: Locator = {
      index: 0,
      type: LocatorType.Hero,
    };

    const result = selectLocator(locator);

    const expected: SelectLocatorAction = {
      locator,
      type: LocatorsActionType.SelectLocator,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to deselect locator", () => {
    const result = deselectLocator();

    const expected: DeselectLocatorAction = {
      type: LocatorsActionType.DeselectLocator,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to open locator details", () => {
    const result = openLocatorDetails();

    const expected: OpenLocatorDetailsAction = {
      type: LocatorsActionType.OpenLocatorDetails,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close locator details", () => {
    const result = closeLocatorDetails();

    const expected: CloseLocatorDetailsAction = {
      type: LocatorsActionType.CloseLocatorDetails,
    };

    expect(result).toEqual(expected);
  });
});
