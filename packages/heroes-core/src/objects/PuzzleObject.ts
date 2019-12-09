import { GameObjectData } from "../GameObject";

// TODO: should this be in core??
export interface PuzzleObjectData extends GameObjectData {
  readonly uncoversPuzzlePiece: true;
}

export const isPuzzleObjectData = (objectData: GameObjectData): objectData is PuzzleObjectData =>
  (objectData as PuzzleObjectData).uncoversPuzzlePiece === true;
