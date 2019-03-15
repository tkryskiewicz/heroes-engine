import * as React from "react";

import { Map } from "heroes-core";

import * as styles from "./AdventureWindow.module.scss";

const WIDTH = 14;
const HEIGHT = 14;

interface Props {
  readonly map: Map;
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
    return (
      <div className={styles.root}>
        {[...new Array(WIDTH * HEIGHT).keys()].map((i) => this.props.renderTile(i))}
      </div>
    );
  }
}

type ComponentProps = ExtractProps<typeof AdventureWindow>;

export {
  ComponentProps as AdventureWindowProps,
};
