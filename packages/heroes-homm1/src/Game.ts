import {
  addHeroArtifact,
  Game,
  getGameHero,
  getGameTown,
  getTownStructure,
  Resources,
  subtractResources,
} from "heroes-core";

import { Skill } from "./Skill";
import { constructSpellBook, SpellBookSpell } from "./SpellBook";
import { MageGuild, StructureId } from "./structures";

export const buyMageGuildSpellBook = (game: Game, heroId: string, townId: string, cost: Resources): Game => {
  const hero = getGameHero(game, heroId)!;

  const town = getGameTown(game, townId)!;

  // TODO: check if mage guild is built?
  const mageGuild = getTownStructure(town, StructureId.MageGuild) as MageGuild;

  const spellBook = constructSpellBook([
    ...mageGuild.data.spells.map((s): SpellBookSpell => ({
      charges: hero.skills[Skill.Knowledge] || 0,
      id: s,
    })),
  ]);

  return {
    ...game,
    heroes: game.heroes.map((h) => h.id === heroId ? addHeroArtifact(h, spellBook) : h),
    resources: subtractResources(game.resources, cost),
  };
};
