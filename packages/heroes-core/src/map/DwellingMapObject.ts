import { MapObject } from "./MapObject";

export const DwellingMapObjectType = "dwelling";

export interface DwellingMapObject extends MapObject {
  readonly type: typeof DwellingMapObjectType;
  readonly id: string;
  readonly creature: string;
  readonly availableCount: number;
}

export const createDwellingMapObject = (id: string, creature: string, availableCount: number): DwellingMapObject => ({
  availableCount,
  creature,
  id,
  type: DwellingMapObjectType,
});
