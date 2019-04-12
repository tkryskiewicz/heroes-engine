import { connect } from "react-redux";
import { Dispatch } from "redux";

import { getGameHeroes } from "heroes-homm1";
import { AppState, locatorsActions } from "heroes-homm1-state";

import { HeroLocatorsContainer, HeroLocatorsContainerProps } from "./HeroLocatorsContainer";

type StateProp =
  "heroes" |
  "activeObjectId" |
  "locatorDetailsVisible";

const mapStateToProps = (state: AppState): Pick<HeroLocatorsContainerProps, StateProp> => ({
  activeObjectId: state.locators.activeObjectId,
  heroes: getGameHeroes(state.game),
  locatorDetailsVisible: state.locators.locatorDetailsVisible,
});

type DispatchProp =
  "onSelectLocatorClick" |
  "onOpenLocatorDetailsClick" |
  "onConfirmDismissHeroClick" |
  "onCloseLocatorDetailsClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<HeroLocatorsContainerProps, DispatchProp> => ({
  onSelectLocatorClick(id) {
    dispatch(locatorsActions.selectActiveObject(id));
  },
  onOpenLocatorDetailsClick() {
    dispatch(locatorsActions.openLocatorDetails());
  },
  onConfirmDismissHeroClick() {
    dispatch(locatorsActions.closeLocatorDetails());

    dispatch(locatorsActions.deselectActiveObject());
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
