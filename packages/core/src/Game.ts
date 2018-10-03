import { Hero, swapHeroTroops } from "./Hero";
import { Town } from "./Town";

export interface Game {
  heroes: Hero[];
  towns: Town[];
}

export const swapGameHeroTroops = (game: Game, hero: string, index: number, withIndex: number): Game => ({
  ...game,
  heroes: game.heroes.map((h) => h.id === hero ? swapHeroTroops(h, index, withIndex) : h),
});

export const dismissGameHero = (game: Game, hero: string): Game => ({
  ...game,
  heroes: game.heroes.filter((h) => h.id !== hero),
});
