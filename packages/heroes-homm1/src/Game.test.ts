import {
  createMap,
  createPoint,
  Game,
  GameObject,
  placeObject,
  replaceObject,
} from "heroes-core";

import { MageGuild, StructureId } from "./data";
import { buyMageGuildSpellBook } from "./Game";
import { ObjectId } from "./ObjectId";
import {
  HeroObject,
  HeroObjectData,
  initializeHeroObject,
  SpellBookObject,
  SpellBookObjectData,
  TownObject,
} from "./objects";

describe("buyMageGuildSpellBook", () => {
  // TODO: split into multiple tests
  it("should buy spell book from mage guild", () => {
    const heroObjectData: HeroObjectData = {
      army: {
        preventMovingLastTroop: true,
      },
      baseMobility: 0,
      equipable: true,
      id: ObjectId.Hero,
      ownable: true,
    };

    const object: GameObject = {
      dataId: ObjectId.Hero,
      id: "hero",
    };

    const heroObject = initializeHeroObject(object, heroObjectData);

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

    const townObject: TownObject = {
      army: [],
      canConstructStructures: true,
      dataId: "dataId",
      heroClass: "heroClass",
      id: "town",
      name: "Name",
      owner: "player",
      structures: [
        mageGuild,
      ],
    };

    const spellBookObjectData: SpellBookObjectData = {
      id: "spellbook",
      spellBook: true,
    };

    const game: Game = {
      activePlayer: "player",
      data: {
        armySize: 0,
        baseMovementCost: 0,
        creatures: {},
        editor: {
          heroArtifactCount: 0,
          maxCreatureCount: 0,
          maxHeroExperience: 0,
        },
        heroClasses: {},
        heroes: {},
        objects: {
          [spellBookObjectData.id]: spellBookObjectData,
        },
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

    const spellBook: SpellBookObject = {
      dataId: "spellbook",
      id: "spellbook",
      spells: [
        {
          charges: 0,
          id: "spell",
        },
      ],
    };

    const expectedHero: HeroObject = {
      ...heroObject,
      items: [
        spellBook,
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
