import * as React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";

import { getArmySize, Hero, TroopSelection, TroopSelectionType } from "heroes-core";
import { ArtifactData, ArtifactSelection } from "heroes-homm1";
import {
  ArtifactDetailsPrompt,
  ArtifactNotTradablePrompt,
  getHeroTradingWindowTitle,
  HeroPortrait,
  HeroTradingWindow,
  TradingArtifactSlot,
  TradingTroopSlot,
  WithGameWindowProps,
} from "heroes-homm1-react";

import { HeroWindow } from "../HeroWindow";

interface Props extends InjectedIntlProps, WithGameWindowProps {
  readonly artifacts: { readonly [id: string]: ArtifactData };

  readonly hero: Hero;
  readonly otherHero: Hero;

  readonly visibleHeroDetails?: string;
  readonly onOpenHeroDetailsClick: (hero: string) => void;
  readonly onCloseHeroDetailsClick: () => void;

  readonly selectedTroop?: TroopSelection;
  readonly onSelectTroop: (troop: TroopSelection) => void;
  readonly onSwapTroops: (troop: TroopSelection, withTroop: TroopSelection) => void;

  readonly selectedArtifact?: ArtifactSelection;
  readonly onSelectArtifactClick: (artifact: ArtifactSelection) => void;
  readonly onTradeArtifactsClick: (artifact: ArtifactSelection, withArtifact: ArtifactSelection) => void;

  readonly artifactDetailsVisible: boolean;
  readonly onOpenArtifactDetailsClick: () => void;
  readonly onCloseArtifactDetailsClick: () => void;

  readonly artifactNotTradablePromptVisible: boolean;
  readonly onOpenArtifactNotTradablePrompt: () => void;
  readonly onCloseArtifactNotTradablePrompt: () => void;

  readonly onExitClick: () => void;
}

type DefaultProp =
  "onOpenHeroDetailsClick" |
  "onCloseHeroDetailsClick" |
  "onSelectTroop" |
  "onSwapTroops" |
  "onSelectArtifactClick" |
  "onTradeArtifactsClick" |
  "artifactDetailsVisible" |
  "onOpenArtifactDetailsClick" |
  "onCloseArtifactDetailsClick" |
  "artifactNotTradablePromptVisible" |
  "onOpenArtifactNotTradablePrompt" |
  "onCloseArtifactNotTradablePrompt" |
  "onExitClick";

