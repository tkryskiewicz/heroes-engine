import { Col, Row } from "antd";
import * as React from "react";

import { Resources, Town } from "heroes-core";

import { ArmyStrip } from "../ArmyStrip";
import { Crest } from "../Crest";
import { GameButton } from "../GameButton";
import { HeroPortrait } from "../HeroPortrait";
import { TownView } from "../TownView";
import { Treasury } from "./Treasury";

export interface TownWindowProps {
  town: Town;
  resources: Resources;
  onExitClick?: () => void;
}

export class TownWindow extends React.Component<TownWindowProps> {
  public render() {
    const { town } = this.props;

    return (
      <div>
        <Row>
          <TownView
            town={town}
          />
        </Row>
        <Row>
          <Col span={20}>
            <Row>
              <Crest
                size="large"
                alignment={town.alignment}
                heroClass={town.heroClass}
              />
              <ArmyStrip
                army={town.garrison}
              />
            </Row>
            <Row>
              <HeroPortrait
                hero={town.visitingHero ? town.visitingHero.id : undefined}
              />
              <ArmyStrip
                army={town.visitingHero ? town.visitingHero.army : []}
              />
            </Row>
          </Col>
          <Col span={4}>
            <Treasury
              resources={this.props.resources}
            />
          </Col>
        </Row>
        <Row style={{ textAlign: "right" }}>
          <GameButton
            group="town-window"
            type="exit"
            onClick={this.props.onExitClick}
          />
        </Row>
      </div>
    );
  }
}
