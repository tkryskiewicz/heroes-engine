import { connect } from "react-redux";
import { Dispatch } from "redux";

import { getGameHero } from "heroes-core";
import { AppState, gameActions, heroTradingWindowActions } from "heroes-homm1-state";

import { HeroTradingWindow, HeroTradingWindowProps } from "./HeroTradingWindowContainer";

type StateProp =
  "artifacts" |
  "hero" |
  "otherHero" |
  "visibleHeroDetails" |
  "selectedTroop" |
  "selectedArtifact" |
  "artifactDetailsVisible" |
  "artifactNotTradablePromptVisible";

const mapStateToProps = (state: AppState): Pick<HeroTradingWindowProps, StateProp> => ({
  artifactDetailsVisible: state.heroTradingWindow.artifactDetailsVisible,
  artifactNotTradablePromptVisible: state.heroTradingWindow.artifactNotTradablePromptVisible,
  artifacts: state.game.data.artifacts,
  hero: getGameHero(state.game, state.adventureScreen.hero!)!,
  otherHero: getGameHero(state.game, state.adventureScreen.otherHero!)!,
  selectedArtifact: state.heroTradingWindow.selectedArtifact,
  selectedTroop: state.heroTradingWindow.selectedTroop,
  visibleHeroDetails: state.heroTradingWindow.visibleHeroDetails,
});

type DispatchProp =
  "onOpenHeroDetailsClick" |
  "onCloseHeroDetailsClick" |
  "onSelectTroop" |
  "onSwapTroops" |
  "onSelectArtifactClick" |
  "onTradeArtifactsClick" |
  "onOpenArtifactDetailsClick" |
  "onCloseArtifactDetailsClick" |
  "onOpenArtifactNotTradablePrompt" |
  "onCloseArtifactNotTradablePrompt";

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
  onSelectArtifactClick(artifact) {
    dispatch(heroTradingWindowActions.selectArtifact(artifact));
  },
  onTradeArtifactsClick(artifact, withArtifact) {
    dispatch(heroTradingWindowActions.deselectArtifact());

    dispatch(gameActions.tradeArtifacts(artifact, withArtifact));
  },
  onOpenArtifactDetailsClick() {
    dispatch(heroTradingWindowActions.openArtifactDetails());
  },
  onCloseArtifactDetailsClick() {
    dispatch(heroTradingWindowActions.closeArtifactDetails());

    dispatch(heroTradingWindowActions.deselectArtifact());
  },
  onOpenArtifactNotTradablePrompt() {
    dispatch(heroTradingWindowActions.openArtifactNotTradablePrompt());
  },
  onCloseArtifactNotTradablePrompt() {
    dispatch(heroTradingWindowActions.closeArtifactNotTradablePrompt());

    dispatch(heroTradingWindowActions.deselectArtifact());
  },
});

const ContainerConnected = connect(mapStateToProps, mapDispatchToProps)(HeroTradingWindow);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as HeroTradingWindow,
  ContainerConnectedProps as HeroTradingWindowProps,
};
