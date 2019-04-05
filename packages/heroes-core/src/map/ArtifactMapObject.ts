import { Artifact } from "../Artifact";
import { Game } from "../Game";
import { addHeroArtifact, Hero } from "../Hero";
import { HeroMapObject, isHeroMapObject } from "./HeroMapObject";
import { getObject, replaceObject } from "./Map";
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
  const object = getObject(game.map, hero.id);

  if (!isHeroMapObject(object)) {
    throw new Error(`${hero.id} is not a hero object`);
  }

  const artifact: Artifact = {
    data: {},
    id: objectData.artifact,
  };

  // TODO: handle no free artifact slot
  const objectResult: HeroMapObject = {
    ...object,
    hero: addHeroArtifact(hero, artifact),
  };

  return {
    ...game,
    map: replaceObject(game.map, objectResult),
  };
};
