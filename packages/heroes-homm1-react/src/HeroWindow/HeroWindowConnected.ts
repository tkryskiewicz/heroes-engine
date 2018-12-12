import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  AppState,
  changeHeroWindowStatusText,
  changeVisibleHeroWindowMiscInfoDetails,
  changeVisibleHeroWindowSkillDetails,
  closeDismissHeroPrompt,
  closeHeroWindow,
  closeHeroWindowTroopDetails,
  dismissHero,
  openDismissHeroPrompt,
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
  "dismissHeroPromptVisible" |
  "statusText";

const mapStateToProps = (state: AppState): Pick<HeroWindowProps, StateProp> => ({
  dismissHeroPromptVisible: state.heroWindow.dismissHeroPromptVisible,
  hero: state.game.heroes[state.locators.selectedLocator!.index],
  selectedTroopIndex: state.heroWindow.selectedTroopIndex,
  statusText: state.heroWindow.statusText,
  troopDetailsVisible: state.heroWindow.visibleTroopDetails,
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
  "onSwapTroops" |
  "onDismissHeroClick" |
  "onCancelDismissHeroClick" |
  "onConfirmDismissHeroClick" |
  "onStatusTextChange" |
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
  onSwapTroops(hero, index, withIndex) {
    dispatch(swapHeroTroops(hero, index, withIndex));
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
  onStatusTextChange(value: string) {
    dispatch(changeHeroWindowStatusText(value));
  },
  onExitClick() {
    dispatch(closeHeroWindow());
  },
});

export const HeroWindowConnected = connect(mapStateToProps, mapDispatchToProps)(HeroWindow);
