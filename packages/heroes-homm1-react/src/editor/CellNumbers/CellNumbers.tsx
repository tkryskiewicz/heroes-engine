import Classnames from "classnames";
import React from "react";

import * as styles from "./CellNumbers.module.scss";

import { GameText } from "../../core";

type BoxSize = "large" | "small";
type BoxOrientation = "horizontal" | "vertical";

export interface CellNumbersProps {
  readonly size: BoxSize;
  readonly orientation: BoxOrientation;
  readonly from: number;
  readonly to: number;
  readonly active?: number;
}

export class CellNumbers extends React.Component<CellNumbersProps> {
  public render() {
    const { size, orientation, from, to } = this.props;

    return (
      <div className={Classnames(styles.root, styles[orientation])}>
        {[...new Array(to - from + 1).keys()].map((i) => this.renderBox(from + i, size, orientation))}
      </div>
    );
  }

  private renderBox(index: number, size: BoxSize, orientation: BoxOrientation) {
    const box = size === "small" ? styles.smallBox : (
      orientation === "horizontal" ? styles.horizontalBox : styles.verticalBox
    );

    return (
      <div
        key={index}
        className={box}
      >
        <GameText size="small">
          <span className={index !== this.props.active ? styles.inactive : undefined}>
            {index.toString().padStart(2, "0")}
          </span>
        </GameText>
      </div>
    );
  }
}
