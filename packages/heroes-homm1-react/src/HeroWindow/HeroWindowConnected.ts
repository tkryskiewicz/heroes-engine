import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  AppState,
  changeHeroWindowStatusText,
  changeVisibleHeroWindowSkill,
  closeDismissHeroPrompt,
  closeHeroWindow,
  dismissHero,
  openDismissHeroPrompt,
  openKingdomOverviewWindow,
  selectHeroWindowTroop,
  swapHeroTroops,
} from "heroes-homm1-state";

import { HeroWindow, HeroWindowProps } from "./HeroWindow";

type StateProp =
  "hero" |
  "visibleSkillDetails" |
  "selectedTroopIndex" |
  "dismissHeroPromptVisible" |
  "statusText";

const mapStateToProps = (state: AppState): Pick<HeroWindowProps, StateProp> => ({
  dismissHeroPromptVisible: state.heroWindow.dismissHeroPromptVisible,
  hero: state.game.heroes[state.locators.selectedLocator!.index],
  selectedTroopIndex: state.heroWindow.selectedTroopIndex,
  statusText: state.heroWindow.statusText,
  visibleSkillDetails: state.heroWindow.visibleSkillDetails,
});

type DispatchProp =
  "onVisibleSkillDetailsChange" |
  "onCrestClick" |
  "onSelectTroop" |
  "onSwapTroops" |
  "onDismissHeroClick" |
  "onCancelDismissHeroClick" |
  "onConfirmDismissHeroClick" |
  "onStatusTextChange" |
  "onExitClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<HeroWindowProps, DispatchProp> => ({
  onVisibleSkillDetailsChange(skill) {
    dispatch(changeVisibleHeroWindowSkill(skill));
  },
  onCrestClick() {
    dispatch(openKingdomOverviewWindow());
  },
  onSelectTroop(index) {
    dispatch(selectHeroWindowTroop(index));
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
