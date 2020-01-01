import { ItemSelection, TroopSelection, TroopSelectionType } from "heroes-core";

import {
  closeArtifactDetails,
  CloseArtifactDetailsAction,
  CloseArtifactNotTradablePrompt,
  closeArtifactNotTradablePrompt,
  closeHeroDetails,
  CloseHeroDetailsAction,
  deselectArtifact,
  DeselectArtifactAction,
  deselectTroop,
  DeselectTroopAction,
  HeroTradingWindowActionType,
  openArtifactDetails,
  OpenArtifactDetailsAction,
  openArtifactNotTradablePrompt,
  OpenArtifactNotTradablePromptAction,
  openHeroDetails,
  OpenHeroDetailsAction,
  selectArtifact,
  SelectArtifactAction,
  selectTroop,
  SelectTroopAction,
} from "./actions";

describe("heroTradingWindowActions", () => {
  it("should create an action to open hero details", () => {
    const result = openHeroDetails("hero");

    const expected: OpenHeroDetailsAction = {
      hero: "hero",
      type: HeroTradingWindowActionType.OpenHeroDetails,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close hero details", () => {
    const result = closeHeroDetails();

    const expected: CloseHeroDetailsAction = {
      type: HeroTradingWindowActionType.CloseHeroDetails,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to select a troop", () => {
    const troop: TroopSelection = {
      id: "hero",
      index: 0,
      type: TroopSelectionType.Hero,
    };

    const result = selectTroop(troop);

    const expected: SelectTroopAction = {
      troop,
      type: HeroTradingWindowActionType.SelectTroop,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to deselect a troop", () => {
    const result = deselectTroop();

    const expected: DeselectTroopAction = {
      type: HeroTradingWindowActionType.DeselectTroop,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to select an artifact", () => {
    const artifact: ItemSelection = {
      index: 0,
      objectId: "hero",
    };

    const result = selectArtifact(artifact);

    const expected: SelectArtifactAction = {
      artifact,
      type: HeroTradingWindowActionType.SelectArtifact,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to deselect an artifact", () => {
    const result = deselectArtifact();

    const expected: DeselectArtifactAction = {
      type: HeroTradingWindowActionType.DeselectArtifact,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to open artifact details", () => {
    const result = openArtifactDetails();

    const expected: OpenArtifactDetailsAction = {
      type: HeroTradingWindowActionType.OpenArtifactDetails,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close artifact details", () => {
    const result = closeArtifactDetails();

    const expected: CloseArtifactDetailsAction = {
      type: HeroTradingWindowActionType.CloseArtifactDetails,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to open artifact not tradable prompt", () => {
    const result = openArtifactNotTradablePrompt();

    const expected: OpenArtifactNotTradablePromptAction = {
      type: HeroTradingWindowActionType.OpenArtifactNotTradablePrompt,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close artifact not tradable prompt", () => {
    const result = closeArtifactNotTradablePrompt();

    const expected: CloseArtifactNotTradablePrompt = {
      type: HeroTradingWindowActionType.CloseArtifactNotTradablePrompt,
    };

    expect(result).toEqual(expected);
  });
});
