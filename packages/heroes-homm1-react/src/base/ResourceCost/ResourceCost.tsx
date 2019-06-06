import * as React from "react";
import { FormattedNumber } from "react-intl";

import { Resources } from "heroes-core";
import { Resource } from "heroes-homm1";

import * as styles from "./ResourceCost.module.scss";

import { GameText } from "../../core";
import { ResourceIcon } from "../ResourceIcon";

export interface ResourceCostProps {
  readonly cost: Resources;
}

export class ResourceCost extends React.Component<ResourceCostProps> {
  public render() {
    // TODO: reflect order of resources
    return (
      <div className={styles.root}>
        {Object.keys(this.props.cost).map((r) => this.renderResource(r, this.props.cost[r]))}
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
          size={resource !== Resource.Gold ? "small" : "large"}
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
