import * as React from "react";

import * as styles from "./TownMapObject.module.scss";

interface Props {
  readonly town: string;
  readonly isCastleBuilt: boolean;
  readonly alignment: string;
  readonly onClick?: () => void;
}

export class TownMapObject extends React.Component<Props> {
  public render() {
    const { town, isCastleBuilt, alignment } = this.props;

    return (
      <div
        className={styles.root}
        onClick={this.props.onClick}
      >
        <img src={`/assets/towns/${town}/mapObject/${isCastleBuilt ? "castle" : "town"}.png`} />
        <img
          className={styles.flagWest}
          src={`/assets/alignments/${alignment}/town-flag/west.png`}
        />
        <img
          className={styles.flagEast}
          src={`/assets/alignments/${alignment}/town-flag/east.png`}
        />
      </div>
    );
  }
}

export {
  Props as TownMapObjectProps,
};
