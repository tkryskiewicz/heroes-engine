import Classnames from "classnames";
import * as React from "react";

import { TerrainTransition } from "heroes-homm1";

import * as styles from "./MapTile.module.scss";

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
    const { terrainType, terrainTransition, terrainVariant } = this.props;

    // FIXME: change to image?
    const style: React.CSSProperties = {
      background: `url("/assets/terrains/${terrainType}/tiles/${terrainTransition}-${terrainVariant}.jpg")`,
    };

    return (
      <div
        className={Classnames(styles.root, styles[this.props.size])}
        style={style}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
        onClick={this.onClick}
      >
        <div className={styles.content}>
          {this.props.children}
        </div>
        {this.props.active && this.renderActive()}
      </div>
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
