import React from "react";

import * as styles from "./TurnStatus.module.scss";

import { GrainsImage, SandImage } from "./assets";

import { StatusWindow } from "../StatusWindow";

export interface TurnStatusProps {
  readonly alignment: string;
}

export class TurnStatus extends React.Component<TurnStatusProps> {
  public render() {
    return (
      <StatusWindow>
        <div className={styles.root}>
          <img
            className={styles.crest}
            src={`/assets/alignments/${this.props.alignment}/turn-crest.jpg`}
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
