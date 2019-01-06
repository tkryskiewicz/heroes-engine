import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, endTurn } from "heroes-homm1-state";

import { AdventureScreen, AdventureScreenProps } from "./AdventureScreen";

type StateProp =
  "adventureOptionsVisible" |
  "gameOptionsVisible" |
  "heroWindowVisible" |
  "kingdomOverviewWindowVisible" |
  "puzzleWindowVisible" |
  "scenarioInfoWindowVisible" |
  "townWindowVisible";

const mapStateToProps = (state: AppState): Pick<AdventureScreenProps, StateProp> => ({
  adventureOptionsVisible: state.adventureOptions.visible,
  gameOptionsVisible: state.gameOptions.visible,
  heroWindowVisible: state.heroWindow.visible,
  kingdomOverviewWindowVisible: state.kingdomOverviewWindow.visible,
  puzzleWindowVisible: state.puzzleWindow.visible,
  scenarioInfoWindowVisible: state.scenarioInfoWindow.visible,
  townWindowVisible: state.townWindow.visible,
});

type DispatchProp =
  "onEndTurn";

const mapDispatchToProps = (dispatch: Dispatch): Pick<AdventureScreenProps, DispatchProp> => ({
  onEndTurn() {
    dispatch(endTurn());
  },
});

export const AdventureScreenConnected = connect(mapStateToProps, mapDispatchToProps)(AdventureScreen);
