import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  AppState,
  gameActions,
  heroWindowActions,
  kingdomOverviewWindowActions,
  spellBookWindowActions,
} from "heroes-homm1-state";

import { getArtifactDetails } from "./config";
import { HeroWindowContainer, HeroWindowContainerProps } from "./HeroWindowContainer";

type StateProp =
  "visibleSkillDetails" |
  "visibleAdditionalStatDetails" |
  "selectedTroopIndex" |
  "troopDetailsVisible" |
  "dismissTroopPromptVisible" |
  "getArtifactDetails" |
  "visibleArtifactDetails" |
  "dismissHeroPromptVisible";

const mapStateToProps = (state: AppState): Pick<HeroWindowContainerProps, StateProp> => ({
  dismissHeroPromptVisible: state.heroWindow.dismissHeroPromptVisible,
  dismissTroopPromptVisible: state.heroWindow.dismissTroopPromptVisisble,
  getArtifactDetails,
  selectedTroopIndex: state.heroWindow.selectedTroopIndex,
  troopDetailsVisible: state.heroWindow.visibleTroopDetails,
  visibleAdditionalStatDetails: state.heroWindow.visibleAdditionalStatDetails,
  visibleArtifactDetails: state.heroWindow.visibleArtifactDetails,
  visibleSkillDetails: state.heroWindow.visibleSkillDetails,
});

type DispatchProp =
  "onVisibleSkillDetailsChange" |
  "onVisibleAdditionalStatDetailsChange" |
  "onCrestClick" |
  "onSelectTroop" |
  "onSelectedTroopClick" |
  "onExitTroopDetails" |
  "onDismissTroopClick" |
  "onCancelDismissTroopClick" |
  "onConfirmDismissTroopClick" |
  "onSwapTroops" |
  "onVisibleArtifactDetailsChange" |
  "onDismissHeroClick" |
  "onCancelDismissHeroClick" |
  "onConfirmDismissHeroClick" |
  "onExitClick";

const mapDispatchToProps = (
  dispatch: Dispatch,
  ownProps: Pick<HeroWindowContainerProps, "onExitClick">,
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
  onSelectedTroopClick(index) {
    dispatch(heroWindowActions.openTroopDetails(index));
  },
  onExitTroopDetails() {
    dispatch(heroWindowActions.closeTroopDetails());
  },
  onDismissTroopClick(index) {
    dispatch(heroWindowActions.openDismissTroopPrompt(index));
  },
  onCancelDismissTroopClick() {
    dispatch(heroWindowActions.closeDismissTroopPrompt());
  },
  onConfirmDismissTroopClick(hero, index) {
    dispatch(heroWindowActions.closeDismissTroopPrompt());
    dispatch(heroWindowActions.closeTroopDetails());
    dispatch(heroWindowActions.deselectTroop());

    dispatch(gameActions.dismissHeroTroop(hero, index));
  },
  onSwapTroops(hero, index, withIndex) {
    dispatch(heroWindowActions.deselectTroop());

    dispatch(gameActions.swapHeroTroops(hero, index, withIndex));
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
  onConfirmDismissHeroClick(hero) {
    dispatch(gameActions.dismissHero(hero));

    dispatch(heroWindowActions.reset());

    ownProps.onExitClick();
  },
  onExitClick() {
    dispatch(heroWindowActions.reset());

    ownProps.onExitClick();
  },
});

const HeroWindowContainerConnected = connect(mapStateToProps, mapDispatchToProps)(HeroWindowContainer);

type HeroWindowContainerConnectedProps = ExtractProps<typeof HeroWindowContainerConnected>;

export {
  HeroWindowContainerConnected as HeroWindow,
  HeroWindowContainerConnectedProps as HeroWindowProps,
};
