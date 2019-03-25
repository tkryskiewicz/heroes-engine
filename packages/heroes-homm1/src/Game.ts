import {
  addHeroArtifact,
  Game,
  getGameHero,
  getGameTown,
  getTownStructure,
  Resources,
  subtractResources,
} from "heroes-core";

import { ArtifactId, constructArtifact } from "./artifacts";
import { Skill } from "./Skill";
import { SpellBook, SpellBookSpell } from "./SpellBook";
import { MageGuild, StructureId } from "./structures";

export const buyMageGuildSpellBook = (game: Game, heroId: string, townId: string, cost: Resources): Game => {
  const hero = getGameHero(game, heroId)!;

  const town = getGameTown(game, townId)!;

  // TODO: check if mage guild is built?
  const mageGuild = getTownStructure(town, StructureId.MageGuild) as MageGuild;

  const spellBook = constructArtifact(ArtifactId.Spellbook, {
    spells: [
      ...mageGuild.data.spells.map((s): SpellBookSpell => ({
        charges: hero.skills[Skill.Knowledge],
        id: s,
      })),
    ],
  }) as SpellBook;

  return {
    ...game,
    heroes: game.heroes.map((h) => h.id === heroId ? addHeroArtifact(h, spellBook) : h),
    resources: subtractResources(game.resources, cost),
  };
};