class HeroTradingWindowContainer extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, DefaultProp> = {
    artifactDetailsVisible: false,
    artifactNotTradablePromptVisible: false,
    onCloseArtifactDetailsClick: () => undefined,
    onCloseArtifactNotTradablePrompt: () => undefined,
    onCloseHeroDetailsClick: () => undefined,
    onExitClick: () => undefined,
    onOpenArtifactDetailsClick: () => undefined,
    onOpenArtifactNotTradablePrompt: () => undefined,
    onOpenHeroDetailsClick: () => undefined,
    onSelectArtifactClick: () => undefined,
    onSelectTroop: () => undefined,
    onSwapTroops: () => undefined,
    onTradeArtifactsClick: () => undefined,
  };

  public render() {
    const { intl, hero, otherHero, visibleHeroDetails, selectedArtifact } = this.props;

    return (
      <div>
        <HeroTradingWindow
          visible={this.props.visible}
          hero={hero}
          otherHero={otherHero}
          title={getHeroTradingWindowTitle(intl, hero.id, otherHero.id)}
          renderHeroPortrait={this.renderHeroPortrait}
          renderTroop={this.renderTroop}
          renderArtifact={this.renderArtifact}
          onExitClick={this.props.onExitClick}
        />
        {visibleHeroDetails && this.renderHeroDetails(visibleHeroDetails === hero.id ? hero : otherHero)}
        {selectedArtifact && this.props.artifactDetailsVisible && this.renderArtifactDetails(selectedArtifact)}
        {this.props.artifactNotTradablePromptVisible && this.renderArtifactNotTradablePrompt()}
      </div>
    );
  }

  private readonly renderHeroPortrait = (hero: string) => {
    return (
      <HeroPortrait
        hero={hero}
        onClick={this.onHeroPortraitClick}
      />
    );
  }

  private readonly onHeroPortraitClick = (hero?: string) => {
    this.props.onOpenHeroDetailsClick(hero!);
  }

  private renderHeroDetails(hero: Hero) {
    return (
      <HeroWindow
        visible={true}
        hero={hero}
        dismissible={false}
        onExitClick={this.props.onCloseHeroDetailsClick}
      />
    );
  }

  private readonly renderTroop = (hero: string, index: number) => {
    const { selectedTroop } = this.props;

    const h = this.props.hero.id === hero ?
      this.props.hero :
      this.props.otherHero;

    return (
      <TradingTroopSlot
        index={index}
        hero={hero}
        troop={h.army[index]}
        selected={selectedTroop && selectedTroop.id === hero && selectedTroop.index === index}
        onClick={this.onHeroTroopClick}
      />
    );
  }

  private readonly onHeroTroopClick = (hero: string, index: number) => {
    this.onTroopClick({ type: TroopSelectionType.Hero, id: hero, index });
  }

  private readonly onTroopClick = (troop: TroopSelection) => {
    const { hero, otherHero, selectedTroop } = this.props;

    // TODO: simplify
    if (selectedTroop && getArmySize((selectedTroop.id === hero.id ? hero : otherHero).army) === 1 &&
      selectedTroop.id !== troop.id && !this.getTroop(troop)) {
      return;
    }

    if (selectedTroop === undefined && this.getTroop(troop)) {
      this.props.onSelectTroop(troop);
    } else if (selectedTroop && (selectedTroop.id !== troop.id || selectedTroop.index !== troop.index)) {
      this.props.onSwapTroops(selectedTroop, troop);
    }
  }

  private getTroop(troop: TroopSelection) {
    return troop.id === this.props.hero.id ?
      this.props.hero.army[troop.index] :
      this.props.otherHero.army[troop.index];
  }

  private readonly renderArtifact = (hero: string, index: number) => {
    const { selectedArtifact } = this.props;

    const h = this.props.hero.id === hero ?
      this.props.hero :
      this.props.otherHero;

    const artifact = h.artifacts[index];

    return (
      <TradingArtifactSlot
        index={index}
        hero={hero}
        artifact={artifact ? artifact.id : undefined}
        selected={selectedArtifact && selectedArtifact.hero === hero && selectedArtifact.index === index}
        onClick={this.onArtifactClick}
      />
    );
  }

  private readonly onArtifactClick = (hero: string, index: number) => {
    const { artifacts, selectedArtifact } = this.props;

    const h = this.props.hero.id === hero ?
      this.props.hero :
      this.props.otherHero;

    const artifact = h.artifacts[index];

    const artifactData = artifact && artifacts[artifact.id] ?
      artifacts[artifact.id] :
      undefined;

    // TODO: simplify?
    // FIXME: is trading check handled correctly ?
    if (selectedArtifact) {
      if (artifact && artifactData && !artifactData.tradable) {
        this.props.onOpenArtifactNotTradablePrompt();
      } else if (hero === selectedArtifact.hero && index === selectedArtifact.index) {
        this.props.onOpenArtifactDetailsClick();
      } else {
        this.props.onTradeArtifactsClick(selectedArtifact, { hero, index });
      }
    } else if (artifact) {
      if (artifactData && !artifactData.tradable) {
        this.props.onOpenArtifactNotTradablePrompt();
      } else {
        this.props.onSelectArtifactClick({ hero, index });
      }
    }
  }

  private renderArtifactDetails(artifact: ArtifactSelection) {
    const hero = this.props.hero.id === artifact.hero ?
      this.props.hero :
      this.props.otherHero;

    const a = hero.artifacts[artifact.index]!;

    return (
      <ArtifactDetailsPrompt
        visible={true}
        artifact={a.id}
        onConfirmClick={this.props.onCloseArtifactDetailsClick}
      />
    );
  }

  private renderArtifactNotTradablePrompt() {
    return (
      <ArtifactNotTradablePrompt
        visible={true}
        onConfirmClick={this.props.onCloseArtifactNotTradablePrompt}
      />
    );
  }
}

const ContainerWrapped = injectIntl(HeroTradingWindowContainer);

type ContainerWrappedProps = ExtractProps<typeof ContainerWrapped>;

export {
  ContainerWrapped as HeroTradingWindow,
  ContainerWrappedProps as HeroTradingWindowProps,
};
