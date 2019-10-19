import React from "react";
import { FormattedNumber } from "react-intl";

import { Resources } from "heroes-core";

import * as styles from "./ResourceCost.module.scss";

import { GameText } from "../../core";
import { ResourceIcon } from "../ResourceIcon";

export interface ResourceCostProps {
  readonly cost: Resources;
}

export class ResourceCost extends React.Component<ResourceCostProps> {
  public render() {
    // TODO: reflect order of resources
    const resources = Object.keys(this.props.cost)
      .filter((r) => this.props.cost[r]);

    return (
      <div className={styles.root}>
        {resources.map((r) => this.renderResource(r, this.props.cost[r]))}
      </div>
    );
  }

  private renderResource(resource: string, amount: number) {
    return (
      <div
        className={styles.resource}
        key={resource}
      >
        <ResourceIcon
          resource={resource}
        />
        <div className={styles.resourceAmount}>
          <GameText size="normal">
            <FormattedNumber value={amount} />
          </GameText>
        </div>
      </div>
    );
  }
}
