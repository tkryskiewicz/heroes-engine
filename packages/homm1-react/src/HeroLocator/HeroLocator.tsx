import * as React from "react";

import { HeroPortrait } from "../HeroPortrait";

export interface HeroLocatorProps {
  index: number;
  hero?: {
    id: string;
    mobility: number;
  };
  mobility?: number;
  selected?: boolean;
  onClick?: (index: number) => void;
}

export class HeroLocator extends React.Component<HeroLocatorProps> {
  public render() {
    const { hero } = this.props;

    const style: React.CSSProperties = {
      height: 32,
      position: "relative",
      width: 56,
    };

    return (
      <div
        style={style}
        onClick={this.onClick}
      >
        {this.renderBackground(this.props.index)}
        {hero && this.renderHero(hero.id, hero.mobility)}
        {this.props.selected && this.renderSelection()}
      </div>
    );
  }

  private renderBackground(index: number) {
    const style: React.CSSProperties = {
      left: 1,
      position: "absolute",
      top: 1,
    };

    return (
      <img
        style={style}
        src={`assets/ui/locators/background-${index}.jpg`}
      />
    );
  }

  private renderHero(hero: string, mobility: number) {
    const style: React.CSSProperties = {
      height: 23,
      left: 5,
      position: "absolute",
      top: 5,
      width: 46,
    };

    const mobilityStyle: React.CSSProperties = {
      position: "absolute",
      top: 0,
    };

    const portraitStyle: React.CSSProperties = {
      left: 8,
      position: "absolute",
    };

    return (
      <div style={style}>
        {/* // TODO: add background */}
        <img
          style={mobilityStyle}
          src={`assets/ui/locators/mobility/${mobility}.png`}
        />
        <div style={portraitStyle} >
          <HeroPortrait
            size="small"
            hero={hero}
          />
        </div>
      </div>
    );
  }

  private renderSelection() {
    const style: React.CSSProperties = {
      left: 0,
      position: "absolute",
      top: 0,
    };

    return (
      <img
        style={style}
        src="assets/ui/locators/selection.png"
      />
    );
  }

  private onClick = () => {
    if (!this.props.onClick) {
      return;
    }

    this.props.onClick(this.props.index);
  }
}
