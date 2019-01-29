import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  AppState,
  changeVisibleHeroWindowArtifactDetails,
  changeVisibleHeroWindowMiscInfoDetails,
  changeVisibleHeroWindowSkillDetails,
  closeDismissHeroPrompt,
  closeDismissHeroWindowTroopPrompt,
  closeHeroWindow,
  closeHeroWindowTroopDetails,
  gameActions,
  kingdomOverviewWindowActions,
  openDismissHeroPrompt,
  openDismissHeroWindowTroopPrompt,
  openHeroWindowTroopDetails,
  selectHeroWindowTroop,
} from "heroes-homm1-state";

import { HeroWindow, HeroWindowProps } from "./HeroWindow";

type StateProp =
  "hero" |
  "visibleSkillDetails" |
  "visibleMiscInfoDetails" |
  "selectedTroopIndex" |
  "troopDetailsVisible" |
  "dismissTroopPromptVisible" |
  "visibleArtifactDetails" |
  "dismissHeroPromptVisible";

const mapStateToProps = (state: AppState): Pick<HeroWindowProps, StateProp> => ({
  dismissHeroPromptVisible: state.heroWindow.dismissHeroPromptVisible,
  dismissTroopPromptVisible: state.heroWindow.dismissTroopPromptVisisble,
  hero: state.game.heroes[state.locators.selectedLocator!.index],
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
    dispatch(changeVisibleHeroWindowSkillDetails(skill));
  },
  onVisibleMiscInfoDetailsChange(type) {
    dispatch(changeVisibleHeroWindowMiscInfoDetails(type));
  },
  onCrestClick() {
    dispatch(kingdomOverviewWindowActions.open());
  },
  onSelectTroop(index) {
    dispatch(selectHeroWindowTroop(index));
  },
  onSelectedTroopClick(index) {
    dispatch(openHeroWindowTroopDetails(index));
  },
  onExitTroopDetails() {
    dispatch(closeHeroWindowTroopDetails());
  },
  onDismissTroopClick(index) {
    dispatch(openDismissHeroWindowTroopPrompt(index));
  },
  onCancelDismissTroopClick(index) {
    dispatch(closeDismissHeroWindowTroopPrompt(index));
  },
  onConfirmDismissTroopClick(hero, index) {
    dispatch(gameActions.dismissHeroTroop(hero, index));
  },
  onSwapTroops(hero, index, withIndex) {
    dispatch(gameActions.swapHeroTroops(hero, index, withIndex));
  },
  onVisibleArtifactDetailsChange(index) {
    dispatch(changeVisibleHeroWindowArtifactDetails(index));
  },
  onDismissHeroClick() {
    dispatch(openDismissHeroPrompt());
  },
  onCancelDismissHeroClick() {
    dispatch(closeDismissHeroPrompt());
  },
  onConfirmDismissHeroClick(hero) {
    dispatch(gameActions.dismissHero(hero));
  },
  onExitClick() {
    dispatch(closeHeroWindow());
  },
});

const HeroWindowConnected = connect(mapStateToProps, mapDispatchToProps)(HeroWindow);

export {
  HeroWindowConnected as HeroWindow,
  HeroWindowProps,
};
