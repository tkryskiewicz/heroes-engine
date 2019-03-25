import { Game, Hero, Town } from "heroes-core";

import { ArtifactId } from "./artifacts";
import { buyMageGuildSpellBook } from "./Game";
import { Resource } from "./Resource";
import { MageGuild, StructureId } from "./structures";

describe("buyMageGuildSpellBook", () => {
  // TODO: split into multiple tests
  it("should buy spell book from mage guild", () => {
    const hero: Hero = {
      alignment: "alignment",
      army: [],
      artifacts: [],
      experience: 0,
      heroClass: "heroClass",
      id: "hero",
      luck: 0,
      mobility: 0,
      morale: 0,
      skills: {},
    };

    const otherHero = {
      ...hero,
      id: "otherHero",
    };

    const mageGuild: MageGuild = {
      cost: {},
      data: {
        spellBookCost: { [Resource.Gold]: 500 },
        spells: [
          "spell",
        ],
      },
      id: StructureId.MageGuild,
      isBuilt: true,
    };

    const town: Town = {
      alignment: "alignment",
      canConstructStructures: true,
      garrison: [],
      heroClass: "heroClass",
      id: "town",
      name: "Name",
      structures: [
        mageGuild,
      ],
    };

    const game: Game = {
      alignment: "alignment",
      data: {
        creatureById: {},
        spellById: {},
      },
      discoveredPuzzlePieces: 0,
      heroes: [
        hero,
        otherHero,
      ],
      map: {
        height: 1,
        tiles: [],
        width: 1,
      },
      resources: {
        [Resource.Gold]: 1000,
      },
      scenario: {
        description: "Description",
        name: "Name",
      },
      towns: [
        town,
      ],
    };

    const result = buyMageGuildSpellBook(game, "hero", "town", mageGuild.data.spellBookCost);

    const expectedHero: Hero = {
      ...hero,
      artifacts: [
        {
          data: {
            spells: [
              {
                charges: undefined,
                id: "spell",
              },
            ],
          },
          id: ArtifactId.Spellbook,
          tradable: false,
        },
      ],
    };

    const expected: Game = {
      alignment: "alignment",
      data: {
        creatureById: {},
        spellById: {},
      },
      discoveredPuzzlePieces: 0,
      heroes: [
        expectedHero,
        otherHero,
      ],
      map: {
        height: 1,
        tiles: [],
        width: 1,
      },
      resources: {
        [Resource.Gold]: 500,
      },
      scenario: {
        description: "Description",
        name: "Name",
      },
      towns: [
        town,
      ],
    };

    expect(result).toEqual(expected);
  });
});
