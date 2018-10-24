import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  AppState,
  Locator,
  LocatorType,
  openAdventureOptions,
  openGameOptions,
  openKingdomOverviewWindow,
  selectLocator,
} from "heroes-homm1-state";

import { AdventureButtons, AdventureButtonsProps } from "./AdventureButtons";

const mapStateToProps = (state: AppState): Pick<AdventureButtonsProps, "heroes" | "selectedIndex"> => {
  const { selectedLocator } = state.locators;

  return {
    heroes: state.game.heroes,
    selectedIndex: selectedLocator && selectedLocator.type === LocatorType.Hero ?
      selectedLocator.index :
      undefined,
  };
};

type DispatchProp =
  "onSelectHero" |
  "onKingdomOverviewClick" |
  "onAdventureOptionsClick" |
  "onGameOptionsClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<AdventureButtonsProps, DispatchProp> => ({
  onSelectHero(index) {
    const locator: Locator = {
      index,
      type: LocatorType.Hero,
    };

    dispatch(selectLocator(locator));
  },
  onKingdomOverviewClick() {
    dispatch(openKingdomOverviewWindow());
  },
  onAdventureOptionsClick() {
    dispatch(openAdventureOptions());
  },
  onGameOptionsClick() {
    dispatch(openGameOptions());
  },
});

export const AdventureButtonsConnected = connect(mapStateToProps, mapDispatchToProps)(AdventureButtons);