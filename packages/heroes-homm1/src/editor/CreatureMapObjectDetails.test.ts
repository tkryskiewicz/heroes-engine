import { CreatureObject } from "heroes-core";

import {
  CreatureMapObjectDetails,
  getCreatureMapObjectDetails,
  setCreatureMapObjectDetails,
} from "./CreatureMapObjectDetails";

describe("getCreatureMapObjectDetails", () => {
  it("should return object details", () => {
    const object: CreatureObject = {
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
    const object: CreatureObject = {
      count: 0,
      dataId: "dataId",
      id: "id",
    };

    const value: CreatureMapObjectDetails = 1;

    const result = setCreatureMapObjectDetails(object, value);

    const expected: CreatureObject = {
      ...object,
      count: 1,
    };

    expect(result).toEqual(expected);
  });
});
