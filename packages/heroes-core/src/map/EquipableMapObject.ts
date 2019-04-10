import { Item } from "../Item";
import { isMapObject, MapObject } from "./MapObject";

export interface EquipableMapObject extends MapObject {
  readonly artifacts: Array<Item | undefined>;
}

export const isEquipableMapObject = (object: MapObject | undefined): object is EquipableMapObject =>
  isMapObject(object) && (object as EquipableMapObject).artifacts !== undefined;

// TODO: handle no free slot
export const addEquipableMapObjectItem = (object: EquipableMapObject, item: Item): EquipableMapObject => ({
  ...object,
  artifacts: [
    ...object.artifacts,
    item,
  ],
});

export const hasEquipableMapObjectItem = (object: EquipableMapObject, item: string): boolean =>
  object.artifacts.some((a) => a !== undefined && a.id === item);

export const tradeEquipableMapObjectItems = (
  object: EquipableMapObject,
  index: number,
  withObject: EquipableMapObject,
  withIndex: number,
): [EquipableMapObject, EquipableMapObject] => {
  const artifacts = [...object.artifacts];

  const withArtifacts = object.id === withObject.id ?
    artifacts :
    [...withObject.artifacts];

  artifacts[index] = withObject.artifacts[withIndex];
  withArtifacts[withIndex] = object.artifacts[index];

  const objectResult: EquipableMapObject = {
    ...object,
    artifacts,
  };

  const withObjectResult: EquipableMapObject = {
    ...withObject,
    artifacts: withArtifacts,
  };

  return [
    objectResult,
    withObjectResult,
  ];
};
