import { connect } from "react-redux";

import { PuzzleWindow, PuzzleWindowProps } from "heroes-homm1-react";
import { AppState } from "heroes-homm1-state";

type StateProp =
  "discoveredPieces";

const mapStateToProps = (state: AppState): Pick<PuzzleWindowProps, StateProp> => ({
  discoveredPieces: state.game.puzzle.uncoveredPieces,
});

const ComponentConnected = connect(mapStateToProps)(PuzzleWindow);

type ComponentConnectedProps = ExtractProps<typeof ComponentConnected>;

export {
  ComponentConnected as PuzzleWindow,
  ComponentConnectedProps as PuzzleWindowProps,
};
