import { connect } from "react-redux";
import { Dispatch } from "redux";

import { TownId } from "heroes-homm1";
import {
  AppState,
  gameActions,
  kingdomOverviewWindowActions,
  townWindowActions,
} from "heroes-homm1-state";

import { getStructureDetails } from "./config";
import { TownWindowContainer, TownWindowContainerProps } from "./TownWindowContainer";

type StateProp =
  "visitingHero" |
  "resources" |
  "selectedGarrisonTroopIndex" |
  "visitingHeroDetailsVisible" |
  "selectedHeroTroopIndex" |
  "getStructureDetails" |
  "visibleStructureDetails";

const mapStateToProps = (
  state: AppState,
  ownProps: Pick<TownWindowContainerProps, "town">,
): Pick<TownWindowContainerProps, StateProp> => {
  return {
    getStructureDetails,
    resources: state.game.resources,
    selectedGarrisonTroopIndex: state.townWindow.selectedGarrisonTroopIndex,
    selectedHeroTroopIndex: state.townWindow.selectedHeroTroopIndex,
    visibleStructureDetails: state.townWindow.visibleStructureDetails,
    // TODO: resolve this dynamically
    visitingHero: ownProps.town.id === TownId.Farm ? state.game.heroes[0] : undefined,
    visitingHeroDetailsVisible: state.townWindow.visitingHeroDetailsVisible,
  };
};

type DispatchProp =
  "onCrestClick" |
  "onSelectGarrisonTroop" |
  "onSwapGarrisonTroops" |
  "onOpenVisitingHeroDetailsClick" |
  "onCloseVisitingHeroDetailsClick" |
  "onSelectHeroTroop" |
  "onSwapHeroTroops" |
  "onOpenStructureDetailsClick" |
  "onCloseStructureDetailsClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<Required<TownWindowContainerProps>, DispatchProp> => ({
  onCrestClick() {
    dispatch(kingdomOverviewWindowActions.open());
  },
  onSelectGarrisonTroop(index) {
    dispatch(townWindowActions.selectGarrisonTroop(index));
  },
  onSwapGarrisonTroops(town, index, withIndex) {
    dispatch(townWindowActions.deselectGarrisonTroop());

    dispatch(gameActions.swapGarrisonTroops(town, index, withIndex));
  },
  onOpenVisitingHeroDetailsClick() {
    dispatch(townWindowActions.openVisitingHeroDetails());
  },
  onCloseVisitingHeroDetailsClick() {
    dispatch(townWindowActions.closeVisitingHeroDetails());
  },
  onSelectHeroTroop(index) {
    dispatch(townWindowActions.selectHeroTroop(index));
  },
  onSwapHeroTroops(hero, index, withIndex) {
    dispatch(townWindowActions.deselectHeroTroop());

    dispatch(gameActions.swapHeroTroops(hero, index, withIndex));
  },
  onOpenStructureDetailsClick(structure) {
    dispatch(townWindowActions.openStructureDetails(structure));
  },
  onCloseStructureDetailsClick() {
    dispatch(townWindowActions.closeStructureDetails());
  },
});

const TownWindowContainerConnected = connect(mapStateToProps, mapDispatchToProps)(TownWindowContainer);

type TownWindowContainerConnectedProps = ExtractProps<typeof TownWindowContainerConnected>;

export {
  TownWindowContainerConnected as TownWindow,
  TownWindowContainerConnectedProps as TownWindowProps,
};
