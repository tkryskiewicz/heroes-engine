import * as React from "react";

import { Resources } from "heroes-core";
import { ResourceId } from "heroes-homm1";

import * as styles from "./Treasury.module.scss";

import { buttonImages } from "./assets";

import { ImageButton } from "../ImageButton";
import { ResourceAmount } from "../ResourceAmount";

export interface TreasuryProps {
  readonly resources: Resources;
  readonly onExitMouseEnter?: () => void;
  readonly onExitMouseLeave?: () => void;
  readonly onExitClick?: () => void;
}

export class Treasury extends React.Component<TreasuryProps> {
  public render() {
    const content = [
      ResourceId.Wood,
      ResourceId.Sulfur,
      ResourceId.Crystal,
      ResourceId.Mercury,
      ResourceId.Ore,
      ResourceId.Gems,
      ResourceId.Gold,
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
