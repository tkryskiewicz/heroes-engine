import * as React from "react";

export interface RandomCreatureMapObjectProps {
  readonly size: "large" | "small";
  readonly level?: number;
}

export class RandomCreatureMapObject extends React.Component<RandomCreatureMapObjectProps> {
  public render() {
    const { size, level } = this.props;

    const fileName = level !== undefined ? `level-${level}` : "random-level";

    return (
      <img src={`/assets/mapObjects/random-creature/${size}/${fileName}.png`} />
    );
  }
}
