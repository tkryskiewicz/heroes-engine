import * as React from "react";

export interface ArtifactIconProps {
  size: "large" | "small";
  artifact: string;
  onClick?: () => void;
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
