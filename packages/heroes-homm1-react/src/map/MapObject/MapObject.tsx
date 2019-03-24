import * as React from "react";

export interface MapObjectProps {
  readonly type: string;
}

export class MapObject extends React.Component<MapObjectProps> {
  public render() {
    return (
      <img
        src={`/assets/mapObjects/${this.props.type}/image.png`}
      />
    );
  }
}
