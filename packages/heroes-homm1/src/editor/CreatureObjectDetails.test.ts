import { CreatureObject } from "heroes-core";

import {
  CreatureObjectDetails,
  getCreatureObjectDetails,
  setCreatureObjectDetails,
} from "./CreatureObjectDetails";

describe("getCreatureObjectDetails", () => {
  it("should return object details", () => {
    const object: CreatureObject = {
      count: 1,
      dataId: "dataId",
      id: "id",
    };

    const result = getCreatureObjectDetails(object);

    const expected: CreatureObjectDetails = 1;

    expect(result).toEqual(expected);
  });
});

describe("setCreatureObjectDetails", () => {
  it("should set object details", () => {
    const object: CreatureObject = {
      count: 0,
      dataId: "dataId",
      id: "id",
    };

    const value: CreatureObjectDetails = 1;

    const result = setCreatureObjectDetails(object, value);

    const expected: CreatureObject = {
      ...object,
      count: 1,
    };

    expect(result).toEqual(expected);
  });
});
