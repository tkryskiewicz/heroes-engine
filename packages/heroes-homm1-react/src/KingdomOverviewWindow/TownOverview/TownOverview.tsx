import * as React from "react";

import { GameText } from "../../GameText";

export interface TownOverviewProps {
  town: string;
  isCastleBuilt?: boolean;
  count: number;
}

export class TownOverview extends React.Component<TownOverviewProps> {
  public render() {
    const style: React.CSSProperties = {
      height: 80,
      position: "relative",
      width: 132,
    };

    const countStyle: React.CSSProperties = {
      bottom: 0,
      left: 0,
      position: "absolute",
      textAlign: "center",
      width: "100%",
    };

    return (
      <div style={style}>
        <img
          src={`assets/towns/${this.props.town}/${this.props.isCastleBuilt ? "castle" : "town"}-overview-icon.png`}
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
