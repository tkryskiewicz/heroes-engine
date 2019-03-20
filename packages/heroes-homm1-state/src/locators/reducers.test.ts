import { closeLocatorDetails, deselectLocator, openLocatorDetails, selectLocator } from "./actions";
import { locatorsReducer } from "./reducers";
import { Locator, LocatorsState, LocatorType } from "./state";

describe("locatorsReducer", () => {
  it("should return initial state", () => {
    const result = locatorsReducer(undefined, {} as any);

    const expected: LocatorsState = {
      locatorDetailsVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle selecting locator", () => {
    const state: LocatorsState = {
      locatorDetailsVisible: false,
    };

    const locator: Locator = {
      index: 0,
      type: LocatorType.Hero,
    };

    const result = locatorsReducer(state, selectLocator(locator));

    const expected: LocatorsState = {
      locatorDetailsVisible: false,
      selectedLocator: locator,
    };

    expect(result).toEqual(expected);
  });

  it("should handle deselecting locator", () => {
    const locator: Locator = {
      index: 0,
      type: LocatorType.Hero,
    };

    const state: LocatorsState = {
      locatorDetailsVisible: false,
      selectedLocator: locator,
    };

    const result = locatorsReducer(state, deselectLocator());

    const expected: LocatorsState = {
      locatorDetailsVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening locator details", () => {
    const state: LocatorsState = {
      locatorDetailsVisible: false,
    };

    const result = locatorsReducer(state, openLocatorDetails());

    const expected: LocatorsState = {
      locatorDetailsVisible: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing locator settings", () => {
    const state: LocatorsState = {
      locatorDetailsVisible: true,
    };

    const result = locatorsReducer(state, closeLocatorDetails());

    const expected: LocatorsState = {
      locatorDetailsVisible: false,
    };

    expect(result).toEqual(expected);
  });
});
