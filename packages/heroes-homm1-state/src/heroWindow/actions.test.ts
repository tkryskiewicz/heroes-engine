import {
  changeVisibleAdditionalStatDetails,
  ChangeVisibleAdditionalStatDetailsAction,
  changeVisibleArtifactDetails,
  ChangeVisibleArtifactDetailsAction,
  changeVisibleSkillDetails,
  ChangeVisibleSkillDetailsAction,
  closeDismissHeroPrompt,
  CloseDismissHeroPromptAction,
  closeTroopDetails,
  CloseTroopDetailsAction,
  deselectTroop,
  DeselectTroopAction,
  HeroWindowActionType,
  openDismissHeroPrompt,
  OpenDismissHeroPromptAction,
  openTroopDetails,
  OpenTroopDetailsAction,
  reset,
  ResetAction,
  selectTroop,
  SelectTroopAction,
} from "./actions";

describe("heroWindowActions", () => {
  it("should create an action to change visible skill details", () => {
    const result = changeVisibleSkillDetails("skill");

    const expected: ChangeVisibleSkillDetailsAction = {
      skill: "skill",
      type: HeroWindowActionType.ChangeVisibleSkillDetails,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to change visible additional stat details", () => {
    const result = changeVisibleAdditionalStatDetails("stat");

    const expected: ChangeVisibleAdditionalStatDetailsAction = {
      stat: "stat",
      type: HeroWindowActionType.ChangeVisibleAdditionalStatDetails,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to select a troop", () => {
    const result = selectTroop(0);

    const expected: SelectTroopAction = {
      index: 0,
      type: HeroWindowActionType.SelectTroop,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to deselect a troop", () => {
    const result = deselectTroop();

    const expected: DeselectTroopAction = {
      type: HeroWindowActionType.DeselectTroop,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to open troop details", () => {
    const result = openTroopDetails();

    const expected: OpenTroopDetailsAction = {
      type: HeroWindowActionType.OpenTroopDetails,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close troop details", () => {
    const result = closeTroopDetails();

    const expected: CloseTroopDetailsAction = {
      type: HeroWindowActionType.CloseTroopDetails,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to change visible artifact details", () => {
    const result = changeVisibleArtifactDetails(0);

    const expected: ChangeVisibleArtifactDetailsAction = {
      index: 0,
      type: HeroWindowActionType.ChangeVisibleArtifactDetails,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to open dismiss hero prompt", () => {
    const result = openDismissHeroPrompt();

    const expected: OpenDismissHeroPromptAction = {
      type: HeroWindowActionType.OpenDismissHeroPrompt,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close dismiss hero prompt", () => {
    const result = closeDismissHeroPrompt();

    const expected: CloseDismissHeroPromptAction = {
      type: HeroWindowActionType.CloseDismissHeroPrompt,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to reset", () => {
    const result = reset();

    const expected: ResetAction = {
      type: HeroWindowActionType.Reset,
    };

    expect(result).toEqual(expected);
  });
});
