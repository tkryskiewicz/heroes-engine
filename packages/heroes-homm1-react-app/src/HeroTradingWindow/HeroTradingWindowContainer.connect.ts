import { connect } from "react-redux";
import { Dispatch } from "redux";

import { getGameHero } from "heroes-core";
import { AppState, gameActions, heroTradingWindowActions } from "heroes-homm1-state";

import { HeroTradingWindow, HeroTradingWindowProps } from "./HeroTradingWindowContainer";

type StateProp =
  "hero" |
  "otherHero" |
  "visibleHeroDetails" |
  "selectedTroop";

const mapStateToProps = (state: AppState): Pick<HeroTradingWindowProps, StateProp> => ({
  hero: getGameHero(state.game, state.adventureScreen.hero!)!,
  otherHero: getGameHero(state.game, state.adventureScreen.otherHero!)!,
  selectedTroop: state.heroTradingWindow.selectedTroop,
  visibleHeroDetails: state.heroTradingWindow.visibleHeroDetails,
});

type DispatchProp =
  "onOpenHeroDetailsClick" |
  "onCloseHeroDetailsClick" |
  "onSelectTroop" |
  "onSwapTroops";

const mapDispatchToProps = (dispatch: Dispatch): Pick<HeroTradingWindowProps, DispatchProp> => ({
  onOpenHeroDetailsClick(hero) {
    dispatch(heroTradingWindowActions.openHeroDetails(hero));
  },
  onCloseHeroDetailsClick() {
    dispatch(heroTradingWindowActions.closeHeroDetails());
  },
  onSelectTroop(troop) {
    dispatch(heroTradingWindowActions.selectTroop(troop));
  },
  onSwapTroops(troop, withTroop) {
    dispatch(heroTradingWindowActions.deselectTroop());

    dispatch(gameActions.swapTroops(troop, withTroop));
  },
});

const ContainerConnected = connect(mapStateToProps, mapDispatchToProps)(HeroTradingWindow);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as HeroTradingWindow,
  ContainerConnectedProps as HeroTradingWindowProps,
};
