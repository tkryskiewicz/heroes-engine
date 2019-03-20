import { changeVisibleSpellDetails, ChangeVisibleSpellDetailsAction, MageGuildWindowActionType } from "./actions";

describe("mageGuildWindowActions", () => {
  it("should create an action to change visible spell details", () => {
    const result = changeVisibleSpellDetails("spell");

    const expected: ChangeVisibleSpellDetailsAction = {
      spell: "spell",
      type: MageGuildWindowActionType.ChangeVisibleSpellDetails,
    };

    expect(result).toEqual(expected);
  });
});
