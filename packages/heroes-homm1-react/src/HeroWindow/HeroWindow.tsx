import { Col, Modal, Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Hero, HeroSkills, Troop } from "heroes-core";
import { ArtifactLimit, SkillIds } from "heroes-homm1";

import "./HeroWindow.scss";

import { ArmyStrip } from "../ArmyStrip";
import { Crest } from "../Crest";
import { GameButton } from "../GameButton";
import { GameText } from "../GameText";
import { HeroPortrait } from "../HeroPortrait";
import { getHeroNameMessage } from "../messages";
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
  onDismissHero?: (hero: string) => void;
  onExitClick?: () => void;
}

export class HeroWindow extends React.Component<HeroWindowProps> {
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
        <div className="hero-window-skills">
          {this.renderSkills(hero.skills)}
        </div>
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
        <div className="hero-window-artifacts">
          {this.renderArtifacts()}
        </div>
        <div className="hero-window-exit">
          <GameButton
            group="hero-window"
            type="exit"
            onClick={this.props.onExitClick}
          />
        </div>
        <div className="hero-window-title">
          <GameText size="large">
            <FormattedMessage {...messages.title} />
          </GameText>
        </div>
      </div>
    );
  }

  private renderSkills(skills: HeroSkills) {
    return SkillIds.map((s) => (
      <div className="hero-window-skill">
        <SkillInfo
          skill={s}
          value={skills[s] || 0}
        />
      </div>
    ));
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
    return [...new Array(ArtifactLimit).keys()].map((i) => (
      <div
        className="hero-window-artifact"
        key={i}
      >
        <ArtifactSlot
          index={i}
        />
      </div>
    ));
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
    if (!this.props.onDismissHero) {
      return;
    }

    this.props.onDismissHero(this.props.hero.id);
  }
}
