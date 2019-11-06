import React from "react";

interface Props {
  readonly className?: string;
  readonly value: string;
  readonly onClick: (value: string) => void;
}

export class PlayerColorJewel extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, "onClick"> = {
    onClick: () => undefined,
  };

  public render() {
    return (
      <img
        className={this.props.className}
        src={`assets/alignments/${this.props.value}/jewel.png`}
        onClick={this.onClick}
      />
    );
  }

  private readonly onClick = () => {
    this.props.onClick(this.props.value);
  }
}

export type PlayerColorJewelProps = ExtractPublicProps<typeof PlayerColorJewel>;
