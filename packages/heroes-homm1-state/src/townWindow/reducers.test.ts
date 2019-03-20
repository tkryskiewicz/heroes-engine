import { TroopSelection, TroopSelectionType } from "heroes-core";

import {
  changeRecruitTroopCount,
  closeOptionDetails,
  closeStructureDetails,
  closeTroopDetails,
  closeVisitingHeroDetails,
  deselectTroop,
  openOptionDetails,
  openStructureDetails,
  openTroopDetails,
  openVisitingHeroDetails,
  selectTroop,
} from "./actions";
import { townWindowReducer } from "./reducers";
import { TownWindowState } from "./state";

describe("townWindowReducer", () => {
  it("should return initial state", () => {
    const result = townWindowReducer(undefined, {} as any);

    const expected: TownWindowState = {
      recruitTroopCount: 0,
      troopDetailsVisible: false,
      visitingHeroDetailsVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle selecting troop", () => {
    const state: TownWindowState = {
      recruitTroopCount: 0,
      troopDetailsVisible: false,
      visitingHeroDetailsVisible: false,
    };

    const troop: TroopSelection = {
      id: "town",
      index: 0,
      type: TroopSelectionType.Garrison,
    };

    const result = townWindowReducer(state, selectTroop(troop));

    const expected: TownWindowState = {
      recruitTroopCount: 0,
      selectedTroop: troop,
      troopDetailsVisible: false,
      visitingHeroDetailsVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle deselecting troop", () => {
    const troop: TroopSelection = {
      id: "town",
      index: 0,
      type: TroopSelectionType.Garrison,
    };

    const state: TownWindowState = {
      recruitTroopCount: 0,
      selectedTroop: troop,
      troopDetailsVisible: false,
      visitingHeroDetailsVisible: false,
    };

    const result = townWindowReducer(state, deselectTroop());

    const expected: TownWindowState = {
      recruitTroopCount: 0,
      troopDetailsVisible: false,
      visitingHeroDetailsVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening troop details", () => {
    const state: TownWindowState = {
      recruitTroopCount: 0,
      troopDetailsVisible: false,
      visitingHeroDetailsVisible: false,
    };

    const result = townWindowReducer(state, openTroopDetails());

    const expected: TownWindowState = {
      recruitTroopCount: 0,
      troopDetailsVisible: true,
      visitingHeroDetailsVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing troop details", () => {
    const state: TownWindowState = {
      recruitTroopCount: 0,
      troopDetailsVisible: true,
      visitingHeroDetailsVisible: false,
    };

    const result = townWindowReducer(state, closeTroopDetails());

    const expected: TownWindowState = {
      recruitTroopCount: 0,
      troopDetailsVisible: false,
      visitingHeroDetailsVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening visiting hero details", () => {
    const state: TownWindowState = {
      recruitTroopCount: 0,
      troopDetailsVisible: false,
      visitingHeroDetailsVisible: false,
    };

    const result = townWindowReducer(state, openVisitingHeroDetails());

    const expected: TownWindowState = {
      recruitTroopCount: 0,
      troopDetailsVisible: false,
      visitingHeroDetailsVisible: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing visiting hero details", () => {
    const state: TownWindowState = {
      recruitTroopCount: 0,
      troopDetailsVisible: false,
      visitingHeroDetailsVisible: true,
    };

    const result = townWindowReducer(state, closeVisitingHeroDetails());

    const expected: TownWindowState = {
      recruitTroopCount: 0,
      troopDetailsVisible: false,
      visitingHeroDetailsVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening structure details", () => {
    const state: TownWindowState = {
      recruitTroopCount: 0,
      troopDetailsVisible: false,
      visitingHeroDetailsVisible: false,
    };

    const result = townWindowReducer(state, openStructureDetails("structure"));

    const expected: TownWindowState = {
      recruitTroopCount: 0,
      troopDetailsVisible: false,
      visibleStructureDetails: "structure",
      visitingHeroDetailsVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing structure details", () => {
    const state: TownWindowState = {
      recruitTroopCount: 0,
      troopDetailsVisible: false,
      visibleStructureDetails: "structure",
      visitingHeroDetailsVisible: false,
    };

    const result = townWindowReducer(state, closeStructureDetails());

    const expected: TownWindowState = {
      recruitTroopCount: 0,
      troopDetailsVisible: false,
      visitingHeroDetailsVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening option details", () => {
    const state: TownWindowState = {
      recruitTroopCount: 0,
      troopDetailsVisible: false,
      visitingHeroDetailsVisible: false,
    };

    const result = townWindowReducer(state, openOptionDetails("option"));

    const expected: TownWindowState = {
      recruitTroopCount: 0,
      troopDetailsVisible: false,
      visibleOptionDetails: "option",
      visitingHeroDetailsVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing option details", () => {
    const state: TownWindowState = {
      recruitTroopCount: 0,
      troopDetailsVisible: false,
      visibleOptionDetails: "option",
      visitingHeroDetailsVisible: false,
    };

    const result = townWindowReducer(state, closeOptionDetails());

    const expected: TownWindowState = {
      recruitTroopCount: 0,
      troopDetailsVisible: false,
      visitingHeroDetailsVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing recruited troop count", () => {
    const state: TownWindowState = {
      recruitTroopCount: 0,
      troopDetailsVisible: false,
      visitingHeroDetailsVisible: false,
    };

    const result = townWindowReducer(state, changeRecruitTroopCount(1));

    const expected: TownWindowState = {
      recruitTroopCount: 1,
      troopDetailsVisible: false,
      visitingHeroDetailsVisible: false,
    };

    expect(result).toEqual(expected);
  });
});
