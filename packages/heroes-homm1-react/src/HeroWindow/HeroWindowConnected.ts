import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  AppState,
  changeVisibleHeroWindowArtifactDescription,
  changeVisibleHeroWindowMiscInfoDetails,
  changeVisibleHeroWindowSkillDetails,
  closeDismissHeroPrompt,
  closeDismissHeroWindowTroopPrompt,
  closeHeroWindow,
  closeHeroWindowTroopDetails,
  dismissHero,
  dismissHeroTroop,
  openDismissHeroPrompt,
  openDismissHeroWindowTroopPrompt,
  openHeroWindowTroopDetails,
  openKingdomOverviewWindow,
  selectHeroWindowTroop,
  swapHeroTroops,
} from "heroes-homm1-state";

import { HeroWindow, HeroWindowProps } from "./HeroWindow";

type StateProp =
  "hero" |
  "visibleSkillDetails" |
  "visibleMiscInfoDetails" |
  "selectedTroopIndex" |
  "troopDetailsVisible" |
  "dismissTroopPromptVisible" |
  "visibleArtifactDescription" |
  "dismissHeroPromptVisible";

const mapStateToProps = (state: AppState): Pick<HeroWindowProps, StateProp> => ({
  dismissHeroPromptVisible: state.heroWindow.dismissHeroPromptVisible,
  dismissTroopPromptVisible: state.heroWindow.dismissTroopPromptVisisble,
  hero: state.game.heroes[state.locators.selectedLocator!.index],
  selectedTroopIndex: state.heroWindow.selectedTroopIndex,
  troopDetailsVisible: state.heroWindow.visibleTroopDetails,
  visibleArtifactDescription: state.heroWindow.visibleArtifactDescription,
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
  "onVisibleArtifactDescriptionChange" |
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
    dispatch(openKingdomOverviewWindow());
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
    dispatch(dismissHeroTroop(hero, index));
  },
  onSwapTroops(hero, index, withIndex) {
    dispatch(swapHeroTroops(hero, index, withIndex));
  },
  onVisibleArtifactDescriptionChange(index) {
    dispatch(changeVisibleHeroWindowArtifactDescription(index));
  },
  onDismissHeroClick() {
    dispatch(openDismissHeroPrompt());
  },
  onCancelDismissHeroClick() {
    dispatch(closeDismissHeroPrompt());
  },
  onConfirmDismissHeroClick(hero) {
    dispatch(dismissHero(hero));
  },
  onExitClick() {
    dispatch(closeHeroWindow());
  },
});

export const HeroWindowConnected = connect(mapStateToProps, mapDispatchToProps)(HeroWindow);
