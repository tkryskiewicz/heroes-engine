import { connect } from "react-redux";

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
  heroes: state.game.heroes,
  kingdomOverviewWindowVisible: state.kingdomOverviewWindow.visible,
  puzzleWindowVisible: state.puzzleWindow.visible,
  scenarioInfoWindowVisible: state.scenarioInfoWindow.visible,
});

const AdventureScreenConnected = connect(mapStateToProps)(AdventureScreenContainer);

type AdventureScreenConnectedProps = ExtractProps<typeof AdventureScreenConnected>;

export {
  AdventureScreenConnected as AdventureScreen,
  AdventureScreenConnectedProps as AdventureScreenProps,
};
