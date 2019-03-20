import { SpellType } from "heroes-homm1";

import {
  changePage,
  ChangePageAction,
  changeSpellType,
  ChangeSpellTypeAction,
  changeVisibleSpellDetails,
  ChangeVisibleSpellDetailsAction,
  reset,
  ResetAction,
  SpellBookWindowActionType,
} from "./actions";

describe("spellBookWindowActions", () => {
  it("should create an action to change spell type", () => {
    const result = changeSpellType(SpellType.Combat);

    const expected: ChangeSpellTypeAction = {
      type: SpellBookWindowActionType.ChangeSpellType,
      value: SpellType.Combat,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to change page", () => {
    const result = changePage(1);

    const expected: ChangePageAction = {
      type: SpellBookWindowActionType.ChangePage,
      value: 1,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to change visible spell details", () => {
    const result = changeVisibleSpellDetails("spell");

    const expected: ChangeVisibleSpellDetailsAction = {
      spell: "spell",
      type: SpellBookWindowActionType.ChangeVisibleSpellDetails,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to reset", () => {
    const result = reset();

    const expected: ResetAction = {
      type: SpellBookWindowActionType.Reset,
    };

    expect(result).toEqual(expected);
  });
});
