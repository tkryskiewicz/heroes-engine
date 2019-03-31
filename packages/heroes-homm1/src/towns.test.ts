import { Army, Town } from "heroes-core";

import { HeroClass } from "./HeroClass";
import { commonStructures, constructStructure, coreStructures, farmStructures } from "./structures";
import { TownId } from "./TownId";
import { constructTown } from "./towns";

describe("constructTown", () => {
  it("should construct town", () => {
    const garrison: Army = [
      {
        count: 1,
        creature: "creature",
      },
    ];

    const result = constructTown(TownId.Farm, "Name", garrison);

    const expected: Town = {
      canConstructStructures: true,
      garrison,
      heroClass: HeroClass.Knight,
      id: TownId.Farm,
      name: "Name",
      structures: [
        ...coreStructures,
        ...commonStructures,
        ...farmStructures,
      ].map(constructStructure),
    };

    expect(result).toEqual(expected);
  });
});
