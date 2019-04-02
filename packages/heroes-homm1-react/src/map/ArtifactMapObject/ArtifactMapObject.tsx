import * as React from "react";

export interface ArtifactMapObjectProps {
  readonly artifact: string;
}

export class ArtifactMapObject extends React.Component<ArtifactMapObjectProps> {
  public render() {
    return (
      <img src={`/assets/artifacts/${this.props.artifact}/map-object.png`} />
    );
  }
}
