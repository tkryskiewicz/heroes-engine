import * as React from "react";

import * as styles from "./AdventureWindow.module.scss";

interface Props {
  readonly width: number;
  readonly height: number;
  readonly x: number;
  readonly y: number;
  readonly renderTile: (index: number) => React.ReactNode;
  readonly onTileClick: (index: number) => void;
}

type DefaultProp =
  "renderTile" |
  "onTileClick";

export class AdventureWindow extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, DefaultProp> = {
    onTileClick: () => undefined,
    renderTile: () => undefined,
  };

  public render() {
    const { width, height, x, y } = this.props;

    const tiles = [...new Array(height).keys()]
      .map((i) => [...new Array(width).keys()]
        .map((j) => this.props.renderTile((y + i) * width + x + j)));

    return (
      <div className={styles.root}>
        {tiles}
      </div>
    );
  }
}

type ComponentProps = ExtractProps<typeof AdventureWindow>;

export {
  ComponentProps as AdventureWindowProps,
};
