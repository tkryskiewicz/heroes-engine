import {
  closeLocatorDetails,
  CloseLocatorDetailsAction,
  deselectActiveObject,
  DeselectActiveObjectAction,
  LocatorsActionType,
  openLocatorDetails,
  OpenLocatorDetailsAction,
  selectActiveObject,
  SelectActiveObjectAction,
} from "./actions";

describe("locatorsActions", () => {
  it("should create an action to select active object", () => {
    const result = selectActiveObject("id");

    const expected: SelectActiveObjectAction = {
      objectId: "id",
      type: LocatorsActionType.SelectActiveObject,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to deselect active object", () => {
    const result = deselectActiveObject();

    const expected: DeselectActiveObjectAction = {
      type: LocatorsActionType.DeselectActiveObject,
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
