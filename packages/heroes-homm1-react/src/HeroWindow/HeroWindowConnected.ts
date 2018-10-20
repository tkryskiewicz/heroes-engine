import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  AppState,
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
  "selectedTroopIndex" |
  "dismissHeroPromptVisible";

const mapStateToProps = (state: AppState): Pick<HeroWindowProps, StateProp> => ({
  dismissHeroPromptVisible: state.heroWindow.dismissHeroPromptVisible,
  hero: state.game.heroes[state.locators.selectedLocator!.index],
  selectedTroopIndex: state.heroWindow.selectedTroopIndex,
});

type DispatchProp =
  "onCrestClick" |
  "onSelectTroop" |
  "onSwapTroops" |
  "onDismissHeroClick" |
  "onCancelDismissHeroClick" |
  "onDismissHero" |
  "onExitClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<HeroWindowProps, DispatchProp> => ({
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
  onDismissHero(hero) {
    dispatch(dismissHero(hero));
  },
  onExitClick() {
    dispatch(closeHeroWindow());
  },
});

export const HeroWindowConnected = connect(mapStateToProps, mapDispatchToProps)(HeroWindow);
