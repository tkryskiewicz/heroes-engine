import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, closeHeroWindow, selectHeroWindowTroop, swapHeroTroops } from "heroes-homm1-state";

import { HeroWindow, HeroWindowProps } from "./HeroWindow";

const mapStateToProps = (state: AppState): HeroWindowProps => ({
  hero: state.game.heroes[state.locators.selectedLocator!.index],
  selectedTroopIndex: state.heroWindow.selectedTroopIndex,
});

type DispatchProp =
  "onSelectTroop" |
  "onSwapTroops" |
  "onExit";

const mapDispatchToProps = (dispatch: Dispatch): Pick<HeroWindowProps, DispatchProp> => ({
  onSelectTroop(index) {
    dispatch(selectHeroWindowTroop(index));
  },
  onSwapTroops(hero, index, withIndex) {
    dispatch(swapHeroTroops(hero, index, withIndex));
  },
  onExit() {
    dispatch(closeHeroWindow());
  },
});

export const HeroWindowConnected = connect(mapStateToProps, mapDispatchToProps)(HeroWindow);
