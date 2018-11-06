import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  AppState,
  closeTownWindow,
  openKingdomOverviewWindow,
  openStructureDetails,
  recruitTroop,
} from "heroes-homm1-state";

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
  "onCrestClick" |
  "onOpenStructureDetails" |
  "onRecruitTroop" |
  "onExitClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<TownWindowProps, DispatchProp> => ({
  onCrestClick() {
    dispatch(openKingdomOverviewWindow());
  },
  onOpenStructureDetails(structure) {
    dispatch(openStructureDetails(structure));
  },
  onRecruitTroop(town, structure, count) {
    dispatch(recruitTroop(town, structure, count));
  },
  onExitClick() {
    dispatch(closeTownWindow());
  },
});

export const TownWindowConnected = connect(mapStateToProps, mapDispatchToProps)(TownWindow);
