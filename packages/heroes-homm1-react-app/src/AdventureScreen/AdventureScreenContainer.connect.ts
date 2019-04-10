import { connect } from "react-redux";

import { getGameHeroes } from "heroes-homm1";
import { AppState } from "heroes-homm1-state";

import { AdventureScreenContainer, AdventureScreenContainerProps } from "./AdventureScreenContainer";

type StateProp =
  "heroes" |
  "adventureOptionsVisible" |
  "gameOptionsVisible" |
  "kingdomOverviewWindowVisible" |
  "puzzleWindowVisible" |
  "scenarioInfoWindowVisible";

const mapStateToProps = (state: AppState): Pick<AdventureScreenContainerProps, StateProp> => ({
  adventureOptionsVisible: state.adventureOptions.visible,
  gameOptionsVisible: state.gameOptions.visible,
  heroes: getGameHeroes(state.game),
  kingdomOverviewWindowVisible: state.kingdomOverviewWindow.visible,
  puzzleWindowVisible: state.puzzleWindow.visible,
  scenarioInfoWindowVisible: state.scenarioInfoWindow.visible,
});

const ContainerConnected = connect(mapStateToProps)(AdventureScreenContainer);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as AdventureScreen,
  ContainerConnectedProps as AdventureScreenProps,
};
