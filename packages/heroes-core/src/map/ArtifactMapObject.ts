import { Artifact } from "../Artifact";
import { MapObjectData } from "./MapObject";

export interface ArtifactMapObjectData extends MapObjectData {
  readonly artifact: string;
}

export const isArtifactMapObjectData = (objectData: MapObjectData): objectData is ArtifactMapObjectData =>
  (objectData as ArtifactMapObjectData).artifact !== undefined;

export const constructArtifactMapObjectArtifact = (objectData: ArtifactMapObjectData): Artifact => ({
  data: {},
  id: objectData.artifact,
});
