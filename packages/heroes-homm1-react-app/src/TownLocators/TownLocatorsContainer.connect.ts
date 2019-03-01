import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, Locator, locatorsActions, LocatorType } from "heroes-homm1-state";

import { TownLocatorsContainer, TownLocatorsContainerProps } from "./TownLocatorsContainer";

type StateProp =
  "towns" |
  "selectedIndex" |
  "locatorDetailsVisible";

const mapStateToProps = (state: AppState): Pick<TownLocatorsContainerProps, StateProp> => {
  const { selectedLocator } = state.locators;

  return {
    locatorDetailsVisible: state.locators.locatorDetailsVisible,
    selectedIndex: selectedLocator && selectedLocator.type === LocatorType.Town ?
      selectedLocator.index :
      undefined,
    towns: state.game.towns,
  };
};

type DispatchProp =
  "onSelectLocatorClick" |
  "onOpenLocatorDetailsClick" |
  "onCloseLocatorDetailsClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<TownLocatorsContainerProps, DispatchProp> => ({
  onSelectLocatorClick(index) {
    const locator: Locator = {
      index,
      type: LocatorType.Town,
    };

    dispatch(locatorsActions.selectLocator(locator));
  },
  onOpenLocatorDetailsClick() {
    dispatch(locatorsActions.openLocatorDetails());
  },
  onCloseLocatorDetailsClick() {
    dispatch(locatorsActions.closeLocatorDetails());

    dispatch(locatorsActions.deselectLocator());
  },
});

const ContainerConnected = connect(mapStateToProps, mapDispatchToProps)(TownLocatorsContainer);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as TownLocators,
  ContainerConnectedProps as TownLocatorsProps,
};
