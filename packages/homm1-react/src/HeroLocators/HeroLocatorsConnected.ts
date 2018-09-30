import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, Locator, LocatorType, selectLocator } from "heroes-homm1-state";

import { HeroLocators, HeroLocatorsProps } from "./HeroLocators";

const mapStateToProps = (state: AppState): HeroLocatorsProps => {
  const { selectedLocator } = state.locators;

  return {
    heroes: state.game.heroes,
    selectedIndex: selectedLocator && selectedLocator.type === LocatorType.Hero ? selectedLocator.index : undefined,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): Pick<HeroLocatorsProps, "onSelectLocator"> => ({
  onSelectLocator(index) {
    const locator: Locator = {
      index,
      type: LocatorType.Hero,
    };

    dispatch(selectLocator(locator));
  },
});

export const HeroLocatorsConnected = connect(mapStateToProps, mapDispatchToProps)(HeroLocators);
