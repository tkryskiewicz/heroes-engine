import * as React from "react";

import { GameText } from "heroes-homm1-react-components";

import * as styles from "./StatusBar.module.scss";

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
