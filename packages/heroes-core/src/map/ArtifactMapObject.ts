import { Artifact } from "../Artifact";
import { Game } from "../Game";
import { Hero } from "../Hero";
import { addEquipableMapObjectItem } from "./EquipableMapObject";
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

  return {
    ...game,
    map: addEquipableMapObjectItem(game.map, hero.id, artifact),
  };
};
