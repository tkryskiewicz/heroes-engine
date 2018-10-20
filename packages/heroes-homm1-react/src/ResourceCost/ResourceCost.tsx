import * as React from "react";

import { Resources } from "heroes-core";
import { Resource } from "heroes-homm1";

import { GameText } from "../GameText";
import { ResourceIcon } from "../ResourceIcon";

export interface ResourceCostProps {
  cost: Resources;
}

export class ResourceCost extends React.Component<ResourceCostProps> {
  public render() {
    const style: React.CSSProperties = {
      display: "inline-block",
      marginRight: 5,
    };

    // TODO: reflect order of resources
    return Object.keys(this.props.cost).map((r) => (
      <div
        style={style}
        key={r}
      >
        <ResourceIcon
          size={r !== Resource.Gold ? "small" : "large"}
          resource={r}
        />
        <div style={{ textAlign: "center" }}>
          <GameText size="normal">
            {this.props.cost[r] || 0}
          </GameText>
        </div>
      </div>
    ));
  }
}
