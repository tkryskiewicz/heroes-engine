import * as React from "react";

export interface RandomTownMapObjectProps {
  readonly size: "large" | "small";
  readonly isCastleBuilt: boolean;
}

export class RandomTownMapObject extends React.Component<RandomTownMapObjectProps> {
  public render() {
    const path = this.props.isCastleBuilt ? "castle" : "town";

    return (
      <img src={`/assets/mapObjects/random-town/${path}/${this.props.size}.png`} />
    );
  }
}
