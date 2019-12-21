import { ArtifactId } from "./data";
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
      dataId: ArtifactId.Spellbook,
      id: ArtifactId.Spellbook,
    };

    expect(result).toEqual(expected);
  });
});
