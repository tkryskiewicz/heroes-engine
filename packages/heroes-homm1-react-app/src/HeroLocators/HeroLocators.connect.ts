import { connect } from "react-redux";
import { Dispatch } from "redux";

import { HeroLocators, HeroLocatorsProps } from "heroes-homm1-react";
import { AppState, heroWindowActions, Locator, locatorsActions, LocatorType } from "heroes-homm1-state";

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

    dispatch(locatorsActions.selectLocator(locator));
  },
  onSelectedLocatorClick(index: number) {
    dispatch(locatorsActions.deselectLocator());

    dispatch(heroWindowActions.open(index));
  },
});

const HeroLocatorsConnected = connect(mapStateToProps, mapDispatchToProps)(HeroLocators);

type HeroLocatorsConnectedProps = ExtractProps<typeof HeroLocatorsConnected>;

export {
  HeroLocatorsConnected as HeroLocators,
  HeroLocatorsConnectedProps as HeroLocatorsProps,
};
