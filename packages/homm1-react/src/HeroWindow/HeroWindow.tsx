import { Row } from "antd";
import * as React from "react";

import { Hero } from "heroes-core";

import { Crest } from "../Crest";
import { HeroPortrait } from "../HeroPortrait";

export interface HeroWindowProps {
  hero: Hero;
}

export class HeroWindow extends React.Component<HeroWindowProps> {
  public render() {
    return (
      <div>
        <Row>
          <HeroPortrait
            hero={this.props.hero.id}
          />
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
}
