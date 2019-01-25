import { Col, Row } from "antd";
import * as React from "react";

import { canSelectNextHero, getNextHeroIndex, Hero } from "heroes-core";

import * as styles from "./AdventureButtons.module.scss";

import { buttonImages } from "./assets";

import { ImageButton } from "../base";

export interface AdventureButtonsProps {
  readonly heroes: Hero[];
  readonly selectedIndex?: number;
  readonly onSelectHero: (index: number) => void;
  readonly onMoveClick: () => void;
  readonly onKingdomOverviewClick: () => void;
  readonly onEndTurnClick: () => void;
  readonly onAdventureOptionsClick: () => void;
  readonly onGameOptionsClick: () => void;
}

type DefaultProp =
  "onSelectHero" |
  "onMoveClick" |
  "onKingdomOverviewClick" |
  "onEndTurnClick" |
  "onAdventureOptionsClick" |
  "onGameOptionsClick";

export class AdventureButtons extends React.Component<AdventureButtonsProps> {
  public static readonly defaultProps: Pick<AdventureButtonsProps, DefaultProp> = {
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
      <div className={styles.root}>
        <Row>
          <Col span={8}>
            <ImageButton
              images={buttonImages.nextHero}
              disabled={!nextHeroEnabled}
              onClick={this.onNextHeroClick}
            />
          </Col>
          <Col span={8}>
            <ImageButton
              images={buttonImages.move}
              onClick={this.props.onMoveClick}
            />
          </Col>
          <Col span={8}>
            <ImageButton
              images={buttonImages.kingdomOverview}
              onClick={this.props.onKingdomOverviewClick}
            />
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <ImageButton
              images={buttonImages.endTurn}
              onClick={this.props.onEndTurnClick}
            />
          </Col>
          <Col span={8}>
            <ImageButton
              images={buttonImages.adventureOptions}
              onClick={this.props.onAdventureOptionsClick}
            />
          </Col>
          <Col span={8}>
            <ImageButton
              images={buttonImages.gameOptions}
              onClick={this.props.onGameOptionsClick}
            />
          </Col>
        </Row>
      </div>
    );
  }

  private readonly onNextHeroClick = () => {
    const index = getNextHeroIndex(this.props.heroes, this.props.selectedIndex);

    if (index !== undefined) {
      this.props.onSelectHero(index);
    }
  }
}
