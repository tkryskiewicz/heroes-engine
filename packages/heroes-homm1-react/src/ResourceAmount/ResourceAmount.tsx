import * as React from "react";

import "./ResourceAmount.scss";

import { GameText } from "../GameText";
import { ResourceIcon } from "../ResourceIcon";

export interface ResourceAmountProps {
  resource: string;
  amount: number;
}

export class ResourceAmount extends React.Component<ResourceAmountProps> {
  public render() {
    return (
      <div className="resource-amount">
        <ResourceIcon
          size="large"
          resource={this.props.resource}
        />
        <div>
          <GameText size="normal">
            {this.props.amount}
          </GameText>
        </div>
      </div>
    );
  }
}
