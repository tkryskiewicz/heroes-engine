import { Item } from "../Item";
import { MapObjectData } from "./MapObject";

export interface ArtifactMapObjectData extends MapObjectData {
  readonly artifact: string;
}

export const isArtifactMapObjectData = (objectData: MapObjectData): objectData is ArtifactMapObjectData =>
  (objectData as ArtifactMapObjectData).artifact !== undefined;

export const constructArtifactMapObjectArtifact = (objectData: ArtifactMapObjectData): Item => ({
  data: {},
  id: objectData.artifact,
});
