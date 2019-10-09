import React from "react";
import { FormattedNumber } from "react-intl";

import * as styles from "./MineOverview.module.scss";

import { GameText } from "../../core";

export interface MineOverviewProps {
  readonly resource: string;
  readonly count: number;
}

export class MineOverview extends React.Component<MineOverviewProps> {
  public render() {
    return (
      <div className={styles.root}>
        <img
          src={`assets/resources/${this.props.resource}/mine-icon.png`}
        />
        <div className={styles.count}>
          <GameText size="normal">
            <FormattedNumber value={this.props.count} />
          </GameText>
        </div>
      </div>
    );
  }
}
