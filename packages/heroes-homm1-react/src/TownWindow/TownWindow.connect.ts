import { connect } from "react-redux";
import { Dispatch } from "redux";

import { TownId } from "heroes-homm1";
import {
  AppState,
  gameActions,
  kingdomOverviewWindowActions,
  townWindowActions,
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
    dispatch(townWindowActions.selectGarrisonTroop(index));
  },
  onSwapGarrisonTroops(town, index, withIndex) {
    dispatch(gameActions.swapGarrisonTroops(town, index, withIndex));
  },
  onSelectHeroTroop(index) {
    dispatch(townWindowActions.selectHeroTroop(index));
  },
  onSwapHeroTroops(hero, index, withIndex) {
    dispatch(gameActions.swapHeroTroops(hero, index, withIndex));
  },
  onOpenStructureDetailsClick(structure) {
    dispatch(townWindowActions.openStructureDetails(structure));
  },
  onCloseStructureDetailsClick() {
    dispatch(townWindowActions.closeStructureDetails());
  },
  onRecruitTroop(town, structure, count) {
    dispatch(gameActions.recruitTroop(town, structure, count));
  },
  onExitClick() {
    dispatch(townWindowActions.close());
  },
});

const TownWindowConnected = connect(mapStateToProps, mapDispatchToProps)(TownWindow);

export {
  TownWindowConnected as TownWindow,
  TownWindowProps,
};
