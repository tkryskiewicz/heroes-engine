import * as React from "react";

import { GameText } from "heroes-homm1-react-components";

import * as styles from "./HeroClassOverview.module.scss";

export interface HeroClassOverviewProps {
  readonly heroClass: string;
  readonly count: number;
}

export class HeroClassOverview extends React.Component<HeroClassOverviewProps> {
  public render() {
    return (
      <div className={styles.overview}>
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
      <div className={styles.count}>
        <GameText size="normal">
          {count}
        </GameText>
      </div>
    );
  }
}
