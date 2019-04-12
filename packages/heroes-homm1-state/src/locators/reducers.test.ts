import { closeLocatorDetails, deselectActiveObject, openLocatorDetails, selectActiveObject } from "./actions";
import { locatorsReducer } from "./reducers";
import { LocatorsState } from "./state";

describe("locatorsReducer", () => {
  it("should return initial state", () => {
    const result = locatorsReducer(undefined, {} as any);

    const expected: LocatorsState = {
      locatorDetailsVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle selecting active object", () => {
    const state: LocatorsState = {
      locatorDetailsVisible: false,
    };

    const result = locatorsReducer(state, selectActiveObject("id"));

    const expected: LocatorsState = {
      activeObjectId: "id",
      locatorDetailsVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle deselecting active object", () => {
    const state: LocatorsState = {
      activeObjectId: "id",
      locatorDetailsVisible: false,
    };

    const result = locatorsReducer(state, deselectActiveObject());

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
