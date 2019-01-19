import { Col, Row } from "antd";
import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { Army, Hero, HeroSkills } from "heroes-core";
import { ArmySize, ArtifactId, ArtifactLimit, SkillIds } from "heroes-homm1";

import "./HeroTradingWindow.scss";

import { buttonImages } from "./assets";

import { GameModal, HeroPortrait, ImageButton } from "../base";
import { GameText, GameWindow } from "../core";
import { getHeroNameMessage, getSkillNameMessage } from "../messages";
import { ArtifactSlot } from "./ArtifactSlot";
import { messages } from "./messages";
import { TroopSlot } from "./TroopSlot";

interface ArtifactSelection {
  hero: string;
  index: number;
}

export interface HeroTradingWindowProps {
  hero: Hero;
  otherHero: Hero;
  visible?: boolean;
  onHeroPortraitClick: (hero: string) => void;
  selectedArtifact?: ArtifactSelection;
  onSelectedArtifactChange: (value: ArtifactSelection) => void;
  onTradeArtifacts: (artifact: ArtifactSelection, withArtifact: ArtifactSelection) => void;
  artifactNotTradablePromptVisible: boolean;
  onArtifactNotTradablePromptVisibleChange: (visible: boolean) => void;
  onExitClick: () => void;
}

type DefaultProp =
  "onHeroPortraitClick" |
  "onSelectedArtifactChange" |
  "onTradeArtifacts" |
  "artifactNotTradablePromptVisible" |
  "onArtifactNotTradablePromptVisibleChange" |
  "onExitClick";

class HeroTradingWindow extends React.Component<HeroTradingWindowProps & InjectedIntlProps> {
  public static defaultProps: Pick<HeroTradingWindowProps, DefaultProp> = {
    artifactNotTradablePromptVisible: false,
    onArtifactNotTradablePromptVisibleChange: () => undefined,
    onExitClick: () => undefined,
    onHeroPortraitClick: () => undefined,
    onSelectedArtifactChange: () => undefined,
    onTradeArtifacts: () => undefined,
  };

  public render() {
    const { hero, otherHero, selectedArtifact } = this.props;

    return (
      <GameWindow
        width={448}
        visible={this.props.visible}
      >
        <div className="hero-trading-window">
          <div className="hero-trading-window-title">
            <GameText size="large">
              {this.getTitle(hero.id, otherHero.id)}
            </GameText>
          </div>
          <div className="hero-trading-window-portrait">
            <HeroPortrait
              hero={hero.id}
              onClick={this.onHeroPortraitClick}
            />
          </div>
          <div className="hero-trading-window-other-portrait">
            <HeroPortrait
              hero={otherHero.id}
              onClick={this.onHeroPortraitClick}
            />
          </div>
          <div className="hero-trading-window-army">
            {this.renderHeroArmy(hero.army)}
          </div>
          <div className="hero-trading-window-other-army">
            {this.renderHeroArmy(otherHero.army)}
          </div>
          <div className="hero-trading-window-skills">
            {this.renderSkills(hero, otherHero)}
          </div>
          <div className="hero-trading-window-artifacts">
            {this.renderArtifacts(hero, selectedArtifact)}
          </div>
          <div className="hero-trading-window-other-artifacts">
            {this.renderArtifacts(otherHero, selectedArtifact)}
          </div>
          <div className="hero-trading-window-exit">
            <ImageButton
              images={buttonImages.exit}
              onClick={this.props.onExitClick}
            />
          </div>
          {this.props.artifactNotTradablePromptVisible && this.renderArtifactNotTradablePrompt()}
        </div>
      </GameWindow>
    );
  }

  private getTitle(hero: string, otherHero: string) {
    const { formatMessage } = this.props.intl;

    const heroName = formatMessage(getHeroNameMessage(hero));
    const otherHeroName = formatMessage(getHeroNameMessage(otherHero));

    const title = formatMessage(messages.title, { heroName, otherHeroName });

    return title;
  }

  private renderSkills(hero: Hero, otherHero: Hero) {
    return (
      <Row>
        <Col span={4}>
          {this.renderHeroSkills(hero.skills)}
        </Col>
        <Col span={16}>
          {this.renderSkillNames()}
        </Col>
        <Col span={4}>
          {this.renderHeroSkills(otherHero.skills)}
        </Col>
      </Row>
    );
  }

  private renderSkillNames() {
    return SkillIds.map((s) => (
      <Row key={s}>
        <GameText size="normal">
          <FormattedMessage {...getSkillNameMessage(s)} />
        </GameText>
      </Row>
    ));
  }

  private renderHeroSkills(skills: HeroSkills) {
    return SkillIds.map((s) => (
      <Row key={s}>
        <GameText size="normal">
          {skills[s] || 0}
        </GameText>
      </Row>
    ));
  }

  private onHeroPortraitClick = (hero?: string) => {
    this.props.onHeroPortraitClick(hero!);
  }

  private renderHeroArmy(army: Army) {
    return [...new Array(ArmySize).keys()].map((i) => (
      <div
        key={i}
        className="hero-trading-window-troop"
      >
        <TroopSlot
          index={i}
          troop={army[i]}
        />
      </div>
    ));
  }

  private renderArtifacts(hero: Hero, selectedArtifact?: ArtifactSelection) {
    return [...new Array(ArtifactLimit).keys()].map((i) => {
      const artifact = hero.artifacts[i];

      return (
        <div
          key={i}
          className="hero-trading-window-artifact"
        >
          <ArtifactSlot
            index={i}
            hero={hero.id}
            artifact={artifact ? artifact.id : undefined}
            selected={selectedArtifact && selectedArtifact.hero === hero.id && selectedArtifact.index === i}
            onClick={this.onArtifactClick}
          />
        </div>
      );
    });
  }

  private onArtifactClick = (hero: string, index: number) => {
    const h = this.props.hero.id === hero ?
      this.props.hero :
      this.props.otherHero;

    const artifact = h.artifacts[index];

    if (!artifact) {
      return;
    }

    const isArtifactTradable = artifact.id !== ArtifactId.Spellbook;

    // TODO: simplify?
    // TODO: handle clicking on same artifact
    if (this.props.selectedArtifact) {
      if (!isArtifactTradable) {
        this.props.onArtifactNotTradablePromptVisibleChange(true);
      } else {
        this.props.onTradeArtifacts(this.props.selectedArtifact, { hero, index });
      }
    } else {
      if (!isArtifactTradable) {
        this.props.onArtifactNotTradablePromptVisibleChange(true);
      } else {
        this.props.onSelectedArtifactChange({ hero, index });
      }
    }
  }

  private renderArtifactNotTradablePrompt() {
    return (
      <GameModal
        type="okay"
        visible={true}
        onConfirmClick={this.onCloseArtifactNotTradablePrompt}
      >
        <GameText size="large">
          <FormattedMessage {...messages.artifactNotTradable} />
        </GameText>
      </GameModal>
    );
  }

  private onCloseArtifactNotTradablePrompt = () => {
    this.props.onArtifactNotTradablePromptVisibleChange(false);
  }
}

const HeroTradingWindowWrapped = injectIntl(HeroTradingWindow);

export {
  HeroTradingWindowWrapped as HeroTradingWindow,
};
