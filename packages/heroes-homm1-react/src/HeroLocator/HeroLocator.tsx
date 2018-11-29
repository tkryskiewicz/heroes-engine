import * as React from "react";

import "./HeroLocator.scss";

import BackgroundImage = require("./hero-locator-background.png");
import { mobilityImages } from "./mobility";

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
          src={BackgroundImage}
        />
        <img
          className="hero-locator-mobility"
          src={mobilityImages[mobility]}
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
