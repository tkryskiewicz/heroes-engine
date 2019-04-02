import { Artifact } from "../Artifact";
import { Game } from "../Game";
import { addHeroArtifact, Hero } from "../Hero";
import { isHeroMapObject } from "./HeroMapObject";
import { MapObjectData } from "./MapObject";

export interface ArtifactMapObjectData extends MapObjectData {
  readonly artifact: string;
}

export const isArtifactMapObjectData = (objectData: MapObjectData): objectData is ArtifactMapObjectData =>
  (objectData as ArtifactMapObjectData).artifact !== undefined;

export const handleArtifactMapObject = (
  game: Game,
  objectData: ArtifactMapObjectData,
  hero: Hero,
): Game => {
  const artifact: Artifact = {
    data: {},
    id: objectData.artifact,
  };

  // TODO: handle no free artifact slot
  const hh = addHeroArtifact(hero, artifact);

  return {
    ...game,
    heroes: game.heroes.map((h) => h.id === hh.id ? hh : h),
    map: {
      ...game.map,
      tiles: game.map.tiles.map((t) => t.object && isHeroMapObject(t.object) && t.object.id === hero.id ? {
        ...t,
        object: {
          ...t.object,
          hero: hh,
        },
      } : t),
    },
  };
};
