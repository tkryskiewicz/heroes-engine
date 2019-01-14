import { Col, Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Resources } from "heroes-core";
import { HeroClassIds, Resource, TownIds } from "heroes-homm1";

import "./KingdomOverviewWindow.scss";

import { buttonImages } from "./assets";

import { ImageButton, ResourceAmount } from "../base";
import { GameText, withGameWindow } from "../core";
import { HeroClassOverview } from "./HeroClassOverview";
import { messages } from "./messages";
import { MineOverview } from "./MineOverview";
import { TownOverview } from "./TownOverview";

const resourceOrder = [
  Resource.Wood,
  Resource.Mercury,
  Resource.Ore,
  Resource.Sulfur,
  Resource.Crystal,
  Resource.Gems,
  Resource.Gold,
];

export interface HeroClassSummary {
  [heroClass: string]: number;
}

export interface TownSummary {
  [town: string]: number;
}

export interface KingdomOverviewWindowProps {
  alignment: string;
  heroClasses: HeroClassSummary;
  castles: TownSummary;
  towns: TownSummary;
  mines: { [resource: string]: number };
  resources: Resources;
  goldPerDay: number;
  onExitClick?: () => void;
}

class KingdomOverviewWindow extends React.Component<KingdomOverviewWindowProps> {
  public render() {
    return (
      <div className="kingdom-overview-window">
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
            className="kingdom-overview-window-exit"
            span={4}
          >
            <ImageButton
              images={buttonImages.exit}
              onClick={this.props.onExitClick}
            />
          </Col>
        </Row>
      </div>
    );
  }

  private renderBanner(alignment: string) {
    return (
      <img
        className="kingdom-overview-window-banner"
        src={`assets/alignments/${alignment}/banner.jpg`}
      />
    );
  }

  private renderHeroClasses(heroClasses: { [heroClass: string]: number }) {
    return HeroClassIds.map((c) => (
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
    return TownIds.map((t) => (
      <Col
        key={t}
        span={5}
      >
        <TownOverview
          town={t}
          isCastleBuilt={true}
          count={castles[t] || 0}
        />
      </Col>
    ));
  }

  private renderTowns(towns: { [town: string]: number }) {
    return TownIds.map((t) => (
      <Col
        key={t}
        span={5}
      >
        <TownOverview
          town={t}
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

  private renderResources(resources: Resources) {
    return resourceOrder.map((r) => (
      <Col
        key={r}
        span={3}
      >
        <ResourceAmount
          resource={r}
          amount={resources[r] || 0}
        />
      </Col>
    ));
  }

  private renderGoldPerDay(amount: number) {
    return (
      <div className="kingdom-overview-window-gold-per-day">
        <div className="kingdom-overview-window-gold-per-day-text">
          <GameText size="normal">
            <FormattedMessage {...messages.goldPerDay} />:<br />
            {amount}
          </GameText>
        </div>
      </div>
    );
  }
}

const KingdomOverviewWindowWrapped = withGameWindow(640)(KingdomOverviewWindow);

export {
  KingdomOverviewWindowWrapped as KingdomOverviewWindow,
};
