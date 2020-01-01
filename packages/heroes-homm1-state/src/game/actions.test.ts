import { ItemSelection, TroopSelection, TroopSelectionType } from "heroes-core";

import {
  buildStructure,
  BuildStructureAction,
  buyMageGuildSpellBook,
  BuyMageGuildSpellBookAction,
  dismissHero,
  DismissHeroAction,
  dismissTroop,
  DismissTroopAction,
  endTurn,
  EndTurnAction,
  GameActionType,
  recruitTroop,
  RecruitTroopAction,
  startTurn,
  StartTurnAction,
  swapTroops,
  SwapTroopsAction,
  tradeArtifacts,
  TradeArtifactsAction,
  visitMapObject,
  VisitMapObjectAction,
} from "./actions";

describe("gameActions", () => {
  it("should create an action to swap troops", () => {
    const troop: TroopSelection = {
      id: "hero",
      index: 0,
      type: TroopSelectionType.Hero,
    };

    const withTroop: TroopSelection = {
      id: "town",
      index: 0,
      type: TroopSelectionType.Garrison,
    };

    const result = swapTroops(troop, withTroop);

    const expected: SwapTroopsAction = {
      troop,
      type: GameActionType.SwapTroops,
      withTroop,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to dismiss troop", () => {
    const troop: TroopSelection = {
      id: "hero",
      index: 0,
      type: TroopSelectionType.Hero,
    };

    const result = dismissTroop(troop);

    const expected: DismissTroopAction = {
      troop,
      type: GameActionType.DismissTroop,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to trade artifacts", () => {
    const artifact: ItemSelection = {
      index: 0,
      objectId: "hero",
    };

    const withArtifact: ItemSelection = {
      index: 0,
      objectId: "withHero",
    };

    const result = tradeArtifacts(artifact, withArtifact);

    const expected: TradeArtifactsAction = {
      artifact,
      type: GameActionType.TradeArtifacts,
      withArtifact,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to dismiss hero", () => {
    const result = dismissHero("hero");

    const expected: DismissHeroAction = {
      hero: "hero",
      type: GameActionType.DismissHero,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to build structure", () => {
    const result = buildStructure("town", "structure");

    const expected: BuildStructureAction = {
      structure: "structure",
      town: "town",
      type: GameActionType.BuildStructure,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to recruit troop", () => {
    const result = recruitTroop("town", "structure", 1);

    const expected: RecruitTroopAction = {
      count: 1,
      structure: "structure",
      town: "town",
      type: GameActionType.RecruitTroop,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to buy mage guild spell book", () => {
    const result = buyMageGuildSpellBook("hero", "town", { resource: 1 });

    const expected: BuyMageGuildSpellBookAction = {
      cost: { resource: 1 },
      hero: "hero",
      town: "town",
      type: GameActionType.BuyMageGuildSpellBook,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to start turn", () => {
    const result = startTurn();

    const expected: StartTurnAction = {
      type: GameActionType.StartTurn,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to end turn", () => {
    const result = endTurn();

    const expected: EndTurnAction = {
      type: GameActionType.EndTurn,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to visit object", () => {
    const result = visitMapObject("id", "hero");

    const expected: VisitMapObjectAction = {
      hero: "hero",
      id: "id",
      type: GameActionType.VisitMapObject,
    };

    expect(result).toEqual(expected);
  });
});
