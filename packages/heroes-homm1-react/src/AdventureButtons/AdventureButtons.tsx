import { Col, Row } from "antd";
import * as React from "react";

import { canSelectNextHero, getNextHeroIndex, Hero } from "heroes-core";

import "./AdventureButtons.scss";

import { GameButton } from "../base";

export interface AdventureButtonsProps {
  heroes: Hero[];
  selectedIndex?: number;
  onSelectHero: (index: number) => void;
  onMoveClick: () => void;
  onKingdomOverviewClick: () => void;
  onEndTurnClick: () => void;
  onAdventureOptionsClick: () => void;
  onGameOptionsClick: () => void;
}

type DefaultProp =
  "onSelectHero" |
  "onMoveClick" |
  "onKingdomOverviewClick" |
  "onEndTurnClick" |
  "onAdventureOptionsClick" |
  "onGameOptionsClick";

export class AdventureButtons extends React.Component<AdventureButtonsProps> {
  public static defaultProps: Pick<AdventureButtonsProps, DefaultProp> = {
    onAdventureOptionsClick: () => undefined,
    onEndTurnClick: () => undefined,
    onGameOptionsClick: () => undefined,
    onKingdomOverviewClick: () => undefined,
    onMoveClick: () => undefined,
    onSelectHero: () => undefined,
  };

  public render() {
    const nextHeroEnabled = canSelectNextHero(this.props.heroes);

    return (
      <div className="adventure-buttons">
        <Row>
          <Col span={8}>
            <GameButton
              group="adventure"
              type="next-hero"
              disabled={!nextHeroEnabled}
              onClick={this.onNextHeroClick}
            />
          </Col>
          <Col span={8}>
            <GameButton
              group="adventure"
              type="move"
              onClick={this.props.onMoveClick}
            />
          </Col>
          <Col span={8}>
            <GameButton
              group="adventure"
              type="kingdom-overview"
              onClick={this.props.onKingdomOverviewClick}
            />
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <GameButton
              group="adventure"
              type="end-turn"
              onClick={this.props.onEndTurnClick}
            />
          </Col>
          <Col span={8}>
            <GameButton
              group="adventure"
              type="adventure-options"
              onClick={this.props.onAdventureOptionsClick}
            />
          </Col>
          <Col span={8}>
            <GameButton
              group="adventure"
              type="game-options"
              onClick={this.props.onGameOptionsClick}
            />
          </Col>
        </Row>
      </div>
    );
  }

  private onNextHeroClick = () => {
    const index = getNextHeroIndex(this.props.heroes, this.props.selectedIndex);

    if (index !== undefined) {
      this.props.onSelectHero(index);
    }
  }
}
