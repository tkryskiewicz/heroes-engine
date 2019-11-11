import React from "react";

import * as styles from "./TurnStatus.module.scss";

import { GrainsImage, SandImage } from "./assets";

import { StatusWindow } from "../StatusWindow";

export interface TurnStatusProps {
  readonly playerColor: string;
}

export class TurnStatus extends React.Component<TurnStatusProps> {
  public render() {
    return (
      <StatusWindow>
        <div className={styles.root}>
          <img
            className={styles.crest}
            src={`/assets/playerColors/${this.props.playerColor}/turn-crest.jpg`}
          />
          <div className={styles.sand}>
            <img src={SandImage} />
            <img src={GrainsImage} />
          </div>
        </div>
      </StatusWindow>
    );
  }
}
