import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, mainWindowActions } from "heroes-homm1-state";

import { MainWindowContainer, MainWindowContainerProps } from "./MainWindowContainer";

type StateProp =
  "highScores" |
  "gameType" |
  "highScoresVisible" |
  "creditsVisible";

export const mapStateToProps = (state: AppState): Required<Pick<MainWindowContainerProps, StateProp>> => ({
  creditsVisible: state.mainWindow.creditsVisible,
  gameType: state.mainWindow.gameType,
  highScores: state.mainWindow.highScores,
  highScoresVisible: state.mainWindow.highScoresVisible,
});

type DispatchProp =
  "onGameTypeChange" |
  "onOpenHighScoresClick" |
  "onCloseHighScoresClick" |
  "onOpenCreditsClick" |
  "onCloseCreditsClick";

export const mapDispatchToProps = (dispatch: Dispatch): Required<Pick<MainWindowContainerProps, DispatchProp>> => ({
  onGameTypeChange(value) {
    dispatch(mainWindowActions.changeGameType(value));
  },
  onOpenHighScoresClick() {
    dispatch(mainWindowActions.openHighScores());
  },
  onCloseHighScoresClick() {
    dispatch(mainWindowActions.closeHighScores());
  },
  onOpenCreditsClick() {
    dispatch(mainWindowActions.openCredits());
  },
  onCloseCreditsClick() {
    dispatch(mainWindowActions.closeCredits());
  },
});

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(MainWindowContainer);

type ConnectedComponentProps = ExtractProps<typeof ConnectedComponent>;

export {
  ConnectedComponent as MainWindow,
  ConnectedComponentProps as MainWindowProps,
};
