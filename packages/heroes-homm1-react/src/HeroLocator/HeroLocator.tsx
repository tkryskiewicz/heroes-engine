import * as React from "react";

import "./HeroLocator.scss";

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
    return (
      <div className="hero-locator">
        <img
          className="hero-locator-background"
          src="assets/ui/locators/hero-locator-background.png"
        />
        <img
          className="hero-locator-mobility"
          src={`assets/ui/locators/mobility/${mobility}.png`}
        />
        <div className="hero-locator-portrait">
          <img
            src={`assets/heroes/${hero}/locator.jpg`}
          />
        </div>
      </div>
    );
  }
}
