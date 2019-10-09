import React from "react";

export interface AlignmentJewelProps {
  readonly value: string;
  readonly onClick: (value: string) => void;
}

export class AlignmentJewel extends React.Component<AlignmentJewelProps> {
  public static readonly defaultProps: Pick<AlignmentJewelProps, "onClick"> = {
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

  private readonly onClick = () => {
    this.props.onClick(this.props.value);
  }
}
