import * as React from "react";

import { Hero } from "heroes-core";
import { HeroLimit } from "heroes-homm1";

import { HeroLocator } from "../HeroLocator";

export interface HeroLocatorsProps {
  readonly heroes: Hero[];
  readonly selectedIndex?: number;
  readonly onLocatorClick: (index: number) => void;
}

type DefaultProp =
  "onLocatorClick";

// TODO: unify hero and town locators?
export class HeroLocators extends React.Component<HeroLocatorsProps> {
  public static readonly defaultProps: Pick<HeroLocatorsProps, DefaultProp> = {
    onLocatorClick: () => undefined,
  };

  public render() {
    return [...new Array(HeroLimit).keys()]
      .map((i) => this.renderLocator(i, this.props.heroes[i]));
  }

  private renderLocator(index: number, hero?: Hero) {
    return (
      <HeroLocator
        key={index}
        index={index}
        hero={hero ? { id: hero.id, mobility: hero.mobility } : undefined}
        selected={index === this.props.selectedIndex}
        onClick={this.props.onLocatorClick}
      />
    );
  }
}
