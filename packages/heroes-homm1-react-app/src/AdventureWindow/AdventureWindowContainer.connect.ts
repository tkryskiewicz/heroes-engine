import { connect } from "react-redux";

import { AppState } from "heroes-homm1-state";

import { AdventureWindow, AdventureWindowProps } from "./AdventureWindowContainer";

type StateProp =
  "map" |
  "heroes" |
  "towns" |
  "selectedLocator" |
  "heroTradingScreenVisible";

const mapStateToProps = (state: AppState): Pick<AdventureWindowProps, StateProp> => ({
  heroTradingScreenVisible: state.adventureScreen.heroTradingWindowVisible,
  heroes: state.game.heroes,
  map: state.game.map,
  selectedLocator: state.locators.selectedLocator,
  towns: state.game.towns,
});

const ContainerConnected = connect(mapStateToProps)(AdventureWindow);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as AdventureWindow,
  ContainerConnectedProps as AdventureWindowProps,
};
