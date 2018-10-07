import { Col, Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { HeroClass, Resource, TownId } from "heroes-homm1";

import { GameButton } from "../GameButton";
import { GameText } from "../GameText";
import { HeroClassOverview } from "./HeroClassOverview";
import { messages } from "./messages";
import { MineOverview } from "./MineOverview";
import { ResourceOverview } from "./ResourceOverview";
import { TownOverview } from "./TownOverview";

const heroClassOrder = [
  HeroClass.Knight,
  HeroClass.Barbarian,
  HeroClass.Sorceress,
  HeroClass.Warlock,
];

const townOrder = [
  TownId.Farm,
  TownId.Plains,
  TownId.Forest,
  TownId.Mountains,
];

const resourceOrder = [
  Resource.Wood,
  Resource.Mercury,
  Resource.Ore,
  Resource.Sulfur,
  Resource.Crystal,
  Resource.Gems,
  Resource.Gold,
];
export interface KingdomOverviewWindowProps {
  alignment: string;
  heroClasses: { [heroClass: string]: number };
  castles: { [town: string]: number };
  towns: { [town: string]: number };
  mines: { [resource: string]: number };
  resources: { [resource: string]: number };
  goldPerDay: number;
  onExitClick?: () => void;
}

export class KingdomOverviewWindow extends React.Component<KingdomOverviewWindowProps> {
  public render() {
    const style: React.CSSProperties = {
      position: "relative",
      textAlign: "center",
    };

    return (
      <div style={style}>
        {this.renderBanner(this.props.alignment)}
        <Row>
          <Col span={3} />
          <Col span={10}>
            <GameText size="large">
              <FormattedMessage {...messages.title} />
            </GameText>
          </Col>
          <Col span={10}>
            <GameText size="large">
              Month 1, Week 1, Day 1
            </GameText>
          </Col>
        </Row>
        <Row>
          <Col span={3}>
            <GameText size="normal">
              <FormattedMessage {...messages.heroClassOverview} />
            </GameText>
          </Col>
          {this.renderHeroClasses(this.props.heroClasses)}
        </Row>
        <Row>
          <Col span={3}>
            <GameText size="normal">
              <FormattedMessage {...messages.castleOverview} />
            </GameText>
          </Col>
          {this.renderCastles(this.props.castles)}
        </Row>
        <Row>
          <Col span={3}>
            <GameText size="normal">
              <FormattedMessage {...messages.townOverview} />
            </GameText>
          </Col>
          {this.renderTowns(this.props.towns)}
        </Row>
        <Row>
          <Col span={3}>
            <GameText size="normal">
              <FormattedMessage {...messages.mineOverview} />
            </GameText>
          </Col>
          {this.renderMines(this.props.mines)}
        </Row>
        <Row>
          <Col span={3}>
            <GameText size="normal">
              <FormattedMessage {...messages.resourceOverview} />
            </GameText>
          </Col>
          {this.renderResources(this.props.resources)}
        </Row>
        <Row>
          <Col span={3} />
          <Col span={16}>
            {this.renderGoldPerDay(this.props.goldPerDay)}
          </Col>
          <Col
            style={{ textAlign: "right" }}
            span={4}
          >
            <GameButton
              type="exit"
              onClick={this.props.onExitClick}
            />
          </Col>
        </Row>
      </div>
    );
  }

  private renderBanner(alignment: string) {
    const style: React.CSSProperties = {
      left: 0,
      position: "absolute",
      top: 0,
    };

    return (
      <img
        style={style}
        src={`assets/alignments/${alignment}/banner.jpg`}
      />
    );
  }

  private renderHeroClasses(heroClasses: { [heroClass: string]: number }) {
    return heroClassOrder.map((c) => (
      <Col
        key={c}
        span={5}
      >
        <HeroClassOverview
          heroClass={c}
          count={heroClasses[c] || 0}
        />
      </Col>
    ));
  }

  private renderCastles(castles: { [town: string]: number }) {
    return townOrder.map((t) => (
      <Col
        key={t}
        span={5}
      >
        <TownOverview
          town={t}
          count={castles[t] || 0}
        />
      </Col>
    ));
  }

  private renderTowns(towns: { [town: string]: number }) {
    return townOrder.map((t) => (
      <Col
        key={t}
        span={5}
      >
        <TownOverview
          town={t}
          isCastleBuilt={true}
          count={towns[t] || 0}
        />
      </Col>
    ));
  }

  private renderMines(mines: { [resource: string]: number }) {
    return resourceOrder.map((r) => (
      <Col
        key={r}
        span={3}
      >
        <MineOverview
          resource={r}
          count={mines[r] || 0}
        />
      </Col>
    ));
  }

  private renderResources(resources: { [resource: string]: number }) {
    return resourceOrder.map((r) => (
      <Col
        key={r}
        span={3}
      >
        <ResourceOverview
          resource={r}
          count={resources[r] || 0}
        />
      </Col>
    ));
  }

  private renderGoldPerDay(amount: number) {
    const textStyle: React.CSSProperties = {
      bottom: 2,
      left: 0,
      paddingRight: "20px",
      position: "absolute",
      textAlign: "right",
      width: "100%",
    };

    return (
      <div style={{ display: "inline-block", position: "relative", width: 201, height: 46 }}>
        <img src="assets/ui/kingdom-overview/gold-per-day.jpg" />
        <div style={textStyle}>
          <GameText size="normal">
            <FormattedMessage {...messages.goldPerDay} />:<br />
            {amount}
          </GameText>
        </div>
      </div>
    );
  }
}
