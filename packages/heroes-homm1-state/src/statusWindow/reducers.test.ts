import { changeSelectedOption, setDefaultOption } from "./actions";
import { statusWindowReducer } from "./reducers";
import { StatusWindowOption, StatusWindowState } from "./state";

describe("statusWindowReducer", () => {
  it("should return initial state", () => {
    const result = statusWindowReducer(undefined, {} as any);

    const expected: StatusWindowState = {
      selectedOption: StatusWindowOption.ResourceSummary,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing selected option", () => {
    const state: StatusWindowState = {
      selectedOption: StatusWindowOption.ResourceSummary,
    };

    const result = statusWindowReducer(state, changeSelectedOption(StatusWindowOption.DateInformation));

    const expected: StatusWindowState = {
      selectedOption: StatusWindowOption.DateInformation,
    };

    expect(result).toEqual(expected);
  });

  it("should handle setting default option", () => {
    const state: StatusWindowState = {
      selectedOption: StatusWindowOption.DateInformation,
    };

    const result = statusWindowReducer(state, setDefaultOption());

    const expected: StatusWindowState = {
      selectedOption: StatusWindowOption.ResourceSummary,
    };

    expect(result).toEqual(expected);
  });
});
