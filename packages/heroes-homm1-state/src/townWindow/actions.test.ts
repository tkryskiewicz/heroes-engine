import { TroopSelection, TroopSelectionType } from "heroes-core";

import {
  changeRecruitTroopCount,
  ChangeRecruitTroopCountAction,
  closeOptionDetails,
  CloseOptionDetailsAction,
  closeStructureDetails,
  CloseStructureDetailsAction,
  closeTroopDetails,
  CloseTroopDetailsAction,
  closeVisitingHeroDetails,
  CloseVisitingHeroDetailsAction,
  deselectTroop,
  DeselectTroopAction,
  openOptionDetails,
  OpenOptionDetailsAction,
  openStructureDetails,
  OpenStructureDetailsAction,
  openTroopDetails,
  OpenTroopDetailsAction,
  openVisitingHeroDetails,
  OpenVisitingHeroDetailsAction,
  selectTroop,
  SelectTroopAction,
  TownWindowActionType,
} from "./actions";

describe("townWindowActions", () => {
  it("should create an action to select troop", () => {
    const troop: TroopSelection = {
      id: "town",
      index: 0,
      type: TroopSelectionType.Garrison,
    };

    const result = selectTroop(troop);

    const expected: SelectTroopAction = {
      troop,
      type: TownWindowActionType.SelectTroop,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to deselect troop", () => {
    const result = deselectTroop();

    const expected: DeselectTroopAction = {
      type: TownWindowActionType.DeselectTroop,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to open troop details", () => {
    const result = openTroopDetails();

    const expected: OpenTroopDetailsAction = {
      type: TownWindowActionType.OpenTroopDetails,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close troop details", () => {
    const result = closeTroopDetails();

    const expected: CloseTroopDetailsAction = {
      type: TownWindowActionType.CloseTroopDetails,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to open visiting hero details", () => {
    const result = openVisitingHeroDetails();

    const expected: OpenVisitingHeroDetailsAction = {
      type: TownWindowActionType.OpenVisitingHeroDetails,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close visiting hero details", () => {
    const result = closeVisitingHeroDetails();

    const expected: CloseVisitingHeroDetailsAction = {
      type: TownWindowActionType.CloseVisitingHeroDetails,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to open structure details", () => {
    const result = openStructureDetails("structure");

    const expected: OpenStructureDetailsAction = {
      structure: "structure",
      type: TownWindowActionType.OpenStructureDetails,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close structure details", () => {
    const result = closeStructureDetails();

    const expected: CloseStructureDetailsAction = {
      type: TownWindowActionType.CloseStructureDetails,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to open option details", () => {
    const result = openOptionDetails("option");

    const expected: OpenOptionDetailsAction = {
      type: TownWindowActionType.OpenOptionDetails,
      value: "option",
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close option details", () => {
    const result = closeOptionDetails();

    const expected: CloseOptionDetailsAction = {
      type: TownWindowActionType.CloseOptionDetails,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to change recruited troop count", () => {
    const result = changeRecruitTroopCount(1);

    const expected: ChangeRecruitTroopCountAction = {
      count: 1,
      type: TownWindowActionType.ChangeRecruitTroopCount,
    };

    expect(result).toEqual(expected);
  });
});
