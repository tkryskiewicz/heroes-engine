import { connect } from "react-redux";
import { Dispatch } from "redux";

import { PuzzleWindow, PuzzleWindowProps } from "heroes-homm1-react";
import { AppState, puzzleWindowActions } from "heroes-homm1-state";

type StateProp =
  "discoveredPieces";

const mapStateToProps = (state: AppState): Pick<PuzzleWindowProps, StateProp> => ({
  discoveredPieces: state.game.discoveredPuzzlePieces,
});

type DispatchProp =
  "onExitClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<PuzzleWindowProps, DispatchProp> => ({
  onExitClick() {
    dispatch(puzzleWindowActions.close());
  },
});

const PuzzleWindowConnected = connect(mapStateToProps, mapDispatchToProps)(PuzzleWindow);

type PuzzleWindowConnectedProps = ExtractProps<typeof PuzzleWindowConnected>;

export {
  PuzzleWindowConnected as PuzzleWindow,
  PuzzleWindowConnectedProps as PuzzleWindowProps,
};
