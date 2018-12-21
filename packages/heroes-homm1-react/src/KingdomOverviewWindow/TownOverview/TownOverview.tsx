import * as React from "react";

import "./TownOverview.scss";

import { GameText } from "../../core";

export interface TownOverviewProps {
  town: string;
  isCastleBuilt?: boolean;
  count: number;
}

export class TownOverview extends React.Component<TownOverviewProps> {
  public render() {
    return (
      <div className="town-overview">
        <img
          src={`assets/towns/${this.props.town}/${this.props.isCastleBuilt ? "castle" : "town"}-overview-icon.png`}
        />
        <div className="town-overview-count">
          <GameText size="normal">
            {this.props.count}
          </GameText>
        </div>
      </div>
    );
  }
}
