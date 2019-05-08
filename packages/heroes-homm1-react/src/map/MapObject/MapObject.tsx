import * as React from "react";

export interface MapObjectProps {
  readonly size: "large" | "small";
  readonly type: string;
  readonly variant?: string;
}

export class MapObject extends React.Component<MapObjectProps> {
  public render() {
    const { variant } = this.props;

    const path = `${this.props.type}/${variant ? `${variant}/` : ""}${this.props.size}`;

    return (
      <img
        src={`/assets/mapObjects/${path}.png`}
      />
    );
  }
}
