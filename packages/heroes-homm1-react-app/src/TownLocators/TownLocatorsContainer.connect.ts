import { connect } from "react-redux";
import { Dispatch } from "redux";

import { getGameTowns } from "heroes-homm1";
import { AppState, locatorsActions } from "heroes-homm1-state";

import { TownLocatorsContainer, TownLocatorsContainerProps } from "./TownLocatorsContainer";

type StateProp =
  "towns" |
  "activeObjectId" |
  "locatorDetailsVisible";

const mapStateToProps = (state: AppState): Pick<TownLocatorsContainerProps, StateProp> => ({
  activeObjectId: state.locators.activeObjectId,
  locatorDetailsVisible: state.locators.locatorDetailsVisible,
  towns: getGameTowns(state.game),
});

type DispatchProp =
  "onSelectLocatorClick" |
  "onOpenLocatorDetailsClick" |
  "onCloseLocatorDetailsClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<TownLocatorsContainerProps, DispatchProp> => ({
  onSelectLocatorClick(id) {
    dispatch(locatorsActions.selectActiveObject(id));
  },
  onOpenLocatorDetailsClick() {
    dispatch(locatorsActions.openLocatorDetails());
  },
  onCloseLocatorDetailsClick() {
    dispatch(locatorsActions.closeLocatorDetails());

    dispatch(locatorsActions.deselectActiveObject());
  },
});

const ContainerConnected = connect(mapStateToProps, mapDispatchToProps)(TownLocatorsContainer);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as TownLocators,
  ContainerConnectedProps as TownLocatorsProps,
};
