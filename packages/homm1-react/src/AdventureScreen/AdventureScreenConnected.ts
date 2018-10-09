import { connect } from "react-redux";

import { AppState } from "heroes-homm1-state";

import { AdventureScreen, AdventureScreenProps } from "./AdventureScreen";

const mapStateToProps = (state: AppState): AdventureScreenProps => ({
  heroWindowVisible: state.heroWindow.visible,
  kingdomOverviewWindowVisible: state.kingdomOverviewWindow.visible,
  townWindowVisible: state.townWindow.visible,
});

export const AdventureScreenConnected = connect(mapStateToProps)(AdventureScreen);
