import * as React from "react";

import { Resources } from "heroes-core";
import { Resource } from "heroes-homm1";

import "./Treasury.scss";

import { GameButton } from "../../GameButton";
import { ResourceAmount } from "../../ResourceAmount";

export interface TreasuryProps {
  resources: Resources;
  onExitMouseEnter?: () => void;
  onExitMouseLeave?: () => void;
  onExitClick?: () => void;
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
        <div>
          {content}
        </div>
        <div className="treasury-exit">
          <GameButton
            group="town-window"
            type="exit"
            onMouseEnter={this.props.onExitMouseEnter}
            onMouseLeave={this.props.onExitMouseLeave}
            onClick={this.props.onExitClick}
          />
        </div>
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
