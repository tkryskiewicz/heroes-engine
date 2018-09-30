import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, Locator, LocatorType, selectLocator } from "heroes-homm1-state";

import { AdventureButtons, AdventureButtonsProps } from "./AdventureButtons";

const mapStateToProps = (state: AppState): Pick<AdventureButtonsProps, "heroes" | "selectedIndex"> => {
  const { selectedLocator } = state.locators;

  return {
    heroes: state.game.heroes,
    selectedIndex: selectedLocator && selectedLocator.type === LocatorType.Hero ?
      selectedLocator.index :
      undefined,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): Pick<AdventureButtonsProps, "onSelectHero"> => ({
  onSelectHero(index) {
    const locator: Locator = {
      index,
      type: LocatorType.Hero,
    };

    dispatch(selectLocator(locator));
  },
});

export const AdventureButtonsConnected = connect(mapStateToProps, mapDispatchToProps)(AdventureButtons);
