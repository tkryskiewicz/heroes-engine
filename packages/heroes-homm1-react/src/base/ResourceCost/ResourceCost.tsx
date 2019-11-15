import React from "react";

import { Resources } from "heroes-core";

import * as styles from "./ResourceCost.module.scss";

import { GameTextSize } from "../../core";
import { ResourceAmount } from "../ResourceAmount";

export interface ResourceCostProps {
  readonly textSize: GameTextSize;
  readonly value: Resources;
}

export class ResourceCost extends React.Component<ResourceCostProps> {
  public static readonly defaultProps: Pick<ResourceCostProps, "textSize"> = {
    textSize: "normal",
  };

  public render() {
    // TODO: reflect order of resources
    return (
      <div className={styles.root}>
        {Object.keys(this.props.value).map((r) => this.renderResource(r, this.props.value[r]))}
      </div>
    );
  }

  private renderResource(resource: string, amount: number) {
    return (
      <ResourceAmount
        key={resource}
        className={styles.resource}
        textSize={this.props.textSize}
        resource={resource}
        amount={amount}
      />
    );
  }
}
