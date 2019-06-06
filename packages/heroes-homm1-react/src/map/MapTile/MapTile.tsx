import Classnames from "classnames";
import * as React from "react";

import { TerrainTransition } from "heroes-homm1";

import * as styles from "./MapTile.module.scss";

const imageMap = {
  [TerrainTransition.None]: "none",
  [TerrainTransition.North]: "north",
  [TerrainTransition.NorthEastIn]: "in",
  [TerrainTransition.NorthEastOut]: "out",
  [TerrainTransition.East]: "east",
  [TerrainTransition.SouthEastIn]: "in",
  [TerrainTransition.SouthEastOut]: "out",
  [TerrainTransition.South]: "north",
  [TerrainTransition.SouthWestIn]: "in",
  [TerrainTransition.SouthWestOut]: "out",
  [TerrainTransition.West]: "east",
  [TerrainTransition.NorthWestIn]: "in",
  [TerrainTransition.NorthWestOut]: "out",
};

const horizontalInversion = [
  TerrainTransition.West,
  TerrainTransition.NorthWestIn,
  TerrainTransition.NorthWestOut,
  TerrainTransition.SouthWestIn,
  TerrainTransition.SouthWestOut,
];

const verticalInversion = [
  TerrainTransition.South,
  TerrainTransition.SouthEastIn,
  TerrainTransition.SouthEastOut,
  TerrainTransition.SouthWestIn,
  TerrainTransition.SouthWestOut,
];

interface Props {
  readonly index: number;
  readonly size: "large" | "small";
  readonly terrainType: string;
  readonly terrainTransition: TerrainTransition;
  readonly terrainVariant: number;
  readonly active: boolean;
  readonly onMouseEnter: (index: number) => void;
  readonly onMouseLeave: () => void;
  readonly onClick: (index: number) => void;
}

type DefaultProp =
  "active" |
  "onMouseEnter" |
  "onMouseLeave" |
  "onClick";

export class MapTile extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, DefaultProp> = {
    active: false,
    onClick: () => undefined,
    onMouseEnter: () => undefined,
    onMouseLeave: () => undefined,
  };

  public render() {
    return (
      <div
        className={Classnames(styles.root, styles[this.props.size])}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
        onClick={this.onClick}
      >
        {this.renderTerrain()}
        <div className={styles.content}>
          {this.props.children}
        </div>
        {this.props.active && this.renderActive()}
      </div>
    );
  }

  private renderTerrain() {
    const { size, terrainType, terrainTransition, terrainVariant } = this.props;

    const scaleX = horizontalInversion.includes(terrainTransition) ? -1 : 1;
    const scaleY = verticalInversion.includes(terrainTransition) ? -1 : 1;

    const style: React.CSSProperties = {
      transform: `scale(${scaleX}, ${scaleY})`,
    };

    return (
      <img
        className={styles.terrain}
        style={style}
        src={`/assets/terrains/${terrainType}/tiles/${size}/${imageMap[terrainTransition]}-${terrainVariant}.jpg`}
      />
    );
  }

  private renderActive() {
    return (
      <div className={styles.active} />
    );
  }

  private readonly onMouseEnter = () => {
    this.props.onMouseEnter(this.props.index);
  }

  private readonly onClick = () => {
    this.props.onClick(this.props.index);
  }
}

export {
  Props as MapTileProps,
};
