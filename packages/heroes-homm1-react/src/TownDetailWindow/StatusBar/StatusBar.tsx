import React from "react";

import * as styles from "./StatusBar.module.scss";

import { GameText } from "../../core";

export interface StatusBarProps {
  readonly statusText: string;
}

export class StatusBar extends React.Component<StatusBarProps> {
  public static readonly defaultProps: Pick<StatusBarProps, "statusText"> = {
    statusText: "",
  };

  public render() {
    return (
      <div className={styles.root}>
        <GameText size="large">
          {this.props.statusText}
        </GameText>
      </div>
    );
  }
}
