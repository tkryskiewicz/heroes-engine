import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, heroWindowActions, Locator, locatorsActions, LocatorType } from "heroes-homm1-state";

import { HeroLocatorsContainer, HeroLocatorsContainerProps } from "./HeroLocatorsContainer";

type StateProp =
  "heroes" |
  "selectedIndex" |
  "heroWindowVisible";

const mapStateToProps = (state: AppState): Pick<HeroLocatorsContainerProps, StateProp> => {
  const { selectedLocator } = state.locators;

  return {
    heroWindowVisible: state.heroWindow.heroIndex !== undefined,
    heroes: state.game.heroes,
    selectedIndex: selectedLocator && selectedLocator.type === LocatorType.Hero ? selectedLocator.index : undefined,
  };
};

type DispatchProp =
  "onSelectLocator" |
  "onSelectedLocatorClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<HeroLocatorsContainerProps, DispatchProp> => ({
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

const HeroLocatorsContainerConnected = connect(mapStateToProps, mapDispatchToProps)(HeroLocatorsContainer);

type HeroLocatorsContainerConnectedProps = ExtractProps<typeof HeroLocatorsContainerConnected>;

export {
  HeroLocatorsContainerConnected as HeroLocators,
  HeroLocatorsContainerConnectedProps as HeroLocatorsProps,
};
