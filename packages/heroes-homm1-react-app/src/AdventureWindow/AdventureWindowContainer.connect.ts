import { connect } from "react-redux";

import { AppState } from "heroes-homm1-state";

import { AdventureWindow, AdventureWindowProps } from "./AdventureWindowContainer";

type StateProp =
  "mapObjects" |
  "map" |
  "heroes" |
  "towns" |
  "selectedLocator" |
  "visibleMapObjectDetails" |
  "heroTradingScreenVisible";

const mapStateToProps = (state: AppState): Pick<AdventureWindowProps, StateProp> => ({
  heroTradingScreenVisible: state.adventureScreen.heroTradingWindowVisible,
  heroes: state.game.heroes,
  map: state.game.map,
  mapObjects: state.game.data.mapObjects,
  selectedLocator: state.locators.selectedLocator,
  towns: state.game.towns,
  visibleMapObjectDetails: state.adventureScreen.visibleMapObjectDetails,
});

const ContainerConnected = connect(mapStateToProps)(AdventureWindow);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as AdventureWindow,
  ContainerConnectedProps as AdventureWindowProps,
};
