import * as React from "react";

import { Resources } from "heroes-core";
import { Resource } from "heroes-homm1";

import "./Treasury.scss";

import { GameText } from "../../GameText";
import { ResourceIcon } from "../../ResourceIcon";

export interface TreasuryProps {
  resources: Resources;
}

export class Treasury extends React.Component<TreasuryProps> {
  public render() {
    const content = [
      Resource.Wood,
      Resource.Sulfur,
      Resource.Crystal,
      Resource.Mercury,
      Resource.Ore,
      Resource.Gems,
      Resource.Gold,
    ].map((r) => this.renderResource(r, this.props.resources || 0));

    return (
      <div className="treasury">
        {content}
      </div>
    );
  }

  private renderResource(resource: string, resources: Resources) {
    return (
      <div
        className="treasury-resource"
        key={resource}
      >
        <ResourceIcon
          size="large"
          resource={resource}
        />
        <div>
          <GameText size="small">
            {resources[resource] || 0}
          </GameText>
        </div>
      </div>
    );
  }
}
