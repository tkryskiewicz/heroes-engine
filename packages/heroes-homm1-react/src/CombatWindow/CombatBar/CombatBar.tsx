import * as React from "react";

import * as styles from "./CombatBar.module.scss";

import { buttonImages } from "./assets";

import { ImageButton } from "../../base";
import { GameText } from "../../core";

export interface CombatBarProps {
  statusText: string;
  onAutoClick: () => void;
  onSkipClick: () => void;
}

type DefaultProp =
  "statusText" |
  "onAutoClick" |
  "onSkipClick";

export class CombatBar extends React.Component<CombatBarProps> {
  public static defaultProps: Pick<CombatBarProps, DefaultProp> = {
    onAutoClick: () => undefined,
    onSkipClick: () => undefined,
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
