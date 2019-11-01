import React from "react";
import { FormattedMessage } from "react-intl";

import { GameData, GameDate } from "heroes-core";
import {
  dateMessages,
  GameText,
  HeroClassOverview,
  KingdomOverviewWindow,
  kingdomOverviewWindowMessages,
  MineOverview,
  ResourceAmount,
  TownOverview,
  WithGameWindowProps,
} from "heroes-homm1-react";

export interface HeroClassSummary {
  readonly [heroClass: string]: number;
}

export interface TownSummary {
  readonly [town: string]: number;
}

export interface ResourceSummary {
  readonly [resource: string]: number;
}

export interface KingdomOverviewWindowContainerProps extends WithGameWindowProps {
  readonly data: Pick<GameData, "heroClasses" | "resources" | "towns">;
  readonly date: GameDate;
  readonly alignment: string;
  readonly heroClasses: HeroClassSummary;
  readonly castles: TownSummary;
  readonly towns: TownSummary;
  readonly mines: ResourceSummary;
  readonly resources: ResourceSummary;
  readonly goldPerDay: number;
  readonly onExitClick: () => void;
}

export class KingdomOverviewWindowContainer extends React.Component<KingdomOverviewWindowContainerProps> {
  public render() {
    const { data } = this.props;

    return (
      <KingdomOverviewWindow
        visible={this.props.visible}
        alignment={this.props.alignment}
        renderTitle={this.renderTitle}
        renderDate={this.renderDate}
        heroClasses={Object.keys(data.heroClasses)}
        renderHeroClassSummary={this.renderHeroClassSummary}
        towns={Object.keys(data.towns)}
        renderCastleSummary={this.renderCastleSummary}
        renderTownSummary={this.renderTownSummary}
        resources={Object.keys(data.resources)}
        renderMineSummary={this.renderMineSummary}
        renderResourceSummary={this.renderResourceSummary}
        goldPerDay={this.props.goldPerDay}
        onExitClick={this.props.onExitClick}
      />
    );
  }

  private readonly renderTitle = () => {
    return (
      <GameText size="large">
        <FormattedMessage {...kingdomOverviewWindowMessages.title} />
      </GameText>
    );
  }

  private readonly renderDate = () => {
    const { date } = this.props;

    return (
      <GameText size="large">
        <FormattedMessage {...dateMessages.month} /> {date.month}{", "}
        <FormattedMessage {...dateMessages.week} /> {date.week}{", "}
        <FormattedMessage {...dateMessages.day} /> {date.day}
      </GameText>
    );
  }

  private readonly renderHeroClassSummary = (heroClass: string) => {
    return (
      <HeroClassOverview
        heroClass={heroClass}
        count={this.props.heroClasses[heroClass] || 0}
      />
    );
  }

  private readonly renderCastleSummary = (town: string) => {
    return (
      <TownOverview
        town={town}
        isCastleBuilt={true}
        count={this.props.castles[town] || 0}
      />
    );
  }

  private readonly renderTownSummary = (town: string) => {
    return (
      <TownOverview
        town={town}
        count={this.props.towns[town] || 0}
      />
    );
  }

  private readonly renderMineSummary = (resource: string) => {
    return (
      <MineOverview
        resource={resource}
        count={this.props.mines[resource] || 0}
      />
    );
  }

  private readonly renderResourceSummary = (resource: string) => {
    return (
      <ResourceAmount
        resource={resource}
        amount={this.props.resources[resource] || 0}
      />
    );
  }
}
