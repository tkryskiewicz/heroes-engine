import * as React from "react";

import * as styles from "./GameText.module.scss";

export interface GameTextProps {
  size: "large" | "normal" | "small" | "tiny";
}

export class GameText extends React.Component<GameTextProps> {
  public render() {
    return (
      <span className={`${styles.root} ${styles[this.props.size]}`}>
        {this.props.children}
      </span>
    );
  }
}
