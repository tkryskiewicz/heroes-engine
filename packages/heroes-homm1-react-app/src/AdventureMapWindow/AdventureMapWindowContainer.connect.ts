import { connect } from "react-redux";

import { AppState } from "heroes-homm1-state";

import { AdventureMapWindow, AdventureMapWindowProps } from "./AdventureMapWindowContainer";

type StateProp =
  "data" |
  "player" |
  "map" |
  "x" |
  "y" |
  "activeObjectId" |
  "visibleObjectDetails" |
  "heroTradingScreenVisible";

const mapStateToProps = (state: AppState): Pick<AdventureMapWindowProps, StateProp> => ({
  activeObjectId: state.locators.activeObjectId,
  data: state.game.data,
  heroTradingScreenVisible: state.adventureWindow.heroTradingWindowVisible,
  map: state.game.map,
  player: state.game.activePlayer,
  visibleObjectDetails: state.adventureWindow.visibleObjectDetails,
  x: state.adventureWindow.x,
  y: state.adventureWindow.y,
});

const ContainerConnected = connect(mapStateToProps)(AdventureMapWindow);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as AdventureMapWindow,
  ContainerConnectedProps as AdventureMapWindowProps,
};
