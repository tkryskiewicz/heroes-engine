import * as React from "react";

import "./MineOverview.scss";

import { GameText } from "../../GameText";

export interface MineOverviewProps {
  resource: string;
  count: number;
}

export class MineOverview extends React.Component<MineOverviewProps> {
  public render() {
    return (
      <div className="mine-overview">
        <img
          src={`assets/resources/${this.props.resource}/mine-icon.png`}
        />
        <div className="mine-overview-count">
          <GameText size="normal">
            {this.props.count}
          </GameText>
        </div>
      </div>
    );
  }
}
