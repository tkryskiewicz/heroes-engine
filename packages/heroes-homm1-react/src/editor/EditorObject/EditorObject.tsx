import Classnames from "classnames";
import * as React from "react";

import * as styles from "./EditorObject.module.scss";

export interface EditorObjectProps {
  readonly width: number;
  readonly height: number;
  readonly obstacleGrid: Array<boolean | undefined>;
  readonly renderObject: () => React.ReactNode;
}

export class EditorObject extends React.Component<EditorObjectProps> {
  public static readonly defaultProps: Pick<EditorObjectProps, "renderObject"> = {
    renderObject: () => undefined,
  };

  public render() {
    const { width, height, obstacleGrid } = this.props;

    const gridStyle: React.CSSProperties = {
      height: height * 16,
      width: width * 16,
    };

    return (
      <div className={styles.root} style={gridStyle}>
        {this.renderGrid(width, height, obstacleGrid)}
        <div className={styles.object}>
          {this.props.renderObject()}
        </div>
      </div>
    );
  }

  private renderGrid(width: number, height: number, obstacleGrid: Array<boolean | undefined>) {
    return (
      <div className={styles.grid}>
        {[...new Array(width * height).keys()].map((i) => this.renderCell(i, obstacleGrid[i]))}
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
