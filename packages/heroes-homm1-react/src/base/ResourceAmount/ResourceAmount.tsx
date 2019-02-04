import * as React from "react";

import { GameText } from "heroes-homm1-react-components";

import * as styles from "./ResourceAmount.module.scss";

import { ResourceIcon } from "../ResourceIcon";

export interface ResourceAmountProps {
  readonly resource: string;
  readonly amount: number;
}

export class ResourceAmount extends React.Component<ResourceAmountProps> {
  public render() {
    return (
      <div className={styles.root}>
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
