import { MapObjectData } from "./MapObject";
import { OwnableMapObject, OwnableMapObjectData } from "./OwnableMapObject";

// TODO: should be like resource generator object?
export interface MineMapObjectData extends MapObjectData, OwnableMapObjectData {
  readonly mine: {
    readonly resource: string;
    readonly amount: number;
  };
}

export const isMineMapObjectData = (objectData: MapObjectData): objectData is MineMapObjectData =>
  (objectData as MineMapObjectData).mine !== undefined;

export type MineMapObject = OwnableMapObject;

export const createMineMapObject = (objectData: MineMapObjectData, owner?: string): MineMapObject => ({
  id: objectData.id,
  owner,
});
