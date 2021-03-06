import React from "react";

export interface SmallCrestProps {
  readonly playerColor: string;
  readonly heroClass: string;
}

export class SmallCrest extends React.Component<SmallCrestProps> {
  public render() {
    return (
      <img src={`/assets/heroClasses/${this.props.heroClass}/crests/${this.props.playerColor}/small.jpg`} />
    );
  }
}
