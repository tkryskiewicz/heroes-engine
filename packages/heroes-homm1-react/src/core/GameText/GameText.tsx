import Classnames from "classnames";
import React from "react";

import * as styles from "./GameText.module.scss";

export interface GameTextProps {
  readonly size: "large" | "normal" | "small" | "tiny";
  readonly selected?: boolean;
}

export class GameText extends React.Component<GameTextProps> {
  public render() {
    return (
      <span className={Classnames(styles.root, styles[this.props.size], this.props.selected && styles.selected)}>
        {this.props.children}
      </span>
    );
  }
}
