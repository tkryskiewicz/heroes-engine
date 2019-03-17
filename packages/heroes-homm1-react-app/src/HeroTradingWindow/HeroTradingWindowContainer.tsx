import * as React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";

import { Hero } from "heroes-core";
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

interface ArtifactSelection {
  readonly hero: string;
  readonly index: number;
}

interface Props extends InjectedIntlProps, WithGameWindowProps {
  readonly hero: Hero;
  readonly otherHero: Hero;
  readonly onHeroPortraitClick: (hero: string) => void;
  readonly selectedArtifact?: ArtifactSelection;
  readonly onSelectedArtifactChange: (value: ArtifactSelection) => void;
  readonly onTradeArtifacts: (artifact: ArtifactSelection, withArtifact: ArtifactSelection) => void;
  readonly artifactNotTradablePromptVisible: boolean;
  readonly onArtifactNotTradablePromptVisibleChange: (visible: boolean) => void;
  readonly onExitClick: () => void;
}

type DefaultProp =
  "onHeroPortraitClick" |
  "onSelectedArtifactChange" |
  "onTradeArtifacts" |
  "artifactNotTradablePromptVisible" |
  "onArtifactNotTradablePromptVisibleChange" |
  "onExitClick";

class HeroTradingWindowContainer extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, DefaultProp> = {
    artifactNotTradablePromptVisible: false,
    onArtifactNotTradablePromptVisibleChange: () => undefined,
    onExitClick: () => undefined,
    onHeroPortraitClick: () => undefined,
    onSelectedArtifactChange: () => undefined,
    onTradeArtifacts: () => undefined,
  };

  public render() {
    const { hero, otherHero } = this.props;

    return (
      <div>
        <HeroTradingWindow
          {...this.props}
          title={this.getTitle(hero.id, otherHero.id)}
          renderHeroPortrait={this.renderHeroPortrait}
          renderTroop={this.renderTroop}
          renderArtifact={this.renderArtifact}
        />
        {this.props.artifactNotTradablePromptVisible && this.renderArtifactNotTradablePrompt()}
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
    this.props.onHeroPortraitClick(hero!);
  }

  private readonly renderTroop = (hero: string, index: number) => {
    const h = this.props.hero.id === hero ?
      this.props.hero :
      this.props.otherHero;

    return (
      <TradingTroopSlot
        index={index}
        troop={h.army[index]}
      />
    );
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
