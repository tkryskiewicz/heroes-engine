import {
  changeSelectedOption,
  ChangeSelectedOptionAction,
  setDefaultOption,
  SetDefaultOptionAction,
  StatusWindowActionType,
} from "./actions";
import { StatusWindowOption } from "./state";

describe("statusWindowActions", () => {
  it("should create an action to change selected option", () => {
    const result = changeSelectedOption(StatusWindowOption.ResourceSummary);

    const expected: ChangeSelectedOptionAction = {
      type: StatusWindowActionType.ChangeSelectedOption,
      value: StatusWindowOption.ResourceSummary,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to set default option", () => {
    const result = setDefaultOption();

    const expected: SetDefaultOptionAction = {
      type: StatusWindowActionType.SetDefaultOption,
    };

    expect(result).toEqual(expected);
  });
});
