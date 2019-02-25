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

const ComponentConnected = connect(mapStateToProps, mapDispatchToProps)(PuzzleWindow);

type ComponentConnectedProps = ExtractProps<typeof ComponentConnected>;

export {
  ComponentConnected as PuzzleWindow,
  ComponentConnectedProps as PuzzleWindowProps,
};
