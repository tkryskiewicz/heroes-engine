import React from "react";

export interface ResourceMapObjectProps {
  readonly size: "large" | "small";
  readonly resource: string;
}

export class ResourceMapObject extends React.Component<ResourceMapObjectProps> {
  public render() {
    return (
      <img src={`/assets/resources/${this.props.resource}/mapObject/${this.props.size}.png`} />
    );
  }
}
