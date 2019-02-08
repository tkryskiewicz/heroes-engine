import { connect } from "react-redux";

import { AppState } from "heroes-homm1-state";

import { AdventureScreenContainer, AdventureScreenContainerProps } from "./AdventureScreenContainer";

type StateProp =
  "heroes" |
  "adventureOptionsVisible" |
  "gameOptionsVisible" |
  "heroWindowVisible" |
  "kingdomOverviewWindowVisible" |
  "puzzleWindowVisible" |
  "scenarioInfoWindowVisible" |
  "townWindowVisible";

const mapStateToProps = (state: AppState): Pick<AdventureScreenContainerProps, StateProp> => ({
  adventureOptionsVisible: state.adventureOptions.visible,
  gameOptionsVisible: state.gameOptions.visible,
  heroWindowVisible: state.heroWindow.heroIndex !== undefined,
  heroes: state.game.heroes,
  kingdomOverviewWindowVisible: state.kingdomOverviewWindow.visible,
  puzzleWindowVisible: state.puzzleWindow.visible,
  scenarioInfoWindowVisible: state.scenarioInfoWindow.visible,
  townWindowVisible: state.townWindow.townIndex !== undefined,
});

const AdventureScreenConnected = connect(mapStateToProps)(AdventureScreenContainer);

type AdventureScreenConnectedProps = ExtractProps<typeof AdventureScreenConnected>;

export {
  AdventureScreenConnected as AdventureScreen,
  AdventureScreenConnectedProps as AdventureScreenProps,
};
