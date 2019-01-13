import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, closePuzzleWindow } from "heroes-homm1-state";

import { PuzzleWindow, PuzzleWindowProps } from "./PuzzleWindow";

type StateProp =
  "discoveredPieces";

const mapStateToProps = (state: AppState): Pick<PuzzleWindowProps, StateProp> => ({
  discoveredPieces: state.game.discoveredPuzzlePieces,
});

type DispatchProp =
  "onExitClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<PuzzleWindowProps, DispatchProp> => ({
  onExitClick() {
    dispatch(closePuzzleWindow());
  },
});

const PuzzleWindowConnected = connect(mapStateToProps, mapDispatchToProps)(PuzzleWindow);

export {
  PuzzleWindowConnected as PuzzleWindow,
  PuzzleWindowProps,
};
