import * as React from "react";

import {
  HeroClassOverview,
  KingdomOverviewWindow,
  KingdomOverviewWindowProps,
  MineOverview,
  ResourceAmount,
  TownOverview,
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

export interface KingdomOverviewWindowContainerProps extends KingdomOverviewWindowProps {
  readonly heroClasses: HeroClassSummary;
  readonly castles: TownSummary;
  readonly towns: TownSummary;
  readonly mines: ResourceSummary;
  readonly resources: ResourceSummary;
}

export class KingdomOverviewWindowContainer extends React.Component<KingdomOverviewWindowContainerProps> {
  public render() {
    return (
      <KingdomOverviewWindow
        {...this.props}
        renderHeroClassSummary={this.renderHeroClassSummary}
        renderCastleSummary={this.renderCastleSummary}
        renderTownSummary={this.renderTownSummary}
        renderMineSummary={this.renderMineSummary}
        renderResourceSummary={this.renderResourceSummary}
      />
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
