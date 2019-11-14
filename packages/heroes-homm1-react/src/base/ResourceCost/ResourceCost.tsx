import React from "react";
import { FormattedNumber } from "react-intl";

import { Resources } from "heroes-core";

import * as styles from "./ResourceCost.module.scss";

import { GameText, GameTextProps } from "../../core";
import { ResourceIcon } from "../ResourceIcon";

export interface ResourceCostProps {
  readonly textSize: GameTextProps["size"];
  readonly cost: Resources;
}

export class ResourceCost extends React.Component<ResourceCostProps> {
  public static readonly defaultProps: Pick<ResourceCostProps, "textSize"> = {
    textSize: "normal",
  };

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
          <GameText size={this.props.textSize}>
            <FormattedNumber value={amount} />
          </GameText>
        </div>
      </div>
    );
  }
}
