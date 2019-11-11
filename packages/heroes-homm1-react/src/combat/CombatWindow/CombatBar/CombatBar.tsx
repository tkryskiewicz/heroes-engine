import React from "react";

import { noop } from "heroes-helpers";

import * as styles from "./CombatBar.module.scss";

import { buttonImages } from "./assets";

import { ImageButton } from "../../../base";
import { GameText } from "../../../core";

export interface CombatBarProps {
  readonly statusText: string;
  readonly onAutoClick: () => void;
  readonly onSkipClick: () => void;
}

export class CombatBar extends React.Component<CombatBarProps> {
  public static readonly defaultProps: CombatBarProps = {
    onAutoClick: noop,
    onSkipClick: noop,
    statusText: "",
  };

  public render() {
    return (
      <div className={styles.root}>
        <div className={styles.auto}>
          <ImageButton
            images={buttonImages.auto}
            onClick={this.props.onAutoClick}
          />
        </div>
        <div className={styles.statusBar}>
          <GameText size="large">
            {this.props.statusText}
          </GameText>
        </div>
        <div className={styles.skip}>
          <ImageButton
            images={buttonImages.skip}
            onClick={this.props.onSkipClick}
          />
        </div>
      </div>
    );
  }
}
