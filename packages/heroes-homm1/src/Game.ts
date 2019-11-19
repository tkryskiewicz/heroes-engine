import {
  addEquipableMapObjectItem,
  buildTownStructure,
  endTownTurn,
  Game,
  GameData,
  getObject,
  getTownStructure,
  Hero,
  isDwellingStructure,
  isObjectOwnedBy,
  multiplyResources,
  replaceObject,
  Resources,
  subtractResources,
  Town,
} from "heroes-core";

import { constructHero } from "./heroes";
import {
  HeroMapObjectData,
  isHeroMapObject,
  isHeroMapObjectData,
  isTownMapObject,
  MapObjectId,
  recruitTownMapObjectTroop,
  TownMapObject,
} from "./map";
import { Skill } from "./Skill";
import { constructSpellBook, SpellBookSpell } from "./SpellBook";
import { MageGuild, StructureId } from "./structures";

export interface EditorGameData {
  readonly maxCreatureCount: number;
  readonly heroArtifactCount: number;
  readonly maxHeroExperience: number;
}

declare module "heroes-core/src/Game" {
  interface GameData {
    readonly editor: EditorGameData;
  }
}

export const constructGameHero = (id: string, heroId: string, data: GameData) => {
  const hero = data.heroes[heroId];

  if (!hero) {
    throw new Error(`${heroId} is not a valid hero`);
  }

  const heroClass = data.heroClasses[hero.heroClass];

  if (!heroClass) {
    throw new Error(`${hero.heroClass} is not a valid hero class`);
  }

  // FIXME
  const objectData = data.mapObjects[MapObjectId.Hero] as HeroMapObjectData;

  return {
    ...constructHero(id, hero.id, heroClass),
    mobility: objectData.baseMobility,
  };
};

export const getGameHeroes = (game: Game): Hero[] =>
  game.map.cells
    .map((c) => c.object)
    .filter(isHeroMapObject)
    .filter((o) => isObjectOwnedBy(o, game.activePlayer));

export const getGameHero = (game: Game, hero: string): Hero | undefined =>
  getGameHeroes(game).find((h) => h.id === hero);

export const getGameTowns = (game: Game): Town[] =>
  game.map.cells
    .map((c) => c.object)
    .filter(isTownMapObject)
    .filter((o) => isObjectOwnedBy(o, game.activePlayer));

export const getGameTown = (game: Game, town: string): Town | undefined =>
  getGameTowns(game).find((t) => t.id === town);

export const buildGameStructure = (game: Game, town: string, structure: string): Game => {
  const object = getObject(game.map, town);

  if (!isTownMapObject(object)) {
    throw new Error(`${town} is not a town object`);
  }

  const struct = getTownStructure(object, structure);

  if (!struct) {
    throw new Error(`${structure} is not a valid structure`);
  }

  const objectResult: TownMapObject = {
    ...object,
    ...buildTownStructure(object, structure),
  };

  return {
    ...game,
    map: replaceObject(game.map, objectResult),
    resources: subtractResources(game.resources, struct.cost),
  };
};

export const recruitGameTroop = (game: Game, townId: string, structureId: string, count: number): Game => {
  const object = getObject(game.map, townId);

  if (!isTownMapObject(object)) {
    throw new Error(`${townId} is not a town object`);
  }

  const structure = getTownStructure(object, structureId);

  if (!structure) {
    throw new Error(`${structureId} is not a valid structure`);
  }

  if (!isDwellingStructure(structure)) {
    throw new Error(`${structureId} is not a dwelling`);
  }

  const cost = multiplyResources(structure.dwelling.cost, count);

  return {
    ...game,
    map: replaceObject(game.map, recruitTownMapObjectTroop(object, structureId, count)),
    resources: subtractResources(game.resources, cost),
  };
};

export const buyMageGuildSpellBook = (game: Game, heroId: string, townId: string, cost: Resources): Game => {
  const object = getObject(game.map, heroId);

  if (!isHeroMapObject(object)) {
    throw new Error(`${heroId} is not a hero object`);
  }

  const town = getGameTown(game, townId)!;

  // TODO: check if mage guild is built?
  const mageGuild = getTownStructure(town, StructureId.MageGuild) as MageGuild;

  const spellBook = constructSpellBook([
    ...mageGuild.data.spells.map((s): SpellBookSpell => ({
      charges: object.skills[Skill.Knowledge] || 0,
      id: s,
    })),
  ]);

  return {
    ...game,
    map: replaceObject(game.map, addEquipableMapObjectItem(object, spellBook)),
    resources: subtractResources(game.resources, cost),
  };
};

export const endGameTurn = (game: Game): Game => ({
  ...game,
  map: {
    ...game.map,
    cells: game.map.cells.map((c) => {
      if (!c.object) {
        return c;
      }

      const objectData = game.data.mapObjects[c.object.dataId];

      if (isTownMapObject(c.object)) {
        return {
          ...c,
          object: {
            ...c.object,
            ...endTownTurn(c.object),
          },
        };
      }

      if (isHeroMapObject(c.object) && isHeroMapObjectData(objectData)) {
        return {
          ...c,
          object: {
            ...c.object,
            mobility: objectData.baseMobility,
          },
        };
      }

      return c;
    }),
  },
  turn: game.turn + 1,
});
