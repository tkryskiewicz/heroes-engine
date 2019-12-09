import { MapObjectData } from "../map";

// TODO: should this be in core??
export interface PuzzleMapObjectData extends MapObjectData {
  readonly uncoversPuzzlePiece: true;
}

export const isPuzzleMapObjectData = (objectData: MapObjectData): objectData is PuzzleMapObjectData =>
  (objectData as PuzzleMapObjectData).uncoversPuzzlePiece === true;
