import { connect } from "react-redux";

import { AppState } from "heroes-homm1-state";

import { AdventureMapWindow, AdventureMapWindowProps } from "./AdventureMapWindowContainer";

type StateProp =
  "data" |
  "alignment" |
  "map" |
  "x" |
  "y" |
  "activeObjectId" |
  "visibleMapObjectDetails" |
  "heroTradingScreenVisible";

const mapStateToProps = (state: AppState): Pick<AdventureMapWindowProps, StateProp> => ({
  activeObjectId: state.locators.activeObjectId,
  alignment: state.game.alignment,
  data: state.game.data,
  heroTradingScreenVisible: state.adventureWindow.heroTradingWindowVisible,
  map: state.game.map,
  visibleMapObjectDetails: state.adventureWindow.visibleMapObjectDetails,
  x: state.adventureWindow.x,
  y: state.adventureWindow.y,
});

const ContainerConnected = connect(mapStateToProps)(AdventureMapWindow);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as AdventureMapWindow,
  ContainerConnectedProps as AdventureMapWindowProps,
};
