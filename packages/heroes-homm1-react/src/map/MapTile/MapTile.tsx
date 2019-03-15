import * as React from "react";

import * as styles from "./MapTile.module.scss";

interface Props {
  readonly index: number;
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
        className={styles.root}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
        onClick={this.onClick}
      >
        {this.props.children}
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
