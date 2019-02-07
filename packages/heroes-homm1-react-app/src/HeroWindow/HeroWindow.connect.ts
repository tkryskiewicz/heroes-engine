import { connect } from "react-redux";
import { Dispatch } from "redux";

import { HeroWindow, HeroWindowProps } from "heroes-homm1-react";
import {
  AppState,
  gameActions,
  heroWindowActions,
  kingdomOverviewWindowActions,
  spellBookWindowActions,
} from "heroes-homm1-state";

import { getArtifactDetails } from "./config";

type StateProp =
  "hero" |
  "visibleSkillDetails" |
  "visibleMiscInfoDetails" |
  "selectedTroopIndex" |
  "troopDetailsVisible" |
  "dismissTroopPromptVisible" |
  "getArtifactDetails" |
  "visibleArtifactDetails" |
  "dismissHeroPromptVisible";

const mapStateToProps = (state: AppState): Pick<HeroWindowProps, StateProp> => ({
  dismissHeroPromptVisible: state.heroWindow.dismissHeroPromptVisible,
  dismissTroopPromptVisible: state.heroWindow.dismissTroopPromptVisisble,
  getArtifactDetails,
  hero: state.game.heroes[state.heroWindow.heroIndex!],
  selectedTroopIndex: state.heroWindow.selectedTroopIndex,
  troopDetailsVisible: state.heroWindow.visibleTroopDetails,
  visibleArtifactDetails: state.heroWindow.visibleArtifactDetails,
  visibleMiscInfoDetails: state.heroWindow.visibleMiscInfoDetails,
  visibleSkillDetails: state.heroWindow.visibleSkillDetails,
});

type DispatchProp =
  "onVisibleSkillDetailsChange" |
  "onVisibleMiscInfoDetailsChange" |
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

const mapDispatchToProps = (dispatch: Dispatch): Pick<HeroWindowProps, DispatchProp> => ({
  onVisibleSkillDetailsChange(skill) {
    dispatch(heroWindowActions.changeVisibleSkillDetails(skill));
  },
  onVisibleMiscInfoDetailsChange(type) {
    dispatch(heroWindowActions.changeVisibleMiscInfoDetails(type));
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
    dispatch(heroWindowActions.close());

    dispatch(gameActions.dismissHero(hero));
  },
  onExitClick() {
    dispatch(heroWindowActions.close());
  },
});

const HeroWindowConnected = connect(mapStateToProps, mapDispatchToProps)(HeroWindow);

type HeroWindowConnectedProps = ExtractProps<typeof HeroWindowConnected>;

export {
  HeroWindowConnected as HeroWindow,
  HeroWindowConnectedProps as HeroWindowProps,
};
