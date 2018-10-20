import * as React from "react";

import { GameText } from "../../GameText";

export interface MineOverviewProps {
  resource: string;
  count: number;
}

export class MineOverview extends React.Component<MineOverviewProps> {
  public render() {
    const style: React.CSSProperties = {
      display: "inline-block",
    };

    const countStyle: React.CSSProperties = {
      textAlign: "center",
    };

    return (
      <div style={style}>
        <img
          src={`assets/resources/${this.props.resource}/mine-icon.png`}
        />
        <div style={countStyle}>
          <GameText size="normal">
            {this.props.count}
          </GameText>
        </div>
      </div>
    );
  }
}
