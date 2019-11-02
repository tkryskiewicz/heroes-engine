import React from "react";

import { createPoint, getTileIndex } from "heroes-core";

import * as styles from "./AdventureMapWindow.module.scss";

interface Props {
  readonly width: number;
  readonly height: number;
  readonly renderTile: (index: number) => React.ReactNode;
  readonly onTileClick: (index: number) => void;
}

type DefaultProp =
  "renderTile" |
  "onTileClick";

export class AdventureMapWindow extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, DefaultProp> = {
    onTileClick: () => undefined,
    renderTile: () => undefined,
  };

  public render() {
    const { width, height } = this.props;

    const tiles = [...new Array(height).keys()]
      .map((i) => [...new Array(width).keys()]
        .map((j) => this.props.renderTile(getTileIndex(width, createPoint(j, i)))));

    return (
      <div className={styles.root}>
        {tiles}
      </div>
    );
  }
}

type ComponentProps = ExtractProps<typeof AdventureMapWindow>;

export {
  ComponentProps as AdventureMapWindowProps,
};
