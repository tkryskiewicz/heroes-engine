import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, closeTownWindow, openStructureDetails } from "heroes-homm1-state";

import { TownWindow, TownWindowProps } from "./TownWindow";

type StateProp =
  "town" |
  "resources" |
  "visibleStructureDetails";

const mapStateToProps = (state: AppState): Pick<TownWindowProps, StateProp> => ({
  resources: state.game.resources,
  town: state.game.towns[state.locators.selectedLocator!.index],
  visibleStructureDetails: state.townWindow.visibleStructureDetails,
});

type DispatchProp =
  "onOpenStructureDetails" |
  "onExitClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<TownWindowProps, DispatchProp> => ({
  onOpenStructureDetails(structure) {
    dispatch(openStructureDetails(structure));
  },
  onExitClick() {
    dispatch(closeTownWindow());
  },
});

export const TownWindowConnected = connect(mapStateToProps, mapDispatchToProps)(TownWindow);
