import * as React from "react";

import { GameText } from "heroes-homm1-react-components";

import * as styles from "./CombatBar.module.scss";

import { buttonImages } from "./assets";

import { ImageButton } from "../../base";

export interface CombatBarProps {
  readonly statusText: string;
  readonly onAutoClick: () => void;
  readonly onSkipClick: () => void;
}

type DefaultProp =
  "statusText" |
  "onAutoClick" |
  "onSkipClick";

export class CombatBar extends React.Component<CombatBarProps> {
  public static readonly defaultProps: Pick<CombatBarProps, DefaultProp> = {
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
