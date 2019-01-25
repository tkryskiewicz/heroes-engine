import * as React from "react";

import * as styles from "./Slot.module.scss";

import { SelectionImage } from "./assets";

export interface SlotProps {
  readonly index: number;
  readonly selected: boolean;
  readonly onClick: (index: number) => void;
}

export class Slot extends React.Component<SlotProps> {
  public static readonly defaultProps: Pick<SlotProps, "selected" | "onClick"> = {
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
