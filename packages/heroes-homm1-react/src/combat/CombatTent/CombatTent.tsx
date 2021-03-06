import React from "react";

import { CombatSide } from "heroes-core";
import { noop } from "heroes-helpers";

import * as styles from "./CombatTent.module.scss";

export interface CombatTentProps {
  readonly side: CombatSide;
  readonly playerColor: string;
  readonly heroClass: string;
  readonly onMouseEnter: (side: CombatSide) => void;
  readonly onMouseLeave: (side: CombatSide) => void;
  readonly onClick: (side: CombatSide) => void;
}

type DefaultProp =
  "onMouseEnter" |
  "onMouseLeave" |
  "onClick";

export class CombatTent extends React.Component<CombatTentProps> {
  public static readonly defaultProps: Pick<CombatTentProps, DefaultProp> = {
    onClick: noop,
    onMouseEnter: noop,
    onMouseLeave: noop,
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
        {this.renderBanner(this.props.playerColor, this.props.heroClass)}
      </div>
    );
  }

  private renderBanner(playerColor: string, heroClass: string) {
    return (
      <div className={styles.banner}>
        <div className={styles.bannerContainer}>
          <img src={`/assets/playerColors/${playerColor}/combat-banner.png`} />
          <div className={styles.bannerLetter}>
            <img
              src={`/assets/heroClasses/${heroClass}/letter.png`}
            />
          </div>
        </div>
      </div>
    );
  }

  private readonly onMouseEnter = () => {
    this.props.onMouseEnter(this.props.side);
  }

  private readonly onMouseLeave = () => {
    this.props.onMouseLeave(this.props.side);
  }

  private readonly onClick = () => {
    this.props.onClick(this.props.side);
  }
}
