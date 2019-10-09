import React from "react";

import * as styles from "./HeroLocator.module.scss";

import { BackgroundImage, mobilityImages } from "./assets";

import { Locator } from "../Locator";

interface Hero {
  readonly id: string;
  readonly mobility: number;
}

export interface HeroLocatorProps {
  readonly index: number;
  readonly hero?: Hero;
  readonly selected?: boolean;
  readonly onClick?: (index: number) => void;
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
      <div className={styles.root}>
        <img
          className={styles.background}
          src={BackgroundImage}
        />
        <img
          className={styles.mobility}
          src={mobilityImages[mobility]}
        />
        <div className={styles.portrait}>
          <img
            src={`assets/heroes/${hero}/locator.jpg`}
          />
        </div>
      </div>
    );
  }
}
