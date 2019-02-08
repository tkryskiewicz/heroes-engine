import { connect } from "react-redux";
import { Dispatch } from "redux";

import { isStructureBuilt } from "heroes-core";
import { StructureId } from "heroes-homm1";
import { TownLocators, TownLocatorsProps } from "heroes-homm1-react";
import { AppState, Locator, locatorsActions, LocatorType, townWindowActions } from "heroes-homm1-state";

const mapStateToProps = (state: AppState): TownLocatorsProps => {
  const { selectedLocator } = state.locators;

  return {
    selectedIndex: selectedLocator && selectedLocator.type === LocatorType.Town ? selectedLocator.index : undefined,
    towns: state.game.towns.map((t) => ({
      id: t.id,
      isCastleBuilt: isStructureBuilt(t, StructureId.Castle),
    })),
  };
};

type DispatchProp =
  "onSelectLocator" |
  "onSelectedLocatorClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<TownLocatorsProps, DispatchProp> => ({
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

const TownLocatorsConnected = connect(mapStateToProps, mapDispatchToProps)(TownLocators);

type TownLocatorsConnectedProps = ExtractProps<typeof TownLocatorsConnected>;

export {
  TownLocatorsConnected as TownLocators,
  TownLocatorsConnectedProps as TownLocatorsProps,
};