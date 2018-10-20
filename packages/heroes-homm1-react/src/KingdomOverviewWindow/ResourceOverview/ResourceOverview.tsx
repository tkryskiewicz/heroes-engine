import * as React from "react";

import { GameText } from "../../GameText";
import { ResourceIcon } from "../../ResourceIcon";

export interface ResourceOverviewProps {
  resource: string;
  count: number;
}

export class ResourceOverview extends React.Component<ResourceOverviewProps> {
  public render() {
    const style: React.CSSProperties = {
      display: "inline-block",
    };

    const countStyle: React.CSSProperties = {
      textAlign: "center",
    };

    return (
      <div style={style}>
        <ResourceIcon
          size="large"
          resource={this.props.resource}
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
