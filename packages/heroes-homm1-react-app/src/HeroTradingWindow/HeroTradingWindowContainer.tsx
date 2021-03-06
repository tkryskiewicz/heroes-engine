import React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";

import {
  GameData,
  getArmySize,
  Hero,
  isObjectTradable,
  isTradableObjectData,
  ItemSelection,
  TroopSelection,
  TroopSelectionType,
} from "heroes-core";
import { noop } from "heroes-helpers";
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
  readonly data: Pick<GameData, "objects">;

  readonly hero: Hero;
  readonly otherHero: Hero;

  readonly visibleHeroDetails?: string;
  readonly onOpenHeroDetailsClick: (hero: string) => void;
  readonly onCloseHeroDetailsClick: () => void;

  readonly selectedTroop?: TroopSelection;
  readonly onSelectTroop: (troop: TroopSelection) => void;
  readonly onSwapTroops: (troop: TroopSelection, withTroop: TroopSelection) => void;

  readonly selectedArtifact?: ItemSelection;
  readonly onSelectArtifactClick: (artifact: ItemSelection) => void;
  readonly onTradeArtifactsClick: (artifact: ItemSelection, withArtifact: ItemSelection) => void;

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
    onCloseArtifactDetailsClick: noop,
    onCloseArtifactNotTradablePrompt: noop,
    onCloseHeroDetailsClick: noop,
    onExitClick: noop,
    onOpenArtifactDetailsClick: noop,
    onOpenArtifactNotTradablePrompt: noop,
    onOpenHeroDetailsClick: noop,
    onSelectArtifactClick: noop,
    onSelectTroop: noop,
    onSwapTroops: noop,
    onTradeArtifactsClick: noop,
  };

  public render() {
    const { intl, hero, otherHero, visibleHeroDetails, selectedArtifact } = this.props;

    return (
      <div>
        <HeroTradingWindow
          visible={this.props.visible}
          hero={hero}
          otherHero={otherHero}
          title={getHeroTradingWindowTitle(intl, hero.heroId, otherHero.heroId)}
          renderHeroPortrait={this.renderHeroPortrait}
          renderTroop={this.renderTroop}
          renderArtifact={this.renderArtifact}
          onExitClick={this.props.onExitClick}
        />
        {visibleHeroDetails && this.renderHeroDetails(this.getHero(visibleHeroDetails))}
        {selectedArtifact && this.props.artifactDetailsVisible && this.renderArtifactDetails(selectedArtifact)}
        {this.props.artifactNotTradablePromptVisible && this.renderArtifactNotTradablePrompt()}
      </div>
    );
  }

  private readonly renderHeroPortrait = (hero: string) => {
    const h = this.getHero(hero);

    const onClick = () => this.props.onOpenHeroDetailsClick(h.id);

    return (
      <HeroPortrait
        hero={h.heroId}
        onClick={onClick}
      />
    );
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

    const h = this.getHero(hero);

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
    const h = this.getHero(troop.id);

    return h.army[troop.index];
  }

  private readonly renderArtifact = (hero: string, index: number) => {
    const { selectedArtifact } = this.props;

    const h = this.getHero(hero);

    const artifact = h.items[index];

    return (
      <TradingArtifactSlot
        index={index}
        hero={hero}
        artifact={artifact ? artifact.dataId : undefined}
        selected={selectedArtifact && selectedArtifact.objectId === hero && selectedArtifact.index === index}
        onClick={this.onArtifactClick}
      />
    );
  }

  private readonly onArtifactClick = (hero: string, index: number) => {
    const { data, selectedArtifact } = this.props;

    const h = this.getHero(hero);

    const artifact = h.items[index];

    const artifactData = artifact && data.objects[artifact.dataId] ?
      data.objects[artifact.dataId] :
      undefined;

    // TODO: simplify?
    // FIXME: is trading check handled correctly ?
    if (selectedArtifact) {
      if (artifact && artifactData && isTradableObjectData(artifactData) && !isObjectTradable(artifactData)) {
        this.props.onOpenArtifactNotTradablePrompt();
      } else if (hero === selectedArtifact.objectId && index === selectedArtifact.index) {
        this.props.onOpenArtifactDetailsClick();
      } else {
        this.props.onTradeArtifactsClick(selectedArtifact, { objectId: hero, index });
      }
    } else if (artifact) {
      if (artifactData && isTradableObjectData(artifactData)  && !isObjectTradable(artifactData)) {
        this.props.onOpenArtifactNotTradablePrompt();
      } else {
        this.props.onSelectArtifactClick({ objectId: hero, index });
      }
    }
  }

  private renderArtifactDetails(artifact: ItemSelection) {
    const h = this.getHero(artifact.objectId);

    const a = h.items[artifact.index]!;

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

  private getHero(id: string) {
    const { hero, otherHero } = this.props;

    return hero.id === id ?
      hero :
      otherHero;
  }
}

const ContainerWrapped = injectIntl(HeroTradingWindowContainer);

type ContainerWrappedProps = ExtractProps<typeof ContainerWrapped>;

export {
  ContainerWrapped as HeroTradingWindow,
  ContainerWrappedProps as HeroTradingWindowProps,
};
