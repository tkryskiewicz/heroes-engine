import * as React from "react";

import "./Slot.scss";

import SelectionImage = require("./selection.png");

export interface SlotProps {
  index: number;
  selected: boolean;
  onClick: (index: number) => void;
}

export class Slot extends React.Component<SlotProps> {
  public static defaultProps: Pick<SlotProps, "selected" | "onClick"> = {
    onClick: () => undefined,
    selected: false,
  };

  public render() {
    return (
      <div
        className="slot"
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
        className="slot-selection"
        src={SelectionImage}
      />
    );
  }

  private onClick = () => {
    this.props.onClick(this.props.index);
  }
}
