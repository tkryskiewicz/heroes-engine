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
  "selectedTroop" |
  "visitingHeroDetailsVisible" |
  "getStructureDetails" |
  "visibleStructureDetails";

const mapStateToProps = (
  state: AppState,
  ownProps: Pick<TownWindowContainerProps, "town">,
): Pick<TownWindowContainerProps, StateProp> => {
  return {
    getStructureDetails,
    resources: state.game.resources,
    selectedTroop: state.townWindow.selectedTroop,
    visibleStructureDetails: state.townWindow.visibleStructureDetails,
    // TODO: resolve this dynamically
    visitingHero: ownProps.town.id === TownId.Farm ? state.game.heroes[0] : undefined,
    visitingHeroDetailsVisible: state.townWindow.visitingHeroDetailsVisible,
  };
};

type DispatchProp =
  "onCrestClick" |
  "onSelectTroop" |
  "onSwapTroops" |
  "onOpenVisitingHeroDetailsClick" |
  "onCloseVisitingHeroDetailsClick" |
  "onOpenStructureDetailsClick" |
  "onCloseStructureDetailsClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<Required<TownWindowContainerProps>, DispatchProp> => ({
  onCrestClick() {
    dispatch(kingdomOverviewWindowActions.open());
  },
  onSelectTroop(troop) {
    dispatch(townWindowActions.selectTroop(troop));
  },
  onSwapTroops(troop, withTroop) {
    dispatch(townWindowActions.deselectTroop());

    dispatch(gameActions.swapTroops(troop, withTroop));
  },
  onOpenVisitingHeroDetailsClick() {
    dispatch(townWindowActions.openVisitingHeroDetails());
  },
  onCloseVisitingHeroDetailsClick() {
    dispatch(townWindowActions.closeVisitingHeroDetails());
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
