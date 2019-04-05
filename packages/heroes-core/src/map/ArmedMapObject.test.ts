import { Game } from "../Game";
import { TroopSelectionType, Troop } from "../Troop";
import {
  ArmedMapObject,
  dismissArmedMapObjectTroop,
  isArmedMapObject,
  swapArmedMapObjectTroops,
} from "./ArmedMapObject";
import { createMap, getObject, placeObject } from "./Map";
import { MapObject } from "./MapObject";

describe("isArmedMapObject", () => {
  it("should return when armed object", () => {
    const object: ArmedMapObject = {
      army: [],
      dataId: "dataId",
      id: "id",
    };

    const result = isArmedMapObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not armed object", () => {
    const object: MapObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = isArmedMapObject(object);

    expect(result).toBe(false);
  });
});

describe("dismissArmedMapObjectTroop", () => {
  it("should dismiss troop", () => {
    const object: ArmedMapObject = {
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      dataId: "dataId",
      id: "id",
    };

    const game: Game = {
      alignment: "alignment",
      data: {
        artifacts: {},
        creatures: {},
        mapObjects: {},
        resources: {},
        spells: {},
      },
      map: placeObject(
        createMap(1, 1, "terrain"),
        { x: 0, y: 0 },
        object,
      ),
      puzzle: {
        totalPieces: 0,
        uncoveredPieces: 0,
      },
      resources: {},
      scenario: {
        description: "Description",
        name: "Name",
      },
    };

    const result = dismissArmedMapObjectTroop(game, { id: "id", type: TroopSelectionType.Garrison, index: 0 });

    const expected: ArmedMapObject = {
      ...object,
      army: [
        undefined,
      ],
    };

    expect(getObject(result.map, "id")!).toEqual(expected);
  });
});

describe("swapArmedMapObjectTroops", () => {
  it("should swap troops", () => {
    const troop: Troop = {
      count: 1,
      creature: "creatureA",
    };

    const object: ArmedMapObject = {
      army: [
        troop,
      ],
      dataId: "dataId",
      id: "id",
    };

    const withTroop: Troop = {
      count: 1,
      creature: "creatureB",
    };

    const withObject: ArmedMapObject = {
      army: [
        withTroop,
      ],
      dataId: "dataId",
      id: "withId",
    };

    const game: Game = {
      alignment: "alignment",
      data: {
        artifacts: {},
        creatures: {},
        mapObjects: {},
        resources: {},
        spells: {},
      },
      map: placeObject(
        placeObject(createMap(2, 1, "terrain"), { x: 0, y: 0 }, object),
        { x: 1, y: 0 },
        withObject,
      ),
      puzzle: {
        totalPieces: 0,
        uncoveredPieces: 0,
      },
      resources: {},
      scenario: {
        description: "Description",
        name: "Name",
      },
    };

    const result = swapArmedMapObjectTroops(game,
      { id: "id", type: TroopSelectionType.Garrison, index: 0 },
      { id: "withId", type: TroopSelectionType.Garrison, index: 0 },
      true, false);

    const expectedObject: ArmedMapObject = {
      ...object,
      army: [
        withTroop,
      ],
    };

    const expectedWithObject: ArmedMapObject = {
      ...withObject,
      army: [
        troop,
      ],
    };

    expect(getObject(result.map, "id")).toEqual(expectedObject);
    expect(getObject(result.map, "withId")).toEqual(expectedWithObject);
  });
});
