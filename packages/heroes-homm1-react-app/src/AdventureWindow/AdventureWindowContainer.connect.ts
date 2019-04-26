import { connect } from "react-redux";

import { AppState } from "heroes-homm1-state";

import { AdventureWindow, AdventureWindowProps } from "./AdventureWindowContainer";

type StateProp =
  "data" |
  "alignment" |
  "map" |
  "x" |
  "y" |
  "activeObjectId" |
  "visibleMapObjectDetails" |
  "heroTradingScreenVisible";

const mapStateToProps = (state: AppState): Pick<AdventureWindowProps, StateProp> => ({
  activeObjectId: state.locators.activeObjectId,
  alignment: state.game.alignment,
  data: state.game.data,
  heroTradingScreenVisible: state.adventureScreen.heroTradingWindowVisible,
  map: state.game.map,
  visibleMapObjectDetails: state.adventureScreen.visibleMapObjectDetails,
  x: state.adventureScreen.x,
  y: state.adventureScreen.y,
});

const ContainerConnected = connect(mapStateToProps)(AdventureWindow);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as AdventureWindow,
  ContainerConnectedProps as AdventureWindowProps,
};
