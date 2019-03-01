import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, Locator, locatorsActions, LocatorType } from "heroes-homm1-state";

import { TownLocatorsContainer, TownLocatorsContainerProps } from "./TownLocatorsContainer";

type StateProp =
  "towns" |
  "selectedIndex" |
  "locatorDetailsVisible" |
  "onCloseLocatorDetailsClick";

const mapStateToProps = (state: AppState): Pick<TownLocatorsContainerProps, StateProp> => {
  const { selectedLocator } = state.locators;

  return {
    locatorDetailsVisible: state.locators.locatorDetailsVisible,
    selectedIndex: selectedLocator && selectedLocator.type === LocatorType.Town ? selectedLocator.index : undefined,
    towns: state.game.towns,
  };
};

type DispatchProp =
  "onSelectLocator" |
  "onSelectedLocatorClick" |
  "onCloseLocatorDetailsClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<Required<TownLocatorsContainerProps>, DispatchProp> => ({
  onSelectLocator(index) {
    const locator: Locator = {
      index,
      type: LocatorType.Town,
    };

    dispatch(locatorsActions.selectLocator(locator));
  },
  onSelectedLocatorClick() {
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
