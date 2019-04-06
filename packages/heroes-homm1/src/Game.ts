import {
  addEquipableMapObjectItem,
  Game,
  getGameTown,
  getObject,
  getTownStructure,
  isHeroMapObject,
  Resources,
  subtractResources,
} from "heroes-core";

import { Skill } from "./Skill";
import { constructSpellBook, SpellBookSpell } from "./SpellBook";
import { MageGuild, StructureId } from "./structures";

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
    map: addEquipableMapObjectItem(game.map, heroId, spellBook),
    resources: subtractResources(game.resources, cost),
  };
};
