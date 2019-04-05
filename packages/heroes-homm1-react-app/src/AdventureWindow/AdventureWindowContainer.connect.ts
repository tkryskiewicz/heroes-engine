import { connect } from "react-redux";

import { getGameHeroes, getGameTowns } from "heroes-core";
import { AppState } from "heroes-homm1-state";

import { AdventureWindow, AdventureWindowProps } from "./AdventureWindowContainer";

type StateProp =
  "mapObjects" |
  "alignment" |
  "map" |
  "heroes" |
  "towns" |
  "selectedLocator" |
  "visibleMapObjectDetails" |
  "heroTradingScreenVisible";

const mapStateToProps = (state: AppState): Pick<AdventureWindowProps, StateProp> => ({
  alignment: state.game.alignment,
  heroTradingScreenVisible: state.adventureScreen.heroTradingWindowVisible,
  heroes: getGameHeroes(state.game),
  map: state.game.map,
  mapObjects: state.game.data.mapObjects,
  selectedLocator: state.locators.selectedLocator,
  towns: getGameTowns(state.game),
  visibleMapObjectDetails: state.adventureScreen.visibleMapObjectDetails,
});

const ContainerConnected = connect(mapStateToProps)(AdventureWindow);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as AdventureWindow,
  ContainerConnectedProps as AdventureWindowProps,
};
