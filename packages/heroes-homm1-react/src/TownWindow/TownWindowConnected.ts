import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, closeTownWindow } from "heroes-homm1-state";

import { TownWindow, TownWindowProps } from "./TownWindow";

type StateProp =
  "town" |
  "resources";

const mapStateToProps = (state: AppState): Pick<TownWindowProps, StateProp> => ({
  resources: state.game.resources,
  town: state.game.towns[state.locators.selectedLocator!.index],
});

type DispatchProp =
  "onExitClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<TownWindowProps, DispatchProp> => ({
  onExitClick() {
    dispatch(closeTownWindow());
  },
});

export const TownWindowConnected = connect(mapStateToProps, mapDispatchToProps)(TownWindow);
