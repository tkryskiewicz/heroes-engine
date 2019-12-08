import { ArmedObject } from "heroes-core";

import { CreatureSpeed } from "../CreatureSpeed";
import { getArmedObjectArmyMobility } from "./ArmedMapObject";

describe("getArmedObjectArmyMobility", () => {
  it("should return infinity when no army", () => {
    const data: Parameters<typeof getArmedObjectArmyMobility>[1] = {
      creatures: {},
    };

    const object: ArmedObject = {
      army: [],
      dataId: "dataId",
      id: "id",
    };

    const result = getArmedObjectArmyMobility(object, data);

    expect(result).toBe(Infinity);
  });

  it("should return troop mobility when one troop", () => {
    const data: Parameters<typeof getArmedObjectArmyMobility>[1] = {
      creatures: {
        creatureA: {
          attack: 0,
          damage: {
            max: 0,
            min: 0,
          },
          defense: 0,
          hitPoints: 0,
          id: "creatureA",
          speed: CreatureSpeed.Fast,
        },
      },
    };

    const object: ArmedObject = {
      army: [
        {
          count: 1,
          creature: "creatureA",
        },
      ],
      dataId: "dataId",
      id: "id",
    };

    const result = getArmedObjectArmyMobility(object, data);

    expect(result).toBe(60);
  });

  it("should return slowest troop mobility", () => {
    const data: Parameters<typeof getArmedObjectArmyMobility>[1] = {
      creatures: {
        creatureA: {
          attack: 0,
          damage: {
            max: 0,
            min: 0,
          },
          defense: 0,
          hitPoints: 0,
          id: "creatureA",
          speed: CreatureSpeed.Fast,
        },
        creatureB: {
          attack: 0,
          damage: {
            max: 0,
            min: 0,
          },
          defense: 0,
          hitPoints: 0,
          id: "creatureA",
          speed: CreatureSpeed.Slow,
        },
      },
    };

    const object: ArmedObject = {
      army: [
        {
          count: 1,
          creature: "creatureA",
        },
        {
          count: 1,
          creature: "creatureB",
        },
      ],
      dataId: "dataId",
      id: "id",
    };

    const result = getArmedObjectArmyMobility(object, data);

    expect(result).toBe(40);
  });
});
