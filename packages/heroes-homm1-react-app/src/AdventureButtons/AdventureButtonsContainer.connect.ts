import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  adventureOptionsActions,
  AppState,
  gameOptionsActions,
  kingdomOverviewWindowActions,
  Locator,
  locatorsActions,
  LocatorType,
} from "heroes-homm1-state";

import { AdventureButtonsContainer, AdventureButtonsContainerProps } from "./AdventureButtonsContainer";

type StateProp =
  "heroes" |
  "selectedIndex";

const mapStateToProps = (state: AppState): Pick<AdventureButtonsContainerProps, StateProp> => {
  const { selectedLocator } = state.locators;

  return {
    heroes: state.game.heroes,
    selectedIndex: selectedLocator && selectedLocator.type === LocatorType.Hero ?
      selectedLocator.index :
      undefined,
  };
};

type DispatchProp =
  "onNextHeroClick" |
  "onKingdomOverviewClick" |
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
  onAdventureOptionsClick() {
    dispatch(adventureOptionsActions.open());
  },
  onGameOptionsClick() {
    dispatch(gameOptionsActions.open());
  },
});

const AdventureButtonsContainerConnected = connect(mapStateToProps, mapDispatchToProps)(AdventureButtonsContainer);

type AdventureButtonsContainerConnectedProps = ExtractProps<typeof AdventureButtonsContainerConnected>;

export {
  AdventureButtonsContainerConnected as AdventureButtons,
  AdventureButtonsContainerConnectedProps as AdventureButtonsProps,
};
