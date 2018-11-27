import * as React from "react";

export interface ResourceIconProps {
  size: "large" | "small";
  resource: string;
  onClick: (resource: string) => void;
}

export class ResourceIcon extends React.Component<ResourceIconProps> {
  public static defaultProps: Pick<ResourceIconProps, "onClick"> = {
    onClick: () => undefined,
  };

  public render() {
    return (
      <img
        src={`assets/resources/${this.props.resource}/icon-${this.props.size}.png`}
        onClick={this.onClick}
      />
    );
  }

  private onClick = () => {
    this.props.onClick(this.props.resource);
  }
}
