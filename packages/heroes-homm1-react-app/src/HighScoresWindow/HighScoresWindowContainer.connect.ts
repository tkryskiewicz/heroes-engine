import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, highScoresWindowActions } from "heroes-homm1-state";

import { HighScoresWindowContainer, HighScoresWindowContainerProps } from "./HighScoresWindowContainer";

type StateProp =
  "scores" |
  "gameType";

export const mapStateToProps = (state: AppState): Required<Pick<HighScoresWindowContainerProps, StateProp>> => ({
  gameType: state.highScoresWindow.gameType,
  scores: state.highScoresWindow.scores,
});

type DispatchProp =
  "onGameTypeChange";

export const mapDispatchToProps = (
  dispatch: Dispatch,
): Required<Pick<HighScoresWindowContainerProps, DispatchProp>> => ({
  onGameTypeChange(value) {
    dispatch(highScoresWindowActions.changeGameType(value));
  },
});

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(HighScoresWindowContainer);

type ConnectedComponentProps = ExtractProps<typeof ConnectedComponent>;

export {
  ConnectedComponent as HighScoresWindow,
  ConnectedComponentProps as HighScoresWindowProps,
};
