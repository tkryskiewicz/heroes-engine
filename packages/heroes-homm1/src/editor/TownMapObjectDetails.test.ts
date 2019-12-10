import { ObjectId } from "../ObjectId";
import { RandomTownObject } from "../objects";
import { getTownMapObjectDetails, setTownMapObjectDetails, TownMapObjectDetails } from "./TownMapObjectDetails";

describe("getTownMapObjectDetails", () => {
  it("should return object details", () => {
    const object: RandomTownObject = {
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      customized: false,
      dataId: ObjectId.RandomTown,
      id: "dataId",
      owner: "player",
    };

    const result = getTownMapObjectDetails(object);

    const expected: TownMapObjectDetails = {
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      customized: false,
      owner: "player",
    };

    expect(result).toEqual(expected);
  });
});

describe("setTownMapObjectDetails", () => {
  it("should set object details", () => {
    const object: RandomTownObject = {
      army: [],
      customized: false,
      dataId: ObjectId.RandomTown,
      id: "id",
      owner: undefined,
    };

    const value: TownMapObjectDetails = {
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      customized: true,
      owner: "player",
    };

    const result = setTownMapObjectDetails(object, value);

    const expected: RandomTownObject = {
      ...object,
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      customized: true,
      owner: "player",
    };

    expect(result).toEqual(expected);
  });
});
