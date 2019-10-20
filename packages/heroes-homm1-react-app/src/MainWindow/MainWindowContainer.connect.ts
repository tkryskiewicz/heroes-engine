import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, mainWindowActions } from "heroes-homm1-state";

import { MainWindowContainer, MainWindowContainerProps } from "./MainWindowContainer";

type StateProp =
  "creditsVisible";

export const mapStateToProps = (state: AppState): Required<Pick<MainWindowContainerProps, StateProp>> => ({
  creditsVisible: state.mainWindow.creditsVisible,
});

type DispatchProp =
  "onOpenCreditsClick" |
  "onCloseCreditsClick";

export const mapDispatchToProps = (dispatch: Dispatch): Required<Pick<MainWindowContainerProps, DispatchProp>> => ({
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
