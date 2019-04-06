import { Artifact, ArtifactSelection } from "../Artifact";
import { getObject, Map, replaceObject } from "./Map";
import { isMapObject, MapObject } from "./MapObject";

export interface EquipableMapObject extends MapObject {
  readonly artifacts: Array<Artifact | undefined>;
}

export const isEquipableMapObject = (object: MapObject | undefined): object is EquipableMapObject =>
  isMapObject(object) && (object as EquipableMapObject).artifacts !== undefined;

export const addEquipableMapObjectItem = (map: Map, objectId: string, artifact: Artifact): Map => {
  const object = getObject(map, objectId);

  if (!isEquipableMapObject(object)) {
    throw new Error(`${objectId} is not an equipable object`);
  }

  // TODO: handle no free slot
  const objectResult: EquipableMapObject = {
    ...object,
    artifacts: [
      ...object.artifacts,
      artifact,
    ],
  };

  return replaceObject(map, objectResult);
};

export const hasEquipableMapObjectItem = (object: EquipableMapObject, artifact: string): boolean =>
  object.artifacts.some((a) => a !== undefined && a.id === artifact);

export const tradeEquipableMapObjectItems = (
  map: Map,
  artifact: ArtifactSelection,
  withArtifact: ArtifactSelection,
): Map => {
  const object = getObject(map, artifact.hero);

  if (!isEquipableMapObject(object)) {
    throw new Error(`${artifact.hero} is not an equipable object`);
  }

  const withObject = getObject(map, withArtifact.hero);

  if (!isEquipableMapObject(withObject)) {
    throw new Error(`${withArtifact.hero} is not an equipable object`);
  }

  const artifacts = [...object.artifacts];

  const withArtifacts = artifact.hero === withArtifact.hero ?
    artifacts :
    [...withObject.artifacts];

  artifacts[artifact.index] = withObject.artifacts[withArtifact.index];
  withArtifacts[withArtifact.index] = object.artifacts[artifact.index];

  const objectResult: EquipableMapObject = {
    ...object,
    artifacts,
  };

  const withObjectResult: EquipableMapObject = {
    ...withObject,
    artifacts: withArtifacts,
  };

  return replaceObject(replaceObject(map, objectResult), withObjectResult);
};
