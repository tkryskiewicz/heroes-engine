import { setArmyTroop } from "./Army";
import { Creature } from "./Creature";
import { dismissHeroTroop, Hero, swapHeroTroops } from "./Hero";
import { multiplyResources, Resources, subtractResources } from "./Resource";
import { Scenario } from "./Scenario";
import { Spell } from "./Spell";
import { buildTownStructure, endTownTurn, recruitTownTroop, swapGarrisonTroops, Town } from "./Town";
import { Troop, TroopSelection, TroopSelectionType } from "./Troop";

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

export const getGameHero = (game: Game, hero: string): Hero | undefined =>
  game.heroes.find((h) => h.id === hero);

// TODO: simplify
const getTroop = (from: Hero | Town, index: number): Troop | undefined => {
  if ((from as Hero).army) {
    const hero = from as Hero;

    return hero.army[index];
  }

  if ((from as Town).garrison) {
    const town = from as Town;

    return town.garrison[index];
  }
};

const setTroop = (on: Hero | Town, index: number, troop: Troop | undefined, autoCombine: boolean): Hero | Town => {
  if ((on as Hero).army) {
    const hero = on as Hero;

    return {
      ...hero,
      army: setArmyTroop(hero.army, index, troop, autoCombine),
    };
  }

  if ((on as Town).garrison) {
    const town = on as Town;

    return {
      ...on,
      garrison: setArmyTroop(town.garrison, index, troop, autoCombine),
    };
  }

  return on;
};

export const swapGameTroops = (
  game: Game,
  troop: TroopSelection,
  withTroop: TroopSelection,
  // TODO: extract to config
  autoCombine: boolean = true,
): Game => {
  if (troop.type === TroopSelectionType.Hero && troop.id === withTroop.id) {
    return {
      ...game,
      heroes: game.heroes.map((h) => h.id === troop.id ? swapHeroTroops(h, troop.index, withTroop.index) : h),
    };
  }

  if (troop.type === TroopSelectionType.Garrison && troop.id === withTroop.id) {
    return {
      ...game,
      towns: game.towns.map((t) => t.id === troop.id ? swapGarrisonTroops(t, troop.index, withTroop.index) : t),
    };
  }

  // TODO: implement swapping between heroes (should work with just troop.id !== withTroop.id)
  if (troop.type !== withTroop.type) {
    const tr = troop.type === TroopSelectionType.Hero ?
      getGameHero(game, troop.id) :
      getGameTown(game, troop.id);

    if (!tr) {
      return game;
    }

    const wtr = withTroop.type === TroopSelectionType.Hero ?
      getGameHero(game, withTroop.id) :
      getGameTown(game, withTroop.id);

    if (!wtr) {
      return game;
    }

    // TODO: check auto-combine
    const wtrSwapped = setTroop(wtr, withTroop.index, getTroop(tr, troop.index), autoCombine);

    const trSwapped = setTroop(tr, troop.index, getTroop(wtrSwapped, withTroop.index), autoCombine);

    return {
      ...game,
      heroes: game.heroes.map((h) => h.id === trSwapped.id ?
        trSwapped :
        h.id === wtrSwapped.id ?
          wtrSwapped :
          h,
      ) as Hero[],
      towns: game.towns.map((t) => t.id === trSwapped.id ?
        trSwapped :
        t.id === wtrSwapped.id ?
          wtrSwapped :
          t,
      ) as Town[],
    };
  }

  return game;
};

export const dismissGameHero = (game: Game, hero: string): Game => ({
  ...game,
  heroes: game.heroes.filter((h) => h.id !== hero),
});

export const dismissGameHeroTroop = (game: Game, hero: string, index: number): Game => ({
  ...game,
  heroes: game.heroes.map((h) => h.id === hero ? dismissHeroTroop(h, index) : h),
});

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
