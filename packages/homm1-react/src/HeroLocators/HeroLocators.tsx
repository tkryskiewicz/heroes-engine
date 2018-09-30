import * as React from "react";

import { Hero } from "heroes-core";
import { HeroLimit } from "heroes-homm1";

import { HeroLocator } from "../HeroLocator";

export interface HeroLocatorsProps {
  heroes: Hero[];
  selectedIndex?: number;
  onSelectLocator?: (index: number) => void;
}

export class HeroLocators extends React.Component<HeroLocatorsProps> {
  public render() {
    return [...new Array(HeroLimit).keys()].map((i) => {
      const hero = this.props.heroes[i];

      return (
        <HeroLocator
          key={i}
          index={i}
          hero={hero ? { id: hero.id, mobility: hero.mobility } : undefined}
          selected={i === this.props.selectedIndex}
          onClick={this.onLocatorClick}
        />
      );
    });
  }

  private onLocatorClick = (index: number) => {
    if (!this.props.onSelectLocator) {
      return;
    }

    if (index !== this.props.selectedIndex && this.props.heroes[index]) {
      this.props.onSelectLocator(index);
    }
  }
}
