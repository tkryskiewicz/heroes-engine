import React from "react";

export interface ArtifactMapObjectProps {
  readonly size: "large" | "small";
  readonly artifact: string;
}

export class ArtifactMapObject extends React.Component<ArtifactMapObjectProps> {
  public render() {
    return (
      <img src={`/assets/artifacts/${this.props.artifact}/mapObject/${this.props.size}.png`} />
    );
  }
}
