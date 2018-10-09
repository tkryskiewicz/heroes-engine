import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, Locator, LocatorType, openTownWindow, selectLocator } from "heroes-homm1-state";

import { TownLocators, TownLocatorsProps } from "./TownLocators";

const mapStateToProps = (state: AppState): TownLocatorsProps => {
  const { selectedLocator } = state.locators;

  return {
    selectedIndex: selectedLocator && selectedLocator.type === LocatorType.Town ? selectedLocator.index : undefined,
    towns: state.game.towns,
  };
};

type DispatchProp =
  "onSelectLocator" |
  "onSelectedLocatorClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<TownLocatorsProps, DispatchProp> => ({
  onSelectLocator(index) {
    const locator: Locator = {
      index,
      type: LocatorType.Town,
    };

    dispatch(selectLocator(locator));
  },
  onSelectedLocatorClick() {
    dispatch(openTownWindow());
  },
});

export const TownLocatorsConnected = connect(mapStateToProps, mapDispatchToProps)(TownLocators);
