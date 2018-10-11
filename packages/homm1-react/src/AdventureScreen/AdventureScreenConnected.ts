import { connect } from "react-redux";

import { AppState } from "heroes-homm1-state";

import { AdventureScreen, AdventureScreenProps } from "./AdventureScreen";

const mapStateToProps = (state: AppState): AdventureScreenProps => ({
  adventureOptionsVisible: state.adventureOptions.visible,
  gameOptionsVisible: state.gameOptions.visible,
  heroWindowVisible: state.heroWindow.visible,
  kingdomOverviewWindowVisible: state.kingdomOverviewWindow.visible,
  puzzleWindowVisible: state.puzzleWindow.visible,
  townWindowVisible: state.townWindow.visible,
});

export const AdventureScreenConnected = connect(mapStateToProps)(AdventureScreen);
