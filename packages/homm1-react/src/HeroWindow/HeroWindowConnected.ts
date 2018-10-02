import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, closeHeroWindow, selectHeroWindowTroop } from "heroes-homm1-state";

import { HeroWindow, HeroWindowProps } from "./HeroWindow";

const mapStateToProps = (state: AppState): HeroWindowProps => ({
  hero: state.game.heroes[state.locators.selectedLocator!.index],
  selectedTroopIndex: state.heroWindow.selectedTroopIndex,
});

const mapDispatchToProps = (dispatch: Dispatch): Pick<HeroWindowProps, "onExit" | "onSelectTroop"> => ({
  onSelectTroop(index) {
    dispatch(selectHeroWindowTroop(index));
  },
  onExit() {
    dispatch(closeHeroWindow());
  },
});

export const HeroWindowConnected = connect(mapStateToProps, mapDispatchToProps)(HeroWindow);
