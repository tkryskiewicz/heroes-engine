import * as React from "react";

import { Alignment, changeAlignment } from "heroes-homm1";

export interface AlignmentBoxProps {
  value: Alignment;
  onChange?: (value: Alignment) => void;
}

export class AlignmentBox extends React.Component<AlignmentBoxProps> {
  public render() {
    return (
      <img
        src={`assets/alignments/${this.props.value}/jewel.png`}
        onClick={this.onClick}
      />
    );
  }

  private onClick = () => {
    if (!this.props.onChange) {
      return;
    }

    const value = changeAlignment(this.props.value);

    this.props.onChange(value);
  }
}
