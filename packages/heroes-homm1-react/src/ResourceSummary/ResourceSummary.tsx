import * as React from "react";

import { Resources } from "heroes-core";
import { Resource } from "heroes-homm1";

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
                {this.props.castleCount}
              </GameText>
            </div>
            <div className={styles.townCount}>
              <GameText size="small">
                {this.props.townCount}
              </GameText>
            </div>
            <div className={styles.primaryResource}>
              <GameText size="small">
                {this.props.resources[Resource.Gold]}
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
      Resource.Wood,
      Resource.Mercury,
      Resource.Ore,
      Resource.Sulfur,
      Resource.Crystal,
      Resource.Gems,
    ].map((r) => (
      <div
        key={r}
        className={styles.secondaryResource}
      >
        <GameText size="small">
          {resources[r] || 0}
        </GameText>
      </div>
    ));
  }
}
