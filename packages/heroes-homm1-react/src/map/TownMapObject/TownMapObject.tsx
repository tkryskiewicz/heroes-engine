import React from "react";

import * as styles from "./TownMapObject.module.scss";

export interface TownMapObjectProps {
  readonly size: "large" | "small";
  readonly town: string;
  readonly isCastleBuilt: boolean;
  readonly playerColor?: string;
  readonly onClick?: () => void;
}

export class TownMapObject extends React.Component<TownMapObjectProps> {
  public render() {
    const { town, isCastleBuilt, playerColor } = this.props;

    return (
      <div
        className={styles.root}
        onClick={this.props.onClick}
      >
        <img src={`/assets/towns/${town}/mapObject/${isCastleBuilt ? "castle" : "town"}/${this.props.size}.png`} />
        {this.props.size === "large" && playerColor && this.renderFlags(playerColor)}
      </div>
    );
  }

  private renderFlags(playerColor: string) {
    return (
      <>
        <img
          className={styles.flagWest}
          src={`/assets/playerColors/${playerColor}/town-flag/west.png`}
        />
        <img
          className={styles.flagEast}
          src={`/assets/playerColors/${playerColor}/town-flag/east.png`}
        />
      </>
    );
  }
}
