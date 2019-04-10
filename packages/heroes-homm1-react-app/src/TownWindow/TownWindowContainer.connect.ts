import { connect } from "react-redux";
import { Dispatch } from "redux";

import { getGameHeroes, TownId } from "heroes-homm1";
import {
  AppState,
  gameActions,
  kingdomOverviewWindowActions,
  townWindowActions,
  troopWindowActions,
} from "heroes-homm1-state";

import { getStructureDetails } from "./config";
import { TownWindowContainer, TownWindowContainerProps } from "./TownWindowContainer";

type StateProp =
  "alignment" |
  "visitingHero" |
  "resources" |
  "selectedTroop" |
  "troopDetailsVisible" |
  "visitingHeroDetailsVisible" |
  "getStructureDetails" |
  "visibleStructureDetails";

const mapStateToProps = (
  state: AppState,
  ownProps: Pick<TownWindowContainerProps, "town">,
): Pick<TownWindowContainerProps, StateProp> => ({
  alignment: state.game.alignment,
  getStructureDetails,
  resources: state.game.resources,
  selectedTroop: state.townWindow.selectedTroop,
  troopDetailsVisible: state.townWindow.troopDetailsVisible,
  visibleStructureDetails: state.townWindow.visibleStructureDetails,
  // TODO: resolve this dynamically
  visitingHero: ownProps.town.id === TownId.Farm ? getGameHeroes(state.game)[0] : undefined,
  visitingHeroDetailsVisible: state.townWindow.visitingHeroDetailsVisible,
});

type DispatchProp =
  "onCrestClick" |
  "onSelectTroop" |
  "onSwapTroops" |
  "onOpenTroopDetailsClick" |
  "onCloseTroopDetailsClick" |
  "onConfirmDismissTroopClick" |
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
  onOpenTroopDetailsClick() {
    dispatch(townWindowActions.openTroopDetails());
  },
  onCloseTroopDetailsClick() {
    dispatch(townWindowActions.closeTroopDetails());

    dispatch(townWindowActions.deselectTroop());
  },
  onConfirmDismissTroopClick(troop) {
    dispatch(troopWindowActions.closeDismissPrompt());
    dispatch(townWindowActions.closeTroopDetails());
    dispatch(townWindowActions.deselectTroop());

    dispatch(gameActions.dismissTroop(troop));
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
