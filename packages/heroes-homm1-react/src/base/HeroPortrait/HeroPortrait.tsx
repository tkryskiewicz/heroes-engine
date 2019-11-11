import React from "react";

import { noop } from "heroes-helpers";

import * as styles from "./HeroPortrait.module.scss";

export interface HeroPortraitProps {
  readonly hero?: string;
  readonly onMouseEnter: (hero?: string) => void;
  readonly onMouseLeave: (hero?: string) => void;
  readonly onClick: (hero?: string) => void;
}

export class HeroPortrait extends React.Component<HeroPortraitProps> {
  public static readonly defaultProps: Pick<HeroPortraitProps, "onMouseEnter" | "onMouseLeave" | "onClick"> = {
    onClick: noop,
    onMouseEnter: noop,
    onMouseLeave: noop,
  };

  public render() {
    return (
      <div
        className={styles.root}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClick}
      >
        {this.props.hero ? this.renderPortrait(this.props.hero) : this.renderEmpty()}
      </div>
    );
  }

  private renderPortrait(hero: string) {
    return (
      <img src={`assets/heroes/${hero}/portrait.jpg`} />
    );
  }

  private renderEmpty() {
    return (
      <img src={`assets/heroes/portrait-empty.jpg`} />
    );
  }

  private readonly onMouseEnter = () => {
    this.props.onMouseEnter(this.props.hero);
  }

  private readonly onMouseLeave = () => {
    this.props.onMouseLeave(this.props.hero);
  }

  private readonly onClick = () => {
    this.props.onClick(this.props.hero);
  }
}
