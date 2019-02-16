import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, Locator, locatorsActions, LocatorType } from "heroes-homm1-state";

import { HeroLocatorsContainer, HeroLocatorsContainerProps } from "./HeroLocatorsContainer";

type StateProp =
  "heroes" |
  "selectedIndex" |
  "heroDetailsVisible";

const mapStateToProps = (state: AppState): Pick<HeroLocatorsContainerProps, StateProp> => {
  const { selectedLocator } = state.locators;

  return {
    heroDetailsVisible: state.locators.heroDetailsVisible,
    heroes: state.game.heroes,
    selectedIndex: selectedLocator && selectedLocator.type === LocatorType.Hero ? selectedLocator.index : undefined,
  };
};

type DispatchProp =
  "onSelectLocator" |
  "onOpenHeroDetailsClick" |
  "onCloseHeroDetailsClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<HeroLocatorsContainerProps, DispatchProp> => ({
  onSelectLocator(index) {
    const locator: Locator = {
      index,
      type: LocatorType.Hero,
    };

    dispatch(locatorsActions.selectLocator(locator));
  },
  onOpenHeroDetailsClick() {
    dispatch(locatorsActions.openHeroDetails());
  },
  onCloseHeroDetailsClick() {
    dispatch(locatorsActions.closeHeroDetails());
  },
});

const HeroLocatorsContainerConnected = connect(mapStateToProps, mapDispatchToProps)(HeroLocatorsContainer);

type HeroLocatorsContainerConnectedProps = ExtractProps<typeof HeroLocatorsContainerConnected>;

export {
  HeroLocatorsContainerConnected as HeroLocators,
  HeroLocatorsContainerConnectedProps as HeroLocatorsProps,
};
