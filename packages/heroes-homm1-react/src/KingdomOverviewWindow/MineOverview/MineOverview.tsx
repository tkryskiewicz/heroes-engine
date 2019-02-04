import * as React from "react";

import { GameText } from "heroes-homm1-react-components";

import * as styles from "./MineOverview.module.scss";

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
            {this.props.count}
          </GameText>
        </div>
      </div>
    );
  }
}
