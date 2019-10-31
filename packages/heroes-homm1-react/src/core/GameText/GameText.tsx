import Classnames from "classnames";
import React from "react";

import * as styles from "./GameText.module.scss";

export interface GameTextProps {
  readonly className?: string;
  readonly size: "large" | "normal" | "small" | "tiny";
  readonly selected?: boolean;
}

export class GameText extends React.Component<GameTextProps> {
  public render() {
    const { className, size, selected } = this.props;

    return (
      <span className={Classnames(styles.root, styles[size], selected && styles.selected, className)}>
        {this.props.children}
      </span>
    );
  }
}
