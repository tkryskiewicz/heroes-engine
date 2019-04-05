import { connect } from "react-redux";
import { Dispatch } from "redux";

import { getGameHeroes } from "heroes-core";
import {
  adventureOptionsActions,
  adventureScreenActions,
  AppState,
  gameActions,
  gameOptionsActions,
  kingdomOverviewWindowActions,
  Locator,
  locatorsActions,
  LocatorType,
} from "heroes-homm1-state";

import { AdventureButtonsContainer, AdventureButtonsContainerProps } from "./AdventureButtonsContainer";

type StateProp =
  "heroes" |
  "selectedIndex" |
  "endTurnPromptVisible";

const mapStateToProps = (state: AppState): Pick<AdventureButtonsContainerProps, StateProp> => {
  const { selectedLocator } = state.locators;

  return {
    endTurnPromptVisible: state.adventureScreen.endTurnPromptVisible,
    heroes: getGameHeroes(state.game),
    selectedIndex: selectedLocator && selectedLocator.type === LocatorType.Hero ?
      selectedLocator.index :
      undefined,
  };
};

type DispatchProp =
  "onNextHeroClick" |
  "onKingdomOverviewClick" |
  "onEndTurnPromptVisibleChange" |
  "onEndTurn" |
  "onAdventureOptionsClick" |
  "onGameOptionsClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<AdventureButtonsContainerProps, DispatchProp> => ({
  onNextHeroClick(index) {
    const locator: Locator = {
      index,
      type: LocatorType.Hero,
    };

    dispatch(locatorsActions.selectLocator(locator));
  },
  onKingdomOverviewClick() {
    dispatch(kingdomOverviewWindowActions.open());
  },
  onEndTurnPromptVisibleChange(value: boolean) {
    dispatch(adventureScreenActions.changeEndTurnPromptVisible(value));
  },
  onEndTurn() {
    dispatch(adventureScreenActions.changeEndTurnPromptVisible(false));

    dispatch(gameActions.endTurn());
    dispatch(gameActions.startTurn());
  },
  onAdventureOptionsClick() {
    dispatch(adventureOptionsActions.open());
  },
  onGameOptionsClick() {
    dispatch(gameOptionsActions.open());
  },
});

const ContainerConnected = connect(mapStateToProps, mapDispatchToProps)(AdventureButtonsContainer);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as AdventureButtons,
  ContainerConnectedProps as AdventureButtonsProps,
};
