import * as React from "react";

import { Resources } from "heroes-core";
import { Resource } from "heroes-homm1";

import "./Treasury.scss";

import { ResourceAmount } from "../../ResourceAmount";

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
    ].map((r) => this.renderResource(r, this.props.resources[r] || 0));

    return (
      <div className="treasury">
        {content}
      </div>
    );
  }

  private renderResource(resource: string, amount: number) {
    return (
      <div
        className="treasury-resource"
        key={resource}
      >
        <ResourceAmount
          resource={resource}
          amount={amount}
        />
      </div>
    );
  }
}
