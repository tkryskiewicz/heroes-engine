import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, Locator, LocatorType, openHeroWindow, selectLocator } from "heroes-homm1-state";

import { HeroLocators, HeroLocatorsProps } from "./HeroLocators";

type StateProp =
  "heroes" |
  "selectedIndex";

const mapStateToProps = (state: AppState): Pick<HeroLocatorsProps, StateProp> => {
  const { selectedLocator } = state.locators;

  return {
    heroes: state.game.heroes,
    selectedIndex: selectedLocator && selectedLocator.type === LocatorType.Hero ? selectedLocator.index : undefined,
  };
};

type DispatchProp =
  "onSelectLocator" |
  "onSelectedLocatorClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<HeroLocatorsProps, DispatchProp> => ({
  onSelectLocator(index) {
    const locator: Locator = {
      index,
      type: LocatorType.Hero,
    };

    dispatch(selectLocator(locator));
  },
  onSelectedLocatorClick() {
    dispatch(openHeroWindow());
  },
});

const HeroLocatorsConnected = connect(mapStateToProps, mapDispatchToProps)(HeroLocators);

export {
  HeroLocatorsConnected as HeroLocators,
  HeroLocatorsProps,
};
