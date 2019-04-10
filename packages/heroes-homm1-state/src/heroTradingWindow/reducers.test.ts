import { TroopSelection, TroopSelectionType } from "heroes-core";
import { ArtifactSelection } from "heroes-homm1";

import {
  closeArtifactDetails,
  closeArtifactNotTradablePrompt,
  closeHeroDetails,
  deselectArtifact,
  deselectTroop,
  openArtifactDetails,
  openArtifactNotTradablePrompt,
  openHeroDetails,
  selectArtifact,
  selectTroop,
} from "./actions";
import { heroTradingWindowReducer } from "./reducers";
import { HeroTradingWindowState } from "./state";

describe("heroTradingWindowReducer", () => {
  it("should return initial state", () => {
    const result = heroTradingWindowReducer(undefined, {} as any);

    const expected: HeroTradingWindowState = {
      artifactDetailsVisible: false,
      artifactNotTradablePromptVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening hero details", () => {
    const state: HeroTradingWindowState = {
      artifactDetailsVisible: false,
      artifactNotTradablePromptVisible: false,
    };

    const result = heroTradingWindowReducer(state, openHeroDetails("hero"));

    const expected: HeroTradingWindowState = {
      artifactDetailsVisible: false,
      artifactNotTradablePromptVisible: false,
      visibleHeroDetails: "hero",
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing hero details", () => {
    const state: HeroTradingWindowState = {
      artifactDetailsVisible: false,
      artifactNotTradablePromptVisible: false,
      visibleHeroDetails: "hero",
    };

    const result = heroTradingWindowReducer(state, closeHeroDetails());

    const expected: HeroTradingWindowState = {
      artifactDetailsVisible: false,
      artifactNotTradablePromptVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle selecting troop", () => {
    const state: HeroTradingWindowState = {
      artifactDetailsVisible: false,
      artifactNotTradablePromptVisible: false,
    };

    const troop: TroopSelection = {
      id: "hero",
      index: 0,
      type: TroopSelectionType.Hero,
    };

    const result = heroTradingWindowReducer(state, selectTroop(troop));

    const expected: HeroTradingWindowState = {
      artifactDetailsVisible: false,
      artifactNotTradablePromptVisible: false,
      selectedTroop: troop,
    };

    expect(result).toEqual(expected);
  });

  it("should handle deselecting troop", () => {
    const troop: TroopSelection = {
      id: "hero",
      index: 0,
      type: TroopSelectionType.Hero,
    };

    const state: HeroTradingWindowState = {
      artifactDetailsVisible: false,
      artifactNotTradablePromptVisible: false,
      selectedTroop: troop,
    };

    const result = heroTradingWindowReducer(state, deselectTroop());

    const expected: HeroTradingWindowState = {
      artifactDetailsVisible: false,
      artifactNotTradablePromptVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle selecting artifact", () => {
    const artifact: ArtifactSelection = {
      hero: "hero",
      index: 0,
    };

    const state: HeroTradingWindowState = {
      artifactDetailsVisible: false,
      artifactNotTradablePromptVisible: false,
    };

    const result = heroTradingWindowReducer(state, selectArtifact(artifact));

    const expected: HeroTradingWindowState = {
      artifactDetailsVisible: false,
      artifactNotTradablePromptVisible: false,
      selectedArtifact: artifact,
    };

    expect(result).toEqual(expected);
  });

  it("should handle deselecting artifact", () => {
    const artifact: ArtifactSelection = {
      hero: "hero",
      index: 0,
    };

    const state: HeroTradingWindowState = {
      artifactDetailsVisible: false,
      artifactNotTradablePromptVisible: false,
      selectedArtifact: artifact,
    };

    const result = heroTradingWindowReducer(state, deselectArtifact());

    const expected: HeroTradingWindowState = {
      artifactDetailsVisible: false,
      artifactNotTradablePromptVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening artifact details", () => {
    const state: HeroTradingWindowState = {
      artifactDetailsVisible: false,
      artifactNotTradablePromptVisible: false,
    };

    const result = heroTradingWindowReducer(state, openArtifactDetails());

    const expected: HeroTradingWindowState = {
      artifactDetailsVisible: true,
      artifactNotTradablePromptVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing artifact details", () => {
    const state: HeroTradingWindowState = {
      artifactDetailsVisible: true,
      artifactNotTradablePromptVisible: false,
    };

    const result = heroTradingWindowReducer(state, closeArtifactDetails());

    const expected: HeroTradingWindowState = {
      artifactDetailsVisible: false,
      artifactNotTradablePromptVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening artifact not tradable prompt", () => {
    const state: HeroTradingWindowState = {
      artifactDetailsVisible: false,
      artifactNotTradablePromptVisible: false,
    };

    const result = heroTradingWindowReducer(state, openArtifactNotTradablePrompt());

    const expected: HeroTradingWindowState = {
      artifactDetailsVisible: false,
      artifactNotTradablePromptVisible: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing artifact not tradable prompt", () => {
    const state: HeroTradingWindowState = {
      artifactDetailsVisible: false,
      artifactNotTradablePromptVisible: true,
    };

    const result = heroTradingWindowReducer(state, closeArtifactNotTradablePrompt());

    const expected: HeroTradingWindowState = {
      artifactDetailsVisible: false,
      artifactNotTradablePromptVisible: false,
    };

    expect(result).toEqual(expected);
  });
});
