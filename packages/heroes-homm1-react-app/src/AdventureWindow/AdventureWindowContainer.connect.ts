import { connect } from "react-redux";

import { getGameTowns } from "heroes-core";
import { getGameHeroes } from "heroes-homm1";
import { AppState } from "heroes-homm1-state";

import { AdventureWindow, AdventureWindowProps } from "./AdventureWindowContainer";

type StateProp =
  "data" |
  "alignment" |
  "map" |
  "heroes" |
  "towns" |
  "selectedLocator" |
  "visibleMapObjectDetails" |
  "heroTradingScreenVisible";

const mapStateToProps = (state: AppState): Pick<AdventureWindowProps, StateProp> => ({
  alignment: state.game.alignment,
  data: state.game.data,
  heroTradingScreenVisible: state.adventureScreen.heroTradingWindowVisible,
  heroes: getGameHeroes(state.game),
  map: state.game.map,
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
