import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  AppState,
  gameOptionsActions,
  Locator,
  LocatorType,
  openAdventureOptions,
  openKingdomOverviewWindow,
  selectLocator,
} from "heroes-homm1-state";

import { AdventureButtons, AdventureButtonsProps } from "./AdventureButtons";

type StateProp =
  "heroes" |
  "selectedIndex";

const mapStateToProps = (state: AppState): Pick<AdventureButtonsProps, StateProp> => {
  const { selectedLocator } = state.locators;

  return {
    heroes: state.game.heroes,
    selectedIndex: selectedLocator && selectedLocator.type === LocatorType.Hero ?
      selectedLocator.index :
      undefined,
  };
};

type DispatchProp =
  "onSelectHero" |
  "onKingdomOverviewClick" |
  "onAdventureOptionsClick" |
  "onGameOptionsClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<AdventureButtonsProps, DispatchProp> => ({
  onSelectHero(index) {
    const locator: Locator = {
      index,
      type: LocatorType.Hero,
    };

    dispatch(selectLocator(locator));
  },
  onKingdomOverviewClick() {
    dispatch(openKingdomOverviewWindow());
  },
  onAdventureOptionsClick() {
    dispatch(openAdventureOptions());
  },
  onGameOptionsClick() {
    dispatch(gameOptionsActions.open());
  },
});

const AdventureButtonsConnected = connect(mapStateToProps, mapDispatchToProps)(AdventureButtons);

export {
  AdventureButtonsConnected as AdventureButtons,
  AdventureButtonsProps,
};
