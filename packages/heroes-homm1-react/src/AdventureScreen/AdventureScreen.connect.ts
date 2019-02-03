import { connect } from "react-redux";
import { Dispatch } from "redux";

import { adventureScreenActions, AppState, gameActions } from "heroes-homm1-state";

import { AdventureScreen, AdventureScreenProps } from "./AdventureScreen";

type StateProp =
  "heroes" |
  "adventureOptionsVisible" |
  "gameOptionsVisible" |
  "heroWindowVisible" |
  "kingdomOverviewWindowVisible" |
  "puzzleWindowVisible" |
  "scenarioInfoWindowVisible" |
  "townWindowVisible" |
  "endTurnPromptVisible";

const mapStateToProps = (state: AppState): Pick<AdventureScreenProps, StateProp> => ({
  adventureOptionsVisible: state.adventureOptions.visible,
  endTurnPromptVisible: state.adventureScreen.endTurnPromptVisible,
  gameOptionsVisible: state.gameOptions.visible,
  heroWindowVisible: state.heroWindow.heroIndex !== undefined,
  heroes: state.game.heroes,
  kingdomOverviewWindowVisible: state.kingdomOverviewWindow.visible,
  puzzleWindowVisible: state.puzzleWindow.visible,
  scenarioInfoWindowVisible: state.scenarioInfoWindow.visible,
  townWindowVisible: state.townWindow.townIndex !== undefined,
});

type DispatchProp =
  "onEndTurnPromptVisibleChange" |
  "onEndTurn";

const mapDispatchToProps = (dispatch: Dispatch): Pick<AdventureScreenProps, DispatchProp> => ({
  onEndTurnPromptVisibleChange(value: boolean) {
    dispatch(adventureScreenActions.changeEndTurnPromptVisible(value));
  },
  onEndTurn() {
    dispatch(adventureScreenActions.changeEndTurnPromptVisible(false));

    dispatch(gameActions.endTurn());
  },
});

const AdventureScreenConnected = connect(mapStateToProps, mapDispatchToProps)(AdventureScreen);

type AdventureScreenConnectedProps = ExtractProps<typeof AdventureScreenConnected>;

export {
  AdventureScreenConnected as AdventureScreen,
  AdventureScreenConnectedProps as AdventureScreenProps,
};
