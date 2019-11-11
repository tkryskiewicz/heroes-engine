import React from "react";

import { createPoint, getTileIndex, MapPoint } from "heroes-core";
import { noop } from "heroes-helpers";

import * as styles from "./AdventureMapWindow.module.scss";

interface Props {
  readonly width: number;
  readonly height: number;
  readonly cellSize: number;
  readonly renderCell: (index: number, point: MapPoint) => React.ReactNode;
}

type DefaultProp =
  "renderCell";

export class AdventureMapWindow extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, DefaultProp> = {
    renderCell: noop,
  };

  public render() {
    const { width, height, cellSize } = this.props;

    const style: React.CSSProperties = {
      height: height * cellSize,
      width: width * cellSize,
    };

    const cells = [...new Array(height).keys()]
      .map((i) => [...new Array(width).keys()]
        .map((j) => this.renderCell(createPoint(j, i))));

    return (
      <div
        style={style}
        className={styles.root}
      >
        {cells}
      </div>
    );
  }

  private renderCell(point: MapPoint) {
    const style: React.CSSProperties = {
      height: this.props.cellSize,
      width: this.props.cellSize,
    };

    const index = getTileIndex(this.props.width, point);

    return (
      <div
        data-test-id={`cell-${index}`}
        key={index}
        style={style}
      >
        {this.props.renderCell(index, point)}
      </div>
    );
  }
}

export type AdventureMapWindowProps = ExtractPublicProps<typeof AdventureMapWindow>;
