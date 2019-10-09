import React from "react";

import { MapObjectOrientation } from "heroes-core";

import * as styles from "./ShipMapObject.module.scss";

import { withOrientableMapObject } from "../OrientableMapObject";

interface ShipMapObjectProps {
  readonly alignment?: string;
  readonly orientation: MapObjectOrientation;
  readonly onClick?: () => void;
}

class ShipMapObject extends React.Component<ShipMapObjectProps> {
  public render() {
    const { alignment, orientation } = this.props;

    return (
      <div
        className={styles.root}
        onClick={this.props.onClick}
      >
        <img src={`/assets/ship/${orientation}.png`} />
        {alignment && this.renderFlag(alignment, orientation)}
      </div>
    );
  }

  private renderFlag(alignment: string, orientation: MapObjectOrientation) {
    return (
      <img
        className={styles.flag}
        src={`/assets/alignments/${alignment}/ship-flag/${orientation}.png`}
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
