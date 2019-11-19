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
import {
  createHeroMapObject,
  createTownMapObject,
  HeroMapObject,
  HeroMapObjectData,
  MapObjectId,
  TownMapObjectData,
} from "./map";
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
      heroId: "heroId",
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
      baseMobility: 0,
      grid: [],
      height: 1,
      id: MapObjectId.Hero,
      ownable: true,
      type: "type",
      width: 1,
    };

    const heroObject = createHeroMapObject("hero", heroObjectData, hero, "player");

    const mageGuild: MageGuild = {
      cost: {},
      data: {
        spellBookCost: {
          resource: 500,
        },
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
      type: "type",
      width: 1,
    };

    const townObject = createTownMapObject("town", townObjectData, town, "player");

    const game: Game = {
      activePlayer: "player",
      data: {
        armySize: 0,
        creatures: {},
        editor: {
          heroArtifactCount: 0,
          maxCreatureCount: 0,
          maxHeroExperience: 0,
        },
        heroClasses: {},
        heroes: {},
        items: {},
        mapObjects: {},
        playerColors: [],
        resources: {},
        spells: {},
        terrains: {},
        towns: {},
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
        resource: 1000,
      },
      scenario: {
        description: "Description",
        map: createMap(1, 1, "terrain"),
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
        resource: 500,
      },
    };

    expect(result).toEqual(expected);
  });
});
