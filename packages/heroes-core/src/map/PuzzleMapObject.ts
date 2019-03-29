import { Game } from "../Game";
import { MapObjectData } from "./MapObject";

// TODO: should this be in core??
export interface PuzzleMapObjectData extends MapObjectData {
  readonly uncoversPuzzlePiece: true;
}

export const isPuzzleMapObjectData = (objectData: MapObjectData): objectData is PuzzleMapObjectData =>
  (objectData as PuzzleMapObjectData).uncoversPuzzlePiece === true;

export const handlePuzzleMapObject = (game: Game): Game => ({
  ...game,
  puzzle: {
    ...game.puzzle,
    // TODO: take into account total puzzle objects?
    uncoveredPieces: Math.min(game.puzzle.uncoveredPieces + 1, game.puzzle.totalPieces),
  },
});
