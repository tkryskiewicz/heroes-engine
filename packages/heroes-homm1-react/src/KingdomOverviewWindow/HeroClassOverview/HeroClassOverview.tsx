import * as React from "react";
import { GameText } from "../../GameText";

export interface HeroClassOverviewProps {
  heroClass: string;
  count: number;
}

export class HeroClassOverview extends React.Component<HeroClassOverviewProps> {
  public render() {
    const style: React.CSSProperties = {
      display: "inline-block",
      verticalAlign: "bottom",
    };

    return (
      <div style={style}>
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
    const style: React.CSSProperties = {
      display: "inline-block",
      height: 38,
      marginLeft: 10,
      position: "relative",
      width: 33,
    };

    const imageStyle: React.CSSProperties = {
      left: 0,
      position: "absolute",
      top: 0,
    };

    const countStyle: React.CSSProperties = {
      left: 0,
      position: "absolute",
      textAlign: "center",
      top: 7,
      width: "100%",
    };

    return (
      <div style={style}>
        <img
          style={imageStyle}
          src="assets/ui/kingdom-overview/hero-count.png"
        />
        <div style={countStyle}>
          <GameText size="normal">
            {count}
          </GameText>
        </div>
      </div>
    );
  }
}
