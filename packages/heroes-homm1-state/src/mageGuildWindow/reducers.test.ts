import { changeVisibleSpellDetails } from "./actions";
import { mageGuildWindowReducer } from "./reducers";
import { MageGuildWindowState } from "./state";

describe("mageGuildWindowReducer", () => {
  it("should return initial state", () => {
    const result = mageGuildWindowReducer(undefined, {} as any);

    const expected: MageGuildWindowState = {};

    expect(result).toEqual(expected);
  });

  it("should handle changing visible spell details", () => {
    const state: MageGuildWindowState = {
      visibleSpellDetail: "spell",
    };

    const result = mageGuildWindowReducer(state, changeVisibleSpellDetails("spell"));

    const expected: MageGuildWindowState = {
      visibleSpellDetail: "spell",
    };

    expect(result).toEqual(expected);
  });
});
