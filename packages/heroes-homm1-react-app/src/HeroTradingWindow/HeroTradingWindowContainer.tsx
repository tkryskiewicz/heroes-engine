import * as React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";

import { Hero, TroopSelection, TroopSelectionType, getArmySize } from "heroes-core";
import {
  ArtifactNotTradablePrompt,
  getHeroNameMessage,
  HeroPortrait,
  HeroTradingWindow,
  heroTradingWindowMessages,
  TradingArtifactSlot,
  TradingTroopSlot,
  WithGameWindowProps,
} from "heroes-homm1-react";

import { HeroWindow } from "../HeroWindow";

interface ArtifactSelection {
  readonly hero: string;
  readonly index: number;
}

interface Props extends InjectedIntlProps, WithGameWindowProps {
  readonly hero: Hero;
  readonly otherHero: Hero;

  readonly visibleHeroDetails?: string;
  readonly onOpenHeroDetailsClick: (hero: string) => void;
  readonly onCloseHeroDetailsClick: () => void;

  readonly selectedTroop?: TroopSelection;
  readonly onSelectTroop: (troop: TroopSelection) => void;
  readonly onSwapTroops: (troop: TroopSelection, withTroop: TroopSelection) => void;

  readonly selectedArtifact?: ArtifactSelection;
  readonly onSelectedArtifactChange: (value: ArtifactSelection) => void;
  readonly onTradeArtifacts: (artifact: ArtifactSelection, withArtifact: ArtifactSelection) => void;
  readonly artifactNotTradablePromptVisible: boolean;
  readonly onArtifactNotTradablePromptVisibleChange: (visible: boolean) => void;
  readonly onExitClick: () => void;
}

type DefaultProp =
  "onOpenHeroDetailsClick" |
  "onCloseHeroDetailsClick" |
  "onSelectTroop" |
  "onSwapTroops" |
  "onSelectedArtifactChange" |
  "onTradeArtifacts" |
  "artifactNotTradablePromptVisible" |
  "onArtifactNotTradablePromptVisibleChange" |
  "onExitClick";

class HeroTradingWindowContainer extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, DefaultProp> = {
    artifactNotTradablePromptVisible: false,
    onArtifactNotTradablePromptVisibleChange: () => undefined,
    onCloseHeroDetailsClick: () => undefined,
    onExitClick: () => undefined,
    onOpenHeroDetailsClick: () => undefined,
    onSelectTroop: () => undefined,
    onSelectedArtifactChange: () => undefined,
    onSwapTroops: () => undefined,
    onTradeArtifacts: () => undefined,
  };

  public render() {
    const { hero, otherHero, visibleHeroDetails } = this.props;

    return (
      <div>
        <HeroTradingWindow
          visible={this.props.visible}
          hero={hero}
          otherHero={otherHero}
          title={this.getTitle(hero.id, otherHero.id)}
          renderHeroPortrait={this.renderHeroPortrait}
          renderTroop={this.renderTroop}
          renderArtifact={this.renderArtifact}
          onExitClick={this.props.onExitClick}
        />
        {this.props.artifactNotTradablePromptVisible && this.renderArtifactNotTradablePrompt()}
        {visibleHeroDetails && this.renderHeroDetails(visibleHeroDetails === hero.id ? hero : otherHero)}
      </div>
    );
  }

  private getTitle(hero: string, otherHero: string) {
    const { formatMessage } = this.props.intl;

    const heroName = formatMessage(getHeroNameMessage(hero));
    const otherHeroName = formatMessage(getHeroNameMessage(otherHero));

    const title = formatMessage(heroTradingWindowMessages.title, { heroName, otherHeroName });

    return title;
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
    const h = this.props.hero.id === hero ?
      this.props.hero :
      this.props.otherHero;

    const artifact = h.artifacts[index];

    if (!artifact) {
      return;
    }

    // TODO: simplify?
    // TODO: handle clicking on same artifact
    if (this.props.selectedArtifact) {
      if (!artifact.tradable) {
        this.props.onArtifactNotTradablePromptVisibleChange(true);
      } else {
        this.props.onTradeArtifacts(this.props.selectedArtifact, { hero, index });
      }
    } else {
      if (!artifact.tradable) {
        this.props.onArtifactNotTradablePromptVisibleChange(true);
      } else {
        this.props.onSelectedArtifactChange({ hero, index });
      }
    }
  }

  private renderArtifactNotTradablePrompt() {
    return (
      <ArtifactNotTradablePrompt
        visible={true}
        onConfirmClick={this.onCloseArtifactNotTradablePrompt}
      />
    );
  }

  private readonly onCloseArtifactNotTradablePrompt = () => {
    this.props.onArtifactNotTradablePromptVisibleChange(false);
  }
}

const ContainerWrapped = injectIntl(HeroTradingWindowContainer);

type ContainerWrappedProps = ExtractProps<typeof ContainerWrapped>;

export {
  ContainerWrapped as HeroTradingWindow,
  ContainerWrappedProps as HeroTradingWindowProps,
};
