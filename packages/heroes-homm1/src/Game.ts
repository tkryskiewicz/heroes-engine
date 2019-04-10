import {
  addEquipableMapObjectItem,
  Game,
  getGameTown,
  getObject,
  getTownStructure,
  Hero,
  isObjectOwnedBy,
  replaceObject,
  Resources,
  subtractResources,
} from "heroes-core";

import { isHeroMapObject } from "./map";
import { Skill } from "./Skill";
import { constructSpellBook, SpellBookSpell } from "./SpellBook";
import { MageGuild, StructureId } from "./structures";

export const getGameHeroes = (game: Game): Hero[] =>
  game.map.tiles
    .map((t) => t.object)
    .filter(isHeroMapObject)
    .filter((o) => isObjectOwnedBy(o, game.alignment));

export const getGameHero = (game: Game, hero: string): Hero | undefined =>
  getGameHeroes(game).find((h) => h.id === hero);

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
