import { CreatureData } from "../Creature";
import {
  createCreatureMapObject,
  CreatureMapObject,
  CreatureMapObjectData,
  CreatureMapObjectDetails,
  getCreatureMapObjectDetails,
  isCreatureMapObject,
  isCreatureMapObjectData,
  setCreatureMapObjectDetails,
} from "./CreatureMapObject";
import { MapObject, MapObjectData } from "./MapObject";

describe("isCreatureMapObjectData", () => {
  it("should return true when creature object data", () => {
    const objectData: CreatureMapObjectData = {
      creature: "creature",
      grid: [],
      height: 1,
      id: "dataId",
      width: 1,
    };

    const result = isCreatureMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not creature object data", () => {
    const objectData: MapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      width: 1,
    };

    const result = isCreatureMapObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("createCreatureMapObject", () => {
  it("should create creature map object with count 0", () => {
    const objectData: CreatureMapObjectData = {
      creature: "creature",
      grid: [],
      height: 1,
      id: "dataId",
      width: 1,
    };

    const result = createCreatureMapObject("id", objectData);

    const expected: CreatureMapObject = {
      count: 0,
      dataId: "dataId",
      id: "id",
    };

    expect(result).toEqual(expected);
  });
});

describe("isCreatureMapObject", () => {
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

    const object: CreatureMapObject = {
      count: 0,
      dataId: creature.id,
      id: "id",
    };

    const data: Parameters<typeof isCreatureMapObject>[1] = {
      creatures: {
        [creature.id]: creature,
      },
    };

    const result = isCreatureMapObject(object, data);

    expect(result).toBe(true);
  });

  it("should return false when not creature map object", () => {
    const object: MapObject = {
      dataId: "dataId",
      id: "id",
    };

    const data: Parameters<typeof isCreatureMapObject>[1] = {
      creatures: {},
    };

    const result = isCreatureMapObject(object, data);

    expect(result).toBe(false);
  });
});

describe("getCreatureMapObjectDetails", () => {
  it("should return object details", () => {
    const object: CreatureMapObject = {
      count: 1,
      dataId: "dataId",
      id: "id",
    };

    const result = getCreatureMapObjectDetails(object);

    const expected: CreatureMapObjectDetails = 1;

    expect(result).toEqual(expected);
  });
});

describe("setCreatureMapObjectDetails", () => {
  it("should set object details", () => {
    const object: CreatureMapObject = {
      count: 0,
      dataId: "dataId",
      id: "id",
    };

    const value: CreatureMapObjectDetails = 1;

    const result = setCreatureMapObjectDetails(object, value);

    const expected: CreatureMapObject = {
      ...object,
      count: 1,
    };

    expect(result).toEqual(expected);
  });
});
