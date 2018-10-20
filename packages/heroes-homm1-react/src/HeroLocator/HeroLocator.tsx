import * as React from "react";

import { Locator } from "../Locator";

export interface HeroLocatorProps {
  index: number;
  hero?: {
    id: string;
    mobility: number;
  };
  selected?: boolean;
  onClick?: (index: number) => void;
}

export class HeroLocator extends React.Component<HeroLocatorProps> {
  public render() {
    return (
      <Locator
        index={this.props.index}
        selected={this.props.selected}
        onClick={this.props.onClick}
      >
        {this.props.hero && this.renderHero(this.props.hero.id, this.props.hero.mobility)}
      </Locator>
    );
  }

  private renderHero(hero: string, mobility: number) {
    const style: React.CSSProperties = {
      height: 22,
      left: 5,
      position: "relative",
      top: 5,
      width: 46,
    };

    const backgroundStyle: React.CSSProperties = {
      position: "absolute",
      top: 0,
    };

    const mobilityStyle: React.CSSProperties = {
      position: "absolute",
      top: 0,
    };

    const portraitStyle: React.CSSProperties = {
      left: 8,
      position: "absolute",
      top: -1,
    };

    return (
      <div style={style}>
        <img
          style={backgroundStyle}
          src="assets/ui/locators/hero-locator-background.png"
        />
        <img
          style={mobilityStyle}
          src={`assets/ui/locators/mobility/${mobility}.png`}
        />
        <div style={portraitStyle} >
          <img
            src={`assets/heroes/${hero}/locator.jpg`}
          />
        </div>
      </div>
    );
  }
}
