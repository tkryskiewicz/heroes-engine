import Classnames from "classnames";
import * as React from "react";

import * as styles from "./MapTile.module.scss";

interface Props {
  readonly index: number;
  readonly size: "large" | "small";
  readonly terrainType: string;
  readonly onMouseEnter: (index: number) => void;
  readonly onMouseLeave: () => void;
  readonly onClick: (index: number) => void;
}

type DefaultProp =
  "onMouseEnter" |
  "onMouseLeave" |
  "onClick";

export class MapTile extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, DefaultProp> = {
    onClick: () => undefined,
    onMouseEnter: () => undefined,
    onMouseLeave: () => undefined,
  };

  public render() {
    return (
      <div
        className={Classnames(styles.root, styles[this.props.size], styles[this.props.terrainType])}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
        onClick={this.onClick}
      >
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
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
