import React from "react";

import * as styles from "./TradingSlot.module.scss";

import { SelectionImage } from "./assets";

export interface TradingSlotProps {
  readonly index: number;
  readonly selected: boolean;
  readonly onClick: (index: number) => void;
}

export class TradingSlot extends React.Component<TradingSlotProps> {
  public static readonly defaultProps: Pick<TradingSlotProps, "selected" | "onClick"> = {
    onClick: () => undefined,
    selected: false,
  };

  public render() {
    return (
      <div
        className={styles.root}
        onClick={this.onClick}
      >
        {this.props.children}
        {this.props.selected && this.renderSelection()}
      </div>
    );
  }

  private renderSelection() {
    return (
      <img
        className={styles.selection}
        src={SelectionImage}
      />
    );
  }

  private readonly onClick = () => {
    this.props.onClick(this.props.index);
  }
}
