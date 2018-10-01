import { Col, Row } from "antd";
import * as React from "react";

import { canSelectNextHero, getNextHeroIndex, Hero } from "heroes-core";

import { GameButton } from "../GameButton";

export interface AdventureButtonsProps {
  heroes: Hero[];
  selectedIndex?: number;
  onSelectHero?: (index: number) => void;
  onMoveClick?: () => void;
  onKingdomOverviewClick?: () => void;
  onEndTurnClick?: () => void;
  onAdventureOptionsClick?: () => void;
  onGameOptionsClick?: () => void;
}

export class AdventureButtons extends React.Component<AdventureButtonsProps> {
  public render() {
    const nextHeroEnabled = canSelectNextHero(this.props.heroes);

    return (
      <>
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
      </>
    );
  }

  private onNextHeroClick = () => {
    if (!this.props.onSelectHero) {
      return;
    }

    const index = getNextHeroIndex(this.props.heroes, this.props.selectedIndex);

    if (index !== undefined) {
      this.props.onSelectHero(index);
    }
  }
}
