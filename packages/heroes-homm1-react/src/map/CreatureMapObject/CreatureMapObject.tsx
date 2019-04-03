import * as React from "react";

export interface CreatureMapObjectProps {
  readonly creature: string;
}

export class CreatureMapObject extends React.Component<CreatureMapObjectProps> {
  public render() {
    return (
      <img src={`/assets/creatures/${this.props.creature}/icon-small.png`} />
    );
  }
}
