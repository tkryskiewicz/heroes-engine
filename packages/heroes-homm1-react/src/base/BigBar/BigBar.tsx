import * as React from "react";

import * as styles from "./BigBar.module.scss";

import { GameText } from "../../core";

export class BigBar extends React.Component {
  public render() {
    return (
      <div className={styles.root}>
        <div className={styles.text}>
          <GameText size="large">
            {this.props.children}
          </GameText>
        </div>
      </div>
    );
  }
}
