import { connect } from "react-redux";
import { Dispatch } from "redux";

import { isStructureBuilt } from "heroes-core";
import { StructureId } from "heroes-homm1";
import { AppState, Locator, locatorsActions, LocatorType, townWindowActions } from "heroes-homm1-state";

import { TownLocatorsContainer, TownLocatorsContainerProps } from "./TownLocatorsContainer";

type StateProp =
  "towns" |
  "selectedIndex" |
  "townWindowVisible";

const mapStateToProps = (state: AppState): Pick<TownLocatorsContainerProps, StateProp> => {
  const { selectedLocator } = state.locators;

  return {
    selectedIndex: selectedLocator && selectedLocator.type === LocatorType.Town ? selectedLocator.index : undefined,
    townWindowVisible: state.townWindow.townIndex !== undefined,
    towns: state.game.towns.map((t) => ({
      id: t.id,
      isCastleBuilt: isStructureBuilt(t, StructureId.Castle),
    })),
  };
};

type DispatchProp =
  "onSelectLocator" |
  "onSelectedLocatorClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<TownLocatorsContainerProps, DispatchProp> => ({
  onSelectLocator(index) {
    const locator: Locator = {
      index,
      type: LocatorType.Town,
    };

    dispatch(locatorsActions.selectLocator(locator));
  },
  onSelectedLocatorClick(index) {
    dispatch(locatorsActions.deselectLocator());

    dispatch(townWindowActions.open(index));
  },
});

const TownLocatorsContainerConnected = connect(mapStateToProps, mapDispatchToProps)(TownLocatorsContainer);

type TownLocatorsContainerConnectedProps = ExtractProps<typeof TownLocatorsContainerConnected>;

export {
  TownLocatorsContainerConnected as TownLocators,
  TownLocatorsContainerConnectedProps as TownLocatorsProps,
};
