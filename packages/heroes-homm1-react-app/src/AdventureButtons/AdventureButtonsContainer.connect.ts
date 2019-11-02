import { connect } from "react-redux";
import { Dispatch } from "redux";

import { getGameHeroes } from "heroes-homm1";
import {
  adventureWindowActions,
  AppState,
  gameActions,
  locatorsActions,
  statusWindowActions,
  StatusWindowOption,
} from "heroes-homm1-state";

import { AdventureButtonsContainer, AdventureButtonsContainerProps } from "./AdventureButtonsContainer";

type StateProp =
  "heroes" |
  "activeObjectId" |
  "endTurnPromptVisible";

const mapStateToProps = (state: AppState): Pick<AdventureButtonsContainerProps, StateProp> => ({
  activeObjectId: state.locators.activeObjectId,
  endTurnPromptVisible: state.adventureWindow.endTurnPromptVisible,
  heroes: getGameHeroes(state.game),
});

type DispatchProp =
  "onNextHeroClick" |
  "onEndTurnClick" |
  "onConfirmEndTurnClick" |
  "onCancelEndTurnClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<AdventureButtonsContainerProps, DispatchProp> => ({
  onNextHeroClick(id) {
    dispatch(locatorsActions.selectActiveObject(id));

    dispatch(statusWindowActions.changeSelectedOption(StatusWindowOption.HeroStatus));
  },
  onEndTurnClick() {
    dispatch(adventureWindowActions.changeEndTurnPromptVisible(true));
  },
  onConfirmEndTurnClick() {
    dispatch(adventureWindowActions.changeEndTurnPromptVisible(false));

    dispatch(gameActions.endTurn());
    dispatch(gameActions.startTurn());

    dispatch(statusWindowActions.changeSelectedOption(StatusWindowOption.DateInformation));
  },
  onCancelEndTurnClick() {
    dispatch(adventureWindowActions.changeEndTurnPromptVisible(false));
  },
});

const ContainerConnected = connect(mapStateToProps, mapDispatchToProps)(AdventureButtonsContainer);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as AdventureButtons,
  ContainerConnectedProps as AdventureButtonsProps,
};
