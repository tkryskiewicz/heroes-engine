import { connect } from "react-redux";
import { Dispatch } from "redux";

import { TroopSelectionType } from "heroes-core";
import {
  AppState,
  gameActions,
  heroWindowActions,
  kingdomOverviewWindowActions,
  spellBookWindowActions,
  troopWindowActions,
} from "heroes-homm1-state";

import { getArtifactDetails } from "./config";
import { HeroWindowContainer, HeroWindowContainerProps } from "./HeroWindowContainer";

type StateProp =
  "alignment" |
  "visibleSkillDetails" |
  "visibleAdditionalStatDetails" |
  "selectedTroopIndex" |
  "troopDetailsVisible" |
  "getArtifactDetails" |
  "visibleArtifactDetails" |
  "dismissHeroPromptVisible";

const mapStateToProps = (state: AppState): Pick<HeroWindowContainerProps, StateProp> => ({
  alignment: state.game.alignment,
  dismissHeroPromptVisible: state.heroWindow.dismissHeroPromptVisible,
  getArtifactDetails,
  selectedTroopIndex: state.heroWindow.selectedTroopIndex,
  troopDetailsVisible: state.heroWindow.troopDetailsVisible,
  visibleAdditionalStatDetails: state.heroWindow.visibleAdditionalStatDetails,
  visibleArtifactDetails: state.heroWindow.visibleArtifactDetails,
  visibleSkillDetails: state.heroWindow.visibleSkillDetails,
});

type DispatchProp =
  "onVisibleSkillDetailsChange" |
  "onVisibleAdditionalStatDetailsChange" |
  "onCrestClick" |
  "onSelectTroop" |
  "onOpenTroopDetailsClick" |
  "onCloseTroopDetailsClick" |
  "onConfirmDismissTroopClick" |
  "onSwapTroops" |
  "onVisibleArtifactDetailsChange" |
  "onDismissHeroClick" |
  "onCancelDismissHeroClick" |
  "onConfirmDismissHeroClick" |
  "onExitClick";

const mapDispatchToProps = (
  dispatch: Dispatch,
  ownProps: Pick<HeroWindowContainerProps, "hero" | "onConfirmDismissHeroClick" | "onExitClick">,
): Pick<HeroWindowContainerProps, DispatchProp> => ({
  onVisibleSkillDetailsChange(skill) {
    dispatch(heroWindowActions.changeVisibleSkillDetails(skill));
  },
  onVisibleAdditionalStatDetailsChange(type) {
    dispatch(heroWindowActions.changeVisibleAdditionalStatDetails(type));
  },
  onCrestClick() {
    dispatch(kingdomOverviewWindowActions.open());
  },
  onSelectTroop(index) {
    dispatch(heroWindowActions.selectTroop(index));
  },
  onOpenTroopDetailsClick() {
    dispatch(heroWindowActions.openTroopDetails());
  },
  onCloseTroopDetailsClick() {
    dispatch(heroWindowActions.closeTroopDetails());
  },
  onConfirmDismissTroopClick(index) {
    dispatch(troopWindowActions.closeDismissPrompt());
    dispatch(heroWindowActions.closeTroopDetails());
    dispatch(heroWindowActions.deselectTroop());

    dispatch(gameActions.dismissTroop({ type: TroopSelectionType.Hero, id: ownProps.hero.id, index }));
  },
  onSwapTroops(index, withIndex) {
    dispatch(heroWindowActions.deselectTroop());

    dispatch(gameActions.swapTroops(
      { type: TroopSelectionType.Hero, id: ownProps.hero.id, index },
      { type: TroopSelectionType.Hero, id: ownProps.hero.id, index: withIndex },
    ));
  },
  onVisibleArtifactDetailsChange(index) {
    dispatch(spellBookWindowActions.reset());

    dispatch(heroWindowActions.changeVisibleArtifactDetails(index));
  },
  onDismissHeroClick() {
    dispatch(heroWindowActions.openDismissHeroPrompt());
  },
  onCancelDismissHeroClick() {
    dispatch(heroWindowActions.closeDismissHeroPrompt());
  },
  onConfirmDismissHeroClick() {
    dispatch(gameActions.dismissHero(ownProps.hero.id));

    dispatch(heroWindowActions.reset());

    if (ownProps.onConfirmDismissHeroClick) {
      ownProps.onConfirmDismissHeroClick();
    }
  },
  onExitClick() {
    dispatch(heroWindowActions.reset());

    ownProps.onExitClick();
  },
});

const ContainerConnected = connect(mapStateToProps, mapDispatchToProps)(HeroWindowContainer);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as HeroWindow,
  ContainerConnectedProps as HeroWindowProps,
};
