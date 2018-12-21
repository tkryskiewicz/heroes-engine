import * as React from "react";

import "./HeroClassOverview.scss";

import { GameText } from "../../core";

export interface HeroClassOverviewProps {
  heroClass: string;
  count: number;
}

export class HeroClassOverview extends React.Component<HeroClassOverviewProps> {
  public render() {
    return (
      <div className="hero-class-overview">
        {this.renderHero(this.props.heroClass)}
        {this.renderCount(this.props.count)}
      </div>
    );
  }

  private renderHero(heroClass: string) {
    return (
      <img src={`assets/heroClasses/${heroClass}/overview-icon.png`} />
    );
  }

  private renderCount(count: number) {
    return (
      <div className="hero-class-overview-count">
        <GameText size="normal">
          {count}
        </GameText>
      </div>
    );
  }
}
