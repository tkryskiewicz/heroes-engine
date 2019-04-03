import { MapObjectData } from "./MapObject";

export interface CreatureMapObjectData extends MapObjectData {
  readonly creature: string;
}

export const isCreatureMapObjectData = (objectData: MapObjectData): objectData is CreatureMapObjectData =>
  (objectData as CreatureMapObjectData).creature !== undefined;
