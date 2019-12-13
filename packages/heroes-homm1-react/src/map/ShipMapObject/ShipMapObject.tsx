import React from "react";

import { Direction } from "heroes-core";

import * as styles from "./ShipMapObject.module.scss";

import { withOrientableMapObject } from "../OrientableMapObject";

interface ShipMapObjectProps {
  readonly playerColor?: string;
  readonly orientation: Direction;
  readonly onClick?: () => void;
}

class ShipMapObject extends React.Component<ShipMapObjectProps> {
  public render() {
    const { playerColor, orientation } = this.props;

    return (
      <div
        className={styles.root}
        onClick={this.props.onClick}
      >
        <img src={`/assets/ship/${orientation}.png`} />
        {playerColor && this.renderFlag(playerColor, orientation)}
      </div>
    );
  }

  private renderFlag(playerColor: string, orientation: Direction) {
    return (
      <img
        className={styles.flag}
        src={`/assets/playerColors/${playerColor}/ship-flag/${orientation}.png`}
      />
    );
  }
}

const ComponentWrapped = withOrientableMapObject()(ShipMapObject);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as ShipMapObject,
  ComponentWrappedProps as ShipMapObjectProps,
};
