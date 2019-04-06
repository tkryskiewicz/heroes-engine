import {
  createHeroMapObject,
  createMap,
  createTownMapObject,
  Game,
  Hero,
  HeroMapObject,
  placeObject,
  replaceObject,
  Town,
} from "heroes-core";

import { buyMageGuildSpellBook } from "./Game";
import { Resource } from "./Resource";
import { constructSpellBook } from "./SpellBook";
import { MageGuild, StructureId } from "./structures";

describe("buyMageGuildSpellBook", () => {
  // TODO: split into multiple tests
  it("should buy spell book from mage guild", () => {
    const hero: Hero = {
      army: [],
      artifacts: [],
      dataId: "hero",
      experience: 0,
      heroClass: "heroClass",
      id: "hero",
      luck: 0,
      mobility: 0,
      morale: 0,
      skills: {},
    };

    const heroObject = createHeroMapObject("hero", { id: "hero", ownable: true }, hero, "alignment");

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
      canConstructStructures: true,
      heroClass: "heroClass",
      id: "town",
      name: "Name",
      structures: [
        mageGuild,
      ],
    };

    const townObject = createTownMapObject("town", { id: "town", ownable: true }, town, "alignment");

    const game: Game = {
      alignment: "alignment",
      data: {
        artifacts: {},
        creatures: {},
        mapObjects: {},
        resources: {},
        spells: {},
      },
      map: placeObject(
        placeObject(createMap(2, 1, "terrain"), { x: 0, y: 0 }, heroObject),
        { x: 1, y: 0 },
        townObject,
      ),
      puzzle: {
        totalPieces: 0,
        uncoveredPieces: 0,
      },
      resources: {
        [Resource.Gold]: 1000,
      },
      scenario: {
        description: "Description",
        name: "Name",
      },
    };

    const result = buyMageGuildSpellBook(game, "hero", "town", mageGuild.data.spellBookCost);

    const expectedHero: HeroMapObject = {
      ...heroObject,
      artifacts: [
        constructSpellBook([
          {
            charges: 0,
            id: "spell",
          },
        ]),
      ],
    };

    const expected: Game = {
      ...game,
      map: replaceObject(game.map, expectedHero),
      resources: {
        [Resource.Gold]: 500,
      },
    };

    expect(result).toEqual(expected);
  });
});
