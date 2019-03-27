import { ArtifactId } from "./artifacts";
import { constructSpellBook, SpellBook } from "./SpellBook";

describe("constructSpellBook", () => {
  it("should construct spell book", () => {
    const result = constructSpellBook([
      {
        charges: 1,
        id: "spell",
      },
    ]);

    const expected: SpellBook = {
      data: {
        spells: [
          {
            charges: 1,
            id: "spell",
          },
        ],
      },
      id: ArtifactId.Spellbook,
    };

    expect(result).toEqual(expected);
  });
});
