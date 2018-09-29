import { Col, Row } from "antd";
import * as React from "react";

import { Hero, HeroSkills } from "heroes-core";
import { Skill } from "heroes-homm1";

import { Crest } from "../Crest";
import { HeroPortrait } from "../HeroPortrait";
import { SkillInfo } from "../SkillInfo";

export interface HeroWindowProps {
  hero: Hero;
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
