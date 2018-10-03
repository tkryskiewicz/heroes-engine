import { Col, Modal, Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Hero, HeroSkills, Troop } from "heroes-core";
import { Skill } from "heroes-homm1";

import { ArmyStrip } from "../ArmyStrip";
import { Crest } from "../Crest";
import { GameButton } from "../GameButton";
import { HeroPortrait } from "../HeroPortrait";
import { SkillInfo } from "../SkillInfo";
import { TroopWindow } from "../TroopWindow";
import { messages } from "./messages";

export interface HeroWindowProps {
  hero: Hero;
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

    const selectedTroop = this.props.selectedTroopIndex ? hero.army[this.props.selectedTroopIndex] : undefined;

    return (
      <div>
        <Row>
          <Col span={4}>
            <HeroPortrait
              hero={hero.id}
            />
          </Col>
          {this.renderSkills(hero.skills)}
        </Row>
        <Row>
          <Crest
            size="large"
            alignment={hero.alignment}
            heroClass={hero.heroClass}
          />
          <ArmyStrip
            army={hero.army}
            selectedTroopIndex={this.props.selectedTroopIndex}
            onSelectTroop={this.props.onSelectTroop}
            onSelectedTroopClick={this.props.onSelectedTroopClick}
            onSwapTroops={this.onSwapTroops}
          />
          {selectedTroop && this.props.troopDetailsVisible && this.renderTroopDetails(selectedTroop)}
        </Row>
        <Row>
          <Col span={1}>
            <GameButton
              group="hero-window"
              type="dismiss"
              onClick={this.onDismissHeroClick}
            />
            {this.props.dismissHeroPromptVisible && this.renderDismissHeroPrompt(this.props.dismissHeroPromptVisible)}
          </Col>
          <Col span={22} />
          <Col span={1}>
            <GameButton
              group="hero-window"
              type="exit"
              onClick={this.props.onExitClick}
            />
          </Col>
        </Row>
      </div>
    );
  }

  private renderSkills(skills: HeroSkills) {
    // TODO: extract skill order?
    return [Skill.AttackSkill, Skill.DefenseSkill, Skill.SpellPower, Skill.Knowledge].map((s) => (
      <Col
        key={s}
        span={4}
      >
        <SkillInfo
          skill={s}
          value={skills[s] || 0}
        />
      </Col>
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
            style={{ textAlign: "left" }}
            span={12}
          >
            <GameButton
              type="yes"
              onClick={this.onDismissHero}
            />
          </Col>
          <Col
            style={{ textAlign: "right" }}
            span={12}
          >
            <GameButton
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
