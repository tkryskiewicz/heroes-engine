import Classnames from "classnames";
import * as React from "react";

import { MapObjectGridCell } from "heroes-core";

import * as styles from "./EditorObjectGrid.module.scss";

export interface EditorObjectGridProps {
  readonly width: number;
  readonly height: number;
  readonly grid: MapObjectGridCell[];
}

export class EditorObjectGrid extends React.Component<EditorObjectGridProps> {
  public render() {
    const { width, height, grid } = this.props;

    const gridStyle: React.CSSProperties = {
      height: height * 16,
      width: width * 16,
    };

    return (
      <div className={styles.root} style={gridStyle}>
        {this.renderGrid(width, height, grid)}
        <div className={styles.object}>
          {this.props.children}
        </div>
      </div>
    );
  }

  private renderGrid(width: number, height: number, grid: MapObjectGridCell[]) {
    return (
      <div className={styles.grid}>
        {[...new Array(width * height).keys()].map((i) => this.renderCell(i, grid[i]))}
      </div>
    );
  }

  private renderCell(index: number, obstacle?: boolean) {
    const className = Classnames(
      styles.cell,
      obstacle !== undefined ?
        (obstacle ? styles.obstacle : styles.nonObstacle) :
        undefined,
    );

    return (
      <div
        key={index}
        className={className}
      />
    );
  }
}
