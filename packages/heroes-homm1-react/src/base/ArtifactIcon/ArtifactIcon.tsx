import React from "react";

export interface ArtifactIconProps {
  readonly size: "large" | "small";
  readonly artifact: string;
  readonly onClick?: () => void;
}

export class ArtifactIcon extends React.Component<ArtifactIconProps> {
  public render() {
    return (
      <img
        src={`assets/artifacts/${this.props.artifact}/icon-${this.props.size}.jpg`}
        onClick={this.props.onClick}
      />
    );
  }
}
