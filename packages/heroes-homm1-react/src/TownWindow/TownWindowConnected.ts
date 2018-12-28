import { connect } from "react-redux";
import { Dispatch } from "redux";

import { TownId } from "heroes-homm1";
import {
  AppState,
  closeTownWindow,
  openKingdomOverviewWindow,
  openStructureDetails,
  recruitTroop,
  selectTownWindowGarrisonTroop,
  selectTownWindowHeroTroop,
  swapGarrisonTroops,
  swapHeroTroops,
} from "heroes-homm1-state";

import { TownWindow, TownWindowProps } from "./TownWindow";

type StateProp =
  "town" |
  "visitingHero" |
  "resources" |
  "selectedGarrisonTroopIndex" |
  "selectedHeroTroopIndex" |
  "visibleStructureDetails";

const mapStateToProps = (state: AppState): Pick<TownWindowProps, StateProp> => {
  const town = state.game.towns[state.locators.selectedLocator!.index];

  return {
    resources: state.game.resources,
    selectedGarrisonTroopIndex: state.townWindow.selectedGarrisonTroopIndex,
    selectedHeroTroopIndex: state.townWindow.selectedHeroTroopIndex,
    town,
    visibleStructureDetails: state.townWindow.visibleStructureDetails,
    visitingHero: town.id === TownId.Farm ? state.game.heroes[3] : undefined,
  };
};

type DispatchProp =
  "onCrestClick" |
  "onSelectGarrisonTroop" |
  "onSwapGarrisonTroops" |
  "onSelectHeroTroop" |
  "onSwapHeroTroops" |
  "onOpenStructureDetails" |
  "onRecruitTroop" |
  "onExitClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<TownWindowProps, DispatchProp> => ({
  onCrestClick() {
    dispatch(openKingdomOverviewWindow());
  },
  onSelectGarrisonTroop(index) {
    dispatch(selectTownWindowGarrisonTroop(index));
  },
  onSwapGarrisonTroops(town, index, withIndex) {
    dispatch(swapGarrisonTroops(town, index, withIndex));
  },
  onSelectHeroTroop(index) {
    dispatch(selectTownWindowHeroTroop(index));
  },
  onSwapHeroTroops(hero, index, withIndex) {
    dispatch(swapHeroTroops(hero, index, withIndex));
  },
  onOpenStructureDetails(structure) {
    dispatch(openStructureDetails(structure));
  },
  onRecruitTroop(town, structure, count) {
    dispatch(recruitTroop(town, structure, count));
  },
  onExitClick() {
    dispatch(closeTownWindow());
  },
});

export const TownWindowConnected = connect(mapStateToProps, mapDispatchToProps)(TownWindow);
