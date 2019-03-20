import { SpellType } from "heroes-homm1";

import { changePage, changeSpellType, changeVisibleSpellDetails, reset } from "./actions";
import { spellBookWindowReducer } from "./reducers";
import { SpellBookWindowState } from "./state";

describe("spellBookWindowReducer", () => {
  it("should return initial state", () => {
    const result = spellBookWindowReducer(undefined, {} as any);

    const expected: SpellBookWindowState = {
      page: 0,
      spellType: SpellType.Combat,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing spell type", () => {
    const state: SpellBookWindowState = {
      page: 0,
      spellType: SpellType.Combat,
    };

    const result = spellBookWindowReducer(state, changeSpellType(SpellType.Adventure));

    const expected: SpellBookWindowState = {
      page: 0,
      spellType: SpellType.Adventure,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing page", () => {
    const state: SpellBookWindowState = {
      page: 0,
      spellType: SpellType.Combat,
    };

    const result = spellBookWindowReducer(state, changePage(1));

    const expected: SpellBookWindowState = {
      page: 1,
      spellType: SpellType.Combat,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing visible spell details", () => {
    const state: SpellBookWindowState = {
      page: 0,
      spellType: SpellType.Combat,
    };

    const result = spellBookWindowReducer(state, changeVisibleSpellDetails("spell"));

    const expected: SpellBookWindowState = {
      page: 0,
      spellType: SpellType.Combat,
      visibleSpellDetails: "spell",
    };

    expect(result).toEqual(expected);
  });

  it("should handle reset", () => {
    const state: SpellBookWindowState = {
      page: 1,
      spellType: SpellType.Adventure,
      visibleSpellDetails: "spell",
    };

    const result = spellBookWindowReducer(state, reset());

    const expected: SpellBookWindowState = {
      page: 0,
      spellType: SpellType.Combat,
    };

    expect(result).toEqual(expected);
  });
});
