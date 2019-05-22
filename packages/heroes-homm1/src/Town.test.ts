import { Town, TownData } from "heroes-core";

import { constructTown } from "./Town";

describe("constructTown", () => {
  it("should construct town", () => {
    const town: TownData = {
      heroClass: "heroClass",
      id: "town",
      structures: [],
    };

    const data: Parameters<typeof constructTown>[2] = {
      towns: {
        [town.id]: town,
      },
    };

    const result = constructTown("town", "Name", data);

    const expected: Town = {
      army: [],
      canConstructStructures: true,
      heroClass: "heroClass",
      id: "town",
      name: "Name",
      structures: [],
    };

    expect(result).toEqual(expected);
  });
});
