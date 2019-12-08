import { CreatureData } from "../Creature";
import { GameObject, GameObjectData } from "../GameObject";
import {
  CreatureObject,
  CreatureObjectData,
  initializeCreatureObject,
  isCreatureObject,
  isCreatureObjectData,
} from "./CreatureObject";

describe("isCreatureObjectData", () => {
  it("should return true when creature object data", () => {
    const objectData: CreatureObjectData = {
      creature: "creature",
      id: "dataId",
    };

    const result = isCreatureObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not creature object data", () => {
    const objectData: GameObjectData = {
      id: "dataId",
    };

    const result = isCreatureObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("initializeCreatureObject", () => {
  it("should initialize count", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = initializeCreatureObject(object);

    const expected: CreatureObject = {
      ...object,
      count: 0,
    };

    expect(result).toEqual(expected);
  });
});

describe("isCreatureObject", () => {
  it("should return true when creature map object", () => {
    const creature: CreatureData = {
      attack: 0,
      damage: {
        max: 1,
        min: 1,
      },
      defense: 0,
      hitPoints: 0,
      id: "id",
      speed: 0,
    };

    const object: CreatureObject = {
      count: 0,
      dataId: creature.id,
      id: "id",
    };

    const data: Parameters<typeof isCreatureObject>[1] = {
      creatures: {
        [creature.id]: creature,
      },
    };

    const result = isCreatureObject(object, data);

    expect(result).toBe(true);
  });

  it("should return false when not creature map object", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const data: Parameters<typeof isCreatureObject>[1] = {
      creatures: {},
    };

    const result = isCreatureObject(object, data);

    expect(result).toBe(false);
  });
});
