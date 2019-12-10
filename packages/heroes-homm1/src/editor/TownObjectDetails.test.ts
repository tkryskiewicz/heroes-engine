import { ObjectId } from "../ObjectId";
import { RandomTownObject } from "../objects";
import { getTownObjectDetails, setTownObjectDetails, TownObjectDetails } from "./TownObjectDetails";

describe("getTownObjectDetails", () => {
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

    const result = getTownObjectDetails(object);

    const expected: TownObjectDetails = {
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

describe("setTownObjectDetails", () => {
  it("should set object details", () => {
    const object: RandomTownObject = {
      army: [],
      customized: false,
      dataId: ObjectId.RandomTown,
      id: "id",
      owner: undefined,
    };

    const value: TownObjectDetails = {
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      customized: true,
      owner: "player",
    };

    const result = setTownObjectDetails(object, value);

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
