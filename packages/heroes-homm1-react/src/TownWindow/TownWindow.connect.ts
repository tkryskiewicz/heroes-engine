import { connect } from "react-redux";
import { Dispatch } from "redux";

import { TownId } from "heroes-homm1";
import {
  AppState,
  closeStructureDetails,
  closeTownWindow,
  kingdomOverviewWindowActions,
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
  "onOpenStructureDetailsClick" |
  "onCloseStructureDetailsClick" |
  "onRecruitTroop" |
  "onExitClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<TownWindowProps, DispatchProp> => ({
  onCrestClick() {
    dispatch(kingdomOverviewWindowActions.open());
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
  onOpenStructureDetailsClick(structure) {
    dispatch(openStructureDetails(structure));
  },
  onCloseStructureDetailsClick() {
    dispatch(closeStructureDetails());
  },
  onRecruitTroop(town, structure, count) {
    dispatch(recruitTroop(town, structure, count));
  },
  onExitClick() {
    dispatch(closeTownWindow());
  },
});

const TownWindowConnected = connect(mapStateToProps, mapDispatchToProps)(TownWindow);

export {
  TownWindowConnected as TownWindow,
  TownWindowProps,
};
