import { connect } from "react-redux";
import { Dispatch } from "redux";

import { isStructureBuilt } from "heroes-core";
import { StructureId } from "heroes-homm1";
import { AppState, Locator, locatorsActions, LocatorType, townWindowActions } from "heroes-homm1-state";

import { TownLocators, TownLocatorsProps } from "./TownLocators";

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
  onSelectedLocatorClick() {
    dispatch(townWindowActions.open());
  },
});

const TownLocatorsConnected = connect(mapStateToProps, mapDispatchToProps)(TownLocators);

export {
  TownLocatorsConnected as TownLocators,
  TownLocatorsProps,
};
