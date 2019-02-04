import * as React from "react";

import { GameText } from "heroes-homm1-react-components";

import * as styles from "./BigBar.module.scss";

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
