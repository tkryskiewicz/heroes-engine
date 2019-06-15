import * as React from "react";

export interface ResourceIconProps {
  readonly resource: string;
  readonly onClick: (resource: string) => void;
}

export class ResourceIcon extends React.Component<ResourceIconProps> {
  public static readonly defaultProps: Pick<ResourceIconProps, "onClick"> = {
    onClick: () => undefined,
  };

  public render() {
    return (
      <img
        src={`assets/resources/${this.props.resource}/icon.png`}
        onClick={this.onClick}
      />
    );
  }

  private readonly onClick = () => {
    this.props.onClick(this.props.resource);
  }
}
