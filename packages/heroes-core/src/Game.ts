import { Creature } from "./Creature";
import { dismissHeroTroop, Hero, swapHeroTroops } from "./Hero";
import { multiplyResources, Resources, subtractResources } from "./Resource";
import { Scenario } from "./Scenario";
import { Spell } from "./Spell";
import { buildTownStructure, endTownTurn, recruitTownTroop, swapGarrisonTroops, Town } from "./Town";

export interface GameData {
  readonly creatureById: { readonly [creature: string]: Creature; };
  readonly spellById: { readonly [id: string]: Spell; };
}

export interface Game {
  readonly data: GameData;
  readonly scenario: Scenario;
  readonly alignment: string;
  readonly resources: Resources;
  readonly heroes: Hero[];
  readonly towns: Town[];
  readonly discoveredPuzzlePieces: number;
}

export const swapGameHeroTroops = (game: Game, hero: string, index: number, withIndex: number): Game => ({
  ...game,
  heroes: game.heroes.map((h) => h.id === hero ? swapHeroTroops(h, index, withIndex) : h),
});

export const dismissGameHero = (game: Game, hero: string): Game => ({
  ...game,
  heroes: game.heroes.filter((h) => h.id !== hero),
});

export const dismissGameHeroTroop = (game: Game, hero: string, index: number): Game => ({
  ...game,
  heroes: game.heroes.map((h) => h.id === hero ? dismissHeroTroop(h, index) : h),
});

export const swapGameGarrisonTroops = (game: Game, townId: string, index: number, withIndex: number): Game => {
  const town = game.towns.find((t) => t.id === townId);

  if (!town) {
    return game;
  }

  return {
    ...game,
    towns: game.towns.map((t) => t === town ? swapGarrisonTroops(town, index, withIndex) : t),
  };
};

export const getGameTown = (game: Game, town: string): Town | undefined =>
  game.towns.find((t) => t.id === town);

export const buildGameStructure = (game: Game, town: string, structure: string): Game => {
  const twn = game.towns.find((t) => t.id === town);

  if (!twn) {
    return game;
  }

  const struct = twn.structures.find((s) => s.id === structure);

  if (!struct) {
    return game;
  }

  return {
    ...game,
    resources: subtractResources(game.resources, struct.cost),
    towns: game.towns.map((t) => t.id === town ? buildTownStructure(twn, structure) : t),
  };
};

export const recruitGameTroop = (game: Game, townId: string, structureId: string, count: number): Game => {
  const town = game.towns.find((t) => t.id === townId);

  if (!town) {
    return game;
  }

  const structure = town.structures.find((s) => s.id === structureId);

  if (!structure || !structure.dwelling) {
    return game;
  }

  const cost = multiplyResources(structure.dwelling.cost, count);

  return {
    ...game,
    resources: subtractResources(game.resources, cost),
    towns: game.towns.map((t) => t === town ? recruitTownTroop(town, structureId, count) : t),
  };
};

export const endGameTurn = (game: Game): Game => ({
  ...game,
  towns: game.towns.map((t) => endTownTurn(t)),
});
