import * as React from "react";

import { CombatSide } from "heroes-core";

import * as styles from "./Tent.module.scss";

export interface TentProps {
  side: CombatSide;
  alignment: string;
  heroClass: string;
  onMouseEnter: (side: CombatSide) => void;
  onMouseLeave: (side: CombatSide) => void;
  onClick: (side: CombatSide) => void;
}

type DefaultProp =
  "onMouseEnter" |
  "onMouseLeave" |
  "onClick";

export class Tent extends React.Component<TentProps> {
  public static defaultProps: Pick<TentProps, DefaultProp> = {
    onClick: () => undefined,
    onMouseEnter: () => undefined,
    onMouseLeave: () => undefined,
  };

  public render() {
    return (
      <div
        className={`${styles.root} ${this.props.side === CombatSide.Attacker ? styles.attacker : styles.defender}`}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClick}
      >
        <img
          className={styles.background}
          src={`/assets/heroClasses/${this.props.heroClass}/tent.png`}
        />
        {this.renderBanner(this.props.alignment, this.props.heroClass)}
      </div>
    );
  }

  private renderBanner(alignment: string, heroClass: string) {
    return (
      <div className={styles.banner}>
        <div className={styles.bannerContainer}>
          <img src={`/assets/alignments/${alignment}/combat-banner.png`} />
          <div className={styles.bannerLetter}>
            <img
              src={`/assets/heroClasses/${heroClass}/letter.png`}
            />
          </div>
        </div>
      </div>
    );
  }

  private onMouseEnter = () => {
    this.props.onMouseEnter(this.props.side);
  }

  private onMouseLeave = () => {
    this.props.onMouseLeave(this.props.side);
  }

  private onClick = () => {
    this.props.onClick(this.props.side);
  }
}
