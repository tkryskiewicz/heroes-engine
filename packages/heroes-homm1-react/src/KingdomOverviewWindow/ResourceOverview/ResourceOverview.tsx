import * as React from "react";

import "./ResourceOverview.scss";

import { GameText } from "../../GameText";
import { ResourceIcon } from "../../ResourceIcon";

export interface ResourceOverviewProps {
  resource: string;
  count: number;
}

export class ResourceOverview extends React.Component<ResourceOverviewProps> {
  public render() {
    return (
      <div className="resource-overview">
        <ResourceIcon
          size="large"
          resource={this.props.resource}
        />
        <div className="resource-overview-count">
          <GameText size="normal">
            {this.props.count}
          </GameText>
        </div>
      </div>
    );
  }
}
