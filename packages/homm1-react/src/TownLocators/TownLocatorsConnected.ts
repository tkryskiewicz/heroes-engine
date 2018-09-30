import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, Locator, LocatorType, selectLocator } from "heroes-homm1-state";

import { TownLocators, TownLocatorsProps } from "./TownLocators";

const mapStateToProps = (state: AppState): TownLocatorsProps => {
  const { selectedLocator } = state.locators;

  return {
    selectedIndex: selectedLocator && selectedLocator.type === LocatorType.Town ? selectedLocator.index : undefined,
    towns: state.game.towns,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): Pick<TownLocatorsProps, "onSelectLocator"> => ({
  onSelectLocator(index) {
    const locator: Locator = {
      index,
      type: LocatorType.Town,
    };

    dispatch(selectLocator(locator));
  },
});

export const TownLocatorsConnected = connect(mapStateToProps, mapDispatchToProps)(TownLocators);
