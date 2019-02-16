import * as React from "react";

import { Resources } from "heroes-core";
import { Resource } from "heroes-homm1";

import * as styles from "./Treasury.module.scss";

import { buttonImages } from "./assets";

import { ImageButton, ResourceAmount } from "../../base";

export interface TreasuryProps {
  readonly resources: Resources;
  readonly onExitMouseEnter?: () => void;
  readonly onExitMouseLeave?: () => void;
  readonly onExitClick?: () => void;
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
      <div className={styles.root}>
        <div>
          {content}
        </div>
        <div className={styles.exit}>
          <ImageButton
            images={buttonImages.exit}
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
        className={styles.resource}
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
