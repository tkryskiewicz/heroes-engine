import { Col, Modal, Row } from "antd";
import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { Hero, HeroSkills, Troop } from "heroes-core";
import { ArtifactLimit, SkillIds } from "heroes-homm1";

import "./HeroWindow.scss";

import { ArmyStrip } from "../ArmyStrip";
import { Crest } from "../Crest";
import { GameButton } from "../GameButton";
import { GameText } from "../GameText";
import { HeroPortrait } from "../HeroPortrait";
import { getHeroNameMessage, getSkillDescriptionMessage, getSkillNameMessage } from "../messages";
import { TroopWindow } from "../TroopWindow";
import { ArtifactSlot } from "./ArtifactSlot";
import { messages } from "./messages";
import { MiscInfo } from "./MiscInfo";
import { SkillInfo } from "./SkillInfo";

export interface HeroWindowProps {
  hero: Hero;
  onCrestClick?: () => void;
  selectedTroopIndex?: number;
  onSelectTroop?: (index: number) => void;
  onSelectedTroopClick?: (index: number) => void;
  onSwapTroops?: (hero: string, index: number, withIndex: number) => void;
  troopDetailsVisible?: boolean;
  onExitTroopDetails?: () => void;
  dismissHeroPromptVisible?: boolean;
  onDismissHeroClick?: () => void;
  onCancelDismissHeroClick?: () => void;
  onConfirmDismissHeroClick?: (hero: string) => void;
  statusText: string;
  onStatusTextChange?: (value: string) => void;
  onExitClick?: () => void;
}

class HeroWindow extends React.Component<HeroWindowProps & InjectedIntlProps> {
  public componentDidMount() {
    this.setDefaultStatusText();
  }

  public render() {
    const { hero } = this.props;

    const selectedTroop = this.props.selectedTroopIndex ?
      hero.army[this.props.selectedTroopIndex] :
      undefined;

    return (
      <div className="hero-window">
        <div className="hero-window-name">
          <GameText size="large">
            <FormattedMessage {...getHeroNameMessage(hero.id)} />
          </GameText>
        </div>
        <div className="hero-window-portrait">
          <HeroPortrait
            hero={hero.id}
          />
        </div>
        {this.renderSkills(hero.skills)}
        <div className="hero-window-misc-info">
          <MiscInfo
            morale={hero.morale}
            luck={hero.luck}
            experience={hero.experience}
          />
        </div>
        <div className="hero-window-crest">
          <Crest
            alignment={hero.alignment}
            heroClass={hero.heroClass}
            onClick={this.props.onCrestClick}
          />
        </div>
        <div className="hero-window-army">
          <ArmyStrip
            army={hero.army}
            selectedTroopIndex={this.props.selectedTroopIndex}
            onSelectTroop={this.props.onSelectTroop}
            onSelectedTroopClick={this.props.onSelectedTroopClick}
            onSwapTroops={this.onSwapTroops}
          />
          {selectedTroop && this.props.troopDetailsVisible && this.renderTroopDetails(selectedTroop)}
        </div>
        <div className="hero-window-dismiss">
          <GameButton
            group="hero-window"
            type="dismiss"
            onClick={this.onDismissHeroClick}
          />
          {this.props.dismissHeroPromptVisible && this.renderDismissHeroPrompt(this.props.dismissHeroPromptVisible)}
        </div>
        {this.renderArtifacts()}
        <div className="hero-window-exit">
          <GameButton
            group="hero-window"
            type="exit"
            onClick={this.props.onExitClick}
          />
        </div>
        <div className="hero-window-title">
          <GameText size="large">
            {this.props.statusText}
          </GameText>
        </div>
      </div>
    );
  }

  private renderSkills(skills: HeroSkills) {
    const content = SkillIds.map((s) => this.renderSkill(s, skills[s] || 0));

    return (
      <div className="hero-window-skills">
        {content}
      </div>
    );
  }

  private renderSkill(skill: string, value: number) {
    return (
      <div
        className="hero-window-skill"
        key={skill}
      >
        <SkillInfo
          skill={skill}
          value={value}
          onMouseEnter={this.onSkillMouseEnter}
          onMouseLeave={this.onSkillMouseLeave}
          onClick={this.onSkillClick}
        />
      </div>
    );
  }

  private onSkillMouseEnter = (skill: string) => {
    const { formatMessage } = this.props.intl;

    const skillName = formatMessage(getSkillNameMessage(skill));

    const statusText = formatMessage(messages.skillInfo, { skillName });

    this.onStatusTextChange(statusText);
  }

  private onSkillMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private onSkillClick = (skill: string) => {
    Modal.info({
      content: <FormattedMessage {...getSkillDescriptionMessage(skill)} />,
      title: <FormattedMessage {...getSkillNameMessage(skill)} />,
    });
  }

  private onSwapTroops = (index: number, withIndex: number) => {
    if (!this.props.onSwapTroops) {
      return;
    }

    this.props.onSwapTroops(this.props.hero.id, index, withIndex);
  }

  private renderTroopDetails(troop: Troop) {
    return (
      <Modal
        visible={true}
      >
        <TroopWindow
          troop={troop}
        />
      </Modal>
    );
  }

  private renderArtifacts() {
    const content = [...new Array(ArtifactLimit).keys()].map((i) => this.renderArtifact(i));

    return (
      <div className="hero-window-artifacts">
        {content}
      </div>
    );
  }

  private renderArtifact(index: number) {
    return (
      <div
        className="hero-window-artifact"
        key={index}
      >
        <ArtifactSlot
          index={index}
        />
      </div>
    );
  }

  private renderDismissHeroPrompt(visible: boolean) {
    return (
      <Modal
        footer={[]}
        visible={visible}
      >
        <Row>
          <FormattedMessage {...messages.dismissHeroMessage} />
        </Row>
        <Row>
          <Col
            className="hero-window-dismiss-yes"
            span={12}
          >
            <GameButton
              group="system"
              type="yes"
              onClick={this.onDismissHero}
            />
          </Col>
          <Col
            className="hero-window-dismiss-no"
            span={12}
          >
            <GameButton
              group="system"
              type="no"
              onClick={this.props.onCancelDismissHeroClick}
            />
          </Col>
        </Row>
      </Modal>
    );
  }

  private onDismissHeroClick = () => {
    if (!this.props.onDismissHeroClick) {
      return;
    }

    this.props.onDismissHeroClick();
  }

  private onDismissHero = () => {
    if (!this.props.onConfirmDismissHeroClick) {
      return;
    }

    this.props.onConfirmDismissHeroClick(this.props.hero.id);
  }

  private onStatusTextChange(text: string) {
    if (!this.props.onStatusTextChange) {
      return;
    }

    this.props.onStatusTextChange(text);
  }

  private setDefaultStatusText() {
    const statusText = this.props.intl.formatMessage(messages.defaultStatusText);

    this.onStatusTextChange(statusText);
  }
}

const HeroWindowWrapped = injectIntl(HeroWindow);

export { HeroWindowWrapped as HeroWindow };
