import * as React from "react";

export interface TownViewProps {
  town: {
    id: string;
  };
}

export class TownView extends React.Component<TownViewProps> {
  public render() {
    const style: React.CSSProperties = {
      background: `url('assets/towns/${this.props.town.id}/background.jpg')`,
      height: 256,
      width: 640,
    };

    return (
      <div style={style} />
    );
  }
}
