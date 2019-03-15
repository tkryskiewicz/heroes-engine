import * as React from "react";

import * as styles from "./MapTile.module.scss";

interface Props {
  readonly index: number;
  readonly onClick?: (index: number) => void;
}

export class MapTile extends React.Component<Props> {
  public render() {
    return (
      <div
        className={styles.root}
        onClick={this.onClick}
      >
        {this.props.children}
      </div>
    );
  }

  private readonly onClick = () => {
    if (!this.props.onClick) {
      return;
    }

    this.props.onClick(this.props.index);
  }
}

export {
  Props as MapTileProps,
};
