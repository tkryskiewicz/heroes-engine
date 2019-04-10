import { connect } from "react-redux";
import { Dispatch } from "redux";

import { getGameHeroes } from "heroes-homm1";
import { AppState, Locator, locatorsActions, LocatorType } from "heroes-homm1-state";

import { HeroLocatorsContainer, HeroLocatorsContainerProps } from "./HeroLocatorsContainer";

type StateProp =
  "heroes" |
  "selectedIndex" |
  "locatorDetailsVisible";

const mapStateToProps = (state: AppState): Pick<HeroLocatorsContainerProps, StateProp> => {
  const { selectedLocator } = state.locators;

  return {
    heroes: getGameHeroes(state.game),
    locatorDetailsVisible: state.locators.locatorDetailsVisible,
    selectedIndex: selectedLocator && selectedLocator.type === LocatorType.Hero ? selectedLocator.index : undefined,
  };
};

type DispatchProp =
  "onSelectLocatorClick" |
  "onOpenLocatorDetailsClick" |
  "onConfirmDismissHeroClick" |
  "onCloseLocatorDetailsClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<HeroLocatorsContainerProps, DispatchProp> => ({
  onSelectLocatorClick(index) {
    const locator: Locator = {
      index,
      type: LocatorType.Hero,
    };

    dispatch(locatorsActions.selectLocator(locator));
  },
  onOpenLocatorDetailsClick() {
    dispatch(locatorsActions.openLocatorDetails());
  },
  onConfirmDismissHeroClick() {
    dispatch(locatorsActions.closeLocatorDetails());
    dispatch(locatorsActions.deselectLocator());
  },
  onCloseLocatorDetailsClick() {
    dispatch(locatorsActions.closeLocatorDetails());
  },
});

const ContainerConnected = connect(mapStateToProps, mapDispatchToProps)(HeroLocatorsContainer);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as HeroLocators,
  ContainerConnectedProps as HeroLocatorsProps,
};
