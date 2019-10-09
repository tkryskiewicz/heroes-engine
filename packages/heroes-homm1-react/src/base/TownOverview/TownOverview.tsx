import React from "react";
import { FormattedNumber } from "react-intl";

import * as styles from "./TownOverview.module.scss";

import { GameText } from "../../core";

export interface TownOverviewProps {
  readonly town: string;
  readonly isCastleBuilt?: boolean;
  readonly count: number;
}

export class TownOverview extends React.Component<TownOverviewProps> {
  public render() {
    return (
      <div className={styles.root}>
        <img
          src={`assets/towns/${this.props.town}/${this.props.isCastleBuilt ? "castle" : "town"}-overview-icon.png`}
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
