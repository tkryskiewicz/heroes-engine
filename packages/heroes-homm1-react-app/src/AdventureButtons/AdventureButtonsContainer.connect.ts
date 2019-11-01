import { connect } from "react-redux";
import { Dispatch } from "redux";

import { getGameHeroes } from "heroes-homm1";
import {
  adventureOptionsActions,
  adventureScreenActions,
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
  endTurnPromptVisible: state.adventureScreen.endTurnPromptVisible,
  heroes: getGameHeroes(state.game),
});

type DispatchProp =
  "onNextHeroClick" |
  "onEndTurnClick" |
  "onConfirmEndTurnClick" |
  "onCancelEndTurnClick" |
  "onAdventureOptionsClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<AdventureButtonsContainerProps, DispatchProp> => ({
  onNextHeroClick(id) {
    dispatch(locatorsActions.selectActiveObject(id));

    dispatch(statusWindowActions.changeSelectedOption(StatusWindowOption.HeroStatus));
  },
  onEndTurnClick() {
    dispatch(adventureScreenActions.changeEndTurnPromptVisible(true));
  },
  onConfirmEndTurnClick() {
    dispatch(adventureScreenActions.changeEndTurnPromptVisible(false));

    dispatch(gameActions.endTurn());
    dispatch(gameActions.startTurn());

    dispatch(statusWindowActions.changeSelectedOption(StatusWindowOption.DateInformation));
  },
  onCancelEndTurnClick() {
    dispatch(adventureScreenActions.changeEndTurnPromptVisible(false));
  },
  onAdventureOptionsClick() {
    dispatch(adventureOptionsActions.open());
  },
});

const ContainerConnected = connect(mapStateToProps, mapDispatchToProps)(AdventureButtonsContainer);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as AdventureButtons,
  ContainerConnectedProps as AdventureButtonsProps,
};
