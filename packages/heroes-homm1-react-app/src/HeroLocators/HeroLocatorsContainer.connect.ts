import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, Locator, locatorsActions, LocatorType } from "heroes-homm1-state";

import { HeroLocatorsContainer, HeroLocatorsContainerProps } from "./HeroLocatorsContainer";

type StateProp =
  "heroes" |
  "selectedIndex" |
  "locatorDetailsVisible";

const mapStateToProps = (state: AppState): Pick<HeroLocatorsContainerProps, StateProp> => {
  const { selectedLocator } = state.locators;

  return {
    heroes: state.game.heroes,
    locatorDetailsVisible: state.locators.locatorDetailsVisible,
    selectedIndex: selectedLocator && selectedLocator.type === LocatorType.Hero ? selectedLocator.index : undefined,
  };
};

type DispatchProp =
  "onSelectLocator" |
  "onOpenHeroDetailsClick" |
  "onConfirmDismissHeroClick" |
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
    dispatch(locatorsActions.openLocatorDetails());
  },
  onConfirmDismissHeroClick() {
    dispatch(locatorsActions.closeLocatorDetails());
    dispatch(locatorsActions.deselectLocator());
  },
  onCloseHeroDetailsClick() {
    dispatch(locatorsActions.closeLocatorDetails());
  },
});

const ContainerConnected = connect(mapStateToProps, mapDispatchToProps)(HeroLocatorsContainer);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as HeroLocators,
  ContainerConnectedProps as HeroLocatorsProps,
};
