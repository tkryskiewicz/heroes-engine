import React from "react";
import { FormattedNumber } from "react-intl";

import { Resources } from "heroes-core";
import { ResourceId } from "heroes-homm1";

import * as styles from "./ResourceSummary.module.scss";

import { GameText } from "../core";
import { StatusWindow } from "../StatusWindow";

export interface ResourceSummaryProps {
  readonly castleCount: number;
  readonly townCount: number;
  readonly resources: Resources;
}

export class ResourceSummary extends React.Component<ResourceSummaryProps> {
  public render() {
    return (
      <StatusWindow>
        <div className={styles.root}>
          <div className={styles.primaryInfo}>
            <div className={styles.castleCount}>
              <GameText size="small">
                <FormattedNumber value={this.props.castleCount} />
              </GameText>
            </div>
            <div className={styles.townCount}>
              <GameText size="small">
                <FormattedNumber value={this.props.townCount} />
              </GameText>
            </div>
            <div className={styles.primaryResource}>
              <GameText size="small">
                <FormattedNumber value={this.props.resources[ResourceId.Gold]} />
              </GameText>
            </div>
          </div>
          <div className={styles.secondaryInfo}>
            {this.renderSecondaryResources(this.props.resources)}
          </div>
        </div>
      </StatusWindow>
    );
  }

  private renderSecondaryResources(resources: Resources) {
    return [
      ResourceId.Wood,
      ResourceId.Mercury,
      ResourceId.Ore,
      ResourceId.Sulfur,
      ResourceId.Crystal,
      ResourceId.Gems,
    ].map((r) => (
      <div
        key={r}
        className={styles.secondaryResource}
      >
        <GameText size="small">
          <FormattedNumber value={resources[r] || 0} />
        </GameText>
      </div>
    ));
  }
}
