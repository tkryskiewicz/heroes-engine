import * as React from "react";

export interface RandomHeroMapObjectProps {
  readonly size: "large" | "small";
}

export class RandomHeroMapObject extends React.Component<RandomHeroMapObjectProps> {
  public render() {
    return (
      <img src={`/assets/mapObjects/random-hero/${this.props.size}/image.png`} />
    );
  }
}
