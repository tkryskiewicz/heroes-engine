import * as React from "react";

import { Alignment } from "heroes-homm1";

export interface AlignmentJewelProps {
  value: Alignment;
  onClick: (value: Alignment) => void;
}

export class AlignmentJewel extends React.Component<AlignmentJewelProps> {
  public static defaultProps: Pick<AlignmentJewelProps, "onClick"> = {
    onClick: () => undefined,
  };

  public render() {
    return (
      <img
        src={`assets/alignments/${this.props.value}/jewel.png`}
        onClick={this.onClick}
      />
    );
  }

  private onClick = () => {
    this.props.onClick(this.props.value);
  }
}
