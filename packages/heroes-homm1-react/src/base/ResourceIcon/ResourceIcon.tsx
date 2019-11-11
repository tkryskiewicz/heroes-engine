import React from "react";

import { noop } from "heroes-helpers";

export interface ResourceIconProps {
  readonly resource: string;
  readonly onClick: (resource: string) => void;
}

export class ResourceIcon extends React.Component<ResourceIconProps> {
  public static readonly defaultProps: Pick<ResourceIconProps, "onClick"> = {
    onClick: noop,
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
