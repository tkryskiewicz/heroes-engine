import * as React from "react";

import { Resources } from "heroes-core";
import { Resource } from "heroes-homm1";

import "./ResourceCost.scss";

import { GameText } from "../../core";
import { ResourceIcon } from "../ResourceIcon";

export interface ResourceCostProps {
  cost: Resources;
}

export class ResourceCost extends React.Component<ResourceCostProps> {
  public render() {
    // TODO: reflect order of resources
    return (
      <div className="resource-cost">
        {Object.keys(this.props.cost).map((r) => this.renderResource(r, this.props.cost[r]))}
      </div>
    );
  }

  private renderResource(resource: string, amount: number) {
    return (
      <div
        className="resource-cost-resource"
        key={resource}
      >
        <ResourceIcon
          size={resource !== Resource.Gold ? "small" : "large"}
          resource={resource}
        />
        <div className="resource-cost-resource-amount">
          <GameText size="normal">
            {amount}
          </GameText>
        </div>
      </div>
    );
  }
}
