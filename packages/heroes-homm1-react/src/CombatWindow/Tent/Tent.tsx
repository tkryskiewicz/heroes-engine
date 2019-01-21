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
    const sideStyles = this.props.side === CombatSide.Attacker ?
      styles.backgroundAttacker :
      styles.backgroundDefender;

    return (
      <div
        className={styles.root}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClick}
      >
        <img
          className={`${styles.background} ${sideStyles}`}
          src={`/assets/heroClasses/${this.props.heroClass}/tent.png`}
        />
        {this.renderBanner(this.props.side)}
      </div>
    );
  }

  private renderBanner(side: CombatSide) {
    const sideStyles = side === CombatSide.Attacker ?
      styles.bannerAttacker :
      styles.bannerDefender;

    return (
      <div className={`${styles.banner} ${sideStyles}`}>
        <div className={styles.bannerContainer}>
          <img src={`/assets/alignments/${this.props.alignment}/combat-banner.png`} />
          <div className={styles.bannerLetter}>
            <img
              src={`/assets/heroClasses/${this.props.heroClass}/letter.png`}
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
