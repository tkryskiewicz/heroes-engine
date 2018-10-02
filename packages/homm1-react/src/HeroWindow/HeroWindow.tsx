import { Col, Row } from "antd";
import * as React from "react";

import { Hero, HeroSkills } from "heroes-core";
import { Skill } from "heroes-homm1";

import { ArmyStrip } from "../ArmyStrip";
import { Crest } from "../Crest";
import { GameButton } from "../GameButton";
import { HeroPortrait } from "../HeroPortrait";
import { SkillInfo } from "../SkillInfo";

export interface HeroWindowProps {
  hero: Hero;
  selectedTroopIndex?: number;
  onSelectTroop?: (index: number) => void;
  onSelectedTroopClick?: (index: number) => void;
  onSwapTroops?: (index: number, withIndex: number) => void;
  onExit?: () => void;
}

export class HeroWindow extends React.Component<HeroWindowProps> {
  public render() {
    return (
      <div>
        <Row>
          <Col span={4}>
            <HeroPortrait
              hero={this.props.hero.id}
            />
          </Col>
          {this.renderSkills(this.props.hero.skills)}
        </Row>
        <Row>
          <Crest
            size="large"
            alignment={this.props.hero.alignment}
            heroClass={this.props.hero.heroClass}
          />
          <ArmyStrip
            army={this.props.hero.army}
            selectedTroopIndex={this.props.selectedTroopIndex}
            onSelectTroop={this.props.onSelectTroop}
            onSelectedTroopClick={this.props.onSelectedTroopClick}
            onSwapTroops={this.props.onSwapTroops}
          />
        </Row>
        <Row>
          <Col span={1} />
          <Col span={22} />
          <Col span={1}>
            <GameButton
              group="hero-window"
              type="exit"
              onClick={this.props.onExit}
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
}
