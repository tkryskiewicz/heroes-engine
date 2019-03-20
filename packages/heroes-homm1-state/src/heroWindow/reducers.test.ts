import {
  changeVisibleAdditionalStatDetails,
  changeVisibleArtifactDetails,
  changeVisibleSkillDetails,
  closeDismissHeroPrompt,
  closeTroopDetails,
  deselectTroop,
  openDismissHeroPrompt,
  openTroopDetails,
  reset,
  selectTroop,
} from "./actions";
import { heroWindowReducer } from "./reducers";
import { HeroWindowState } from "./state";

describe("heroWindowReducer", () => {
  it("should return initial state", () => {
    const result = heroWindowReducer(undefined, {} as any);

    const expected: HeroWindowState = {
      dismissHeroPromptVisible: false,
      troopDetailsVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing visible skill details", () => {
    const state: HeroWindowState = {
      dismissHeroPromptVisible: false,
      troopDetailsVisible: false,
    };

    const result = heroWindowReducer(state, changeVisibleSkillDetails("skill"));

    const expected: HeroWindowState = {
      dismissHeroPromptVisible: false,
      troopDetailsVisible: false,
      visibleSkillDetails: "skill",
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing visible additional stat details", () => {
    const state: HeroWindowState = {
      dismissHeroPromptVisible: false,
      troopDetailsVisible: false,
    };

    const result = heroWindowReducer(state, changeVisibleAdditionalStatDetails("stat"));

    const expected: HeroWindowState = {
      dismissHeroPromptVisible: false,
      troopDetailsVisible: false,
      visibleAdditionalStatDetails: "stat",
    };

    expect(result).toEqual(expected);
  });

  it("should handle selecting troop", () => {
    const state: HeroWindowState = {
      dismissHeroPromptVisible: false,
      troopDetailsVisible: false,
    };

    const result = heroWindowReducer(state, selectTroop(0));

    const expected: HeroWindowState = {
      dismissHeroPromptVisible: false,
      selectedTroopIndex: 0,
      troopDetailsVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle deselecting troop", () => {
    const state: HeroWindowState = {
      dismissHeroPromptVisible: false,
      selectedTroopIndex: 0,
      troopDetailsVisible: false,
    };

    const result = heroWindowReducer(state, deselectTroop());

    const expected: HeroWindowState = {
      dismissHeroPromptVisible: false,
      troopDetailsVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening troop details", () => {
    const state: HeroWindowState = {
      dismissHeroPromptVisible: false,
      troopDetailsVisible: false,
    };

    const result = heroWindowReducer(state, openTroopDetails());

    const expected: HeroWindowState = {
      dismissHeroPromptVisible: false,
      troopDetailsVisible: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing troop details", () => {
    const state: HeroWindowState = {
      dismissHeroPromptVisible: false,
      troopDetailsVisible: true,
    };

    const result = heroWindowReducer(state, closeTroopDetails());

    const expected: HeroWindowState = {
      dismissHeroPromptVisible: false,
      troopDetailsVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing visible artifact details", () => {
    const state: HeroWindowState = {
      dismissHeroPromptVisible: false,
      troopDetailsVisible: false,
    };

    const result = heroWindowReducer(state, changeVisibleArtifactDetails(0));

    const expected: HeroWindowState = {
      dismissHeroPromptVisible: false,
      troopDetailsVisible: false,
      visibleArtifactDetails: 0,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening dismiss hero prompt", () => {
    const state: HeroWindowState = {
      dismissHeroPromptVisible: false,
      troopDetailsVisible: false,
    };

    const result = heroWindowReducer(state, openDismissHeroPrompt());

    const expected: HeroWindowState = {
      dismissHeroPromptVisible: true,
      troopDetailsVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing dismiss hero prompt", () => {
    const state: HeroWindowState = {
      dismissHeroPromptVisible: true,
      troopDetailsVisible: false,
    };

    const result = heroWindowReducer(state, closeDismissHeroPrompt());

    const expected: HeroWindowState = {
      dismissHeroPromptVisible: false,
      troopDetailsVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle reset", () => {
    const state: HeroWindowState = {
      dismissHeroPromptVisible: true,
      selectedTroopIndex: 0,
      troopDetailsVisible: true,
      visibleAdditionalStatDetails: "stat",
      visibleArtifactDetails: 0,
      visibleSkillDetails: "skill",
    };

    const result = heroWindowReducer(state, reset());

    const expected: HeroWindowState = {
      dismissHeroPromptVisible: false,
      troopDetailsVisible: false,
    };

    expect(result).toEqual(expected);
  });
});
