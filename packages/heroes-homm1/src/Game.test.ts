import {
  createMap,
  createPoint,
  Game,
  Hero,
  placeObject,
  replaceObject,
  Town,
} from "heroes-core";

import { buyMageGuildSpellBook } from "./Game";
import { createHeroMapObject, createTownMapObject, HeroMapObject, HeroMapObjectData, TownMapObjectData } from "./map";
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

    const heroObjectData: HeroMapObjectData = {
      army: {
        preventMovingLastTroop: true,
      },
      grid: [],
      height: 1,
      id: "hero",
      ownable: true,
      width: 1,
    };

    const heroObject = createHeroMapObject("hero", heroObjectData, hero, "alignment");

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
      army: [],
      canConstructStructures: true,
      heroClass: "heroClass",
      id: "town",
      name: "Name",
      structures: [
        mageGuild,
      ],
    };

    const townObjectData: TownMapObjectData = {
      army: {
        preventMovingLastTroop: false,
      },
      grid: [],
      height: 1,
      id: "town",
      ownable: true,
      width: 1,
    };

    const townObject = createTownMapObject("town", townObjectData, town, "alignment");

    const game: Game = {
      alignment: "alignment",
      data: {
        creatures: {},
        heroClasses: {},
        heroes: {},
        items: {},
        mapObjects: {},
        resources: {},
        spells: {},
        terrains: {},
      },
      map: placeObject(
        placeObject(createMap(2, 1, "terrain"), createPoint(0, 0), heroObject),
        createPoint(1, 0),
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
      turn: 0,
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
