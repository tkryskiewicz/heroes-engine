import React from "react";

import { Direction } from "heroes-core";

import { OrientableMapObject } from "./OrientableMapObject";

const orientationMap = {
  [Direction.North]: Direction.North,
  [Direction.NorthEast]: Direction.NorthEast,
  [Direction.East]: Direction.East,
  [Direction.SouthEast]: Direction.SouthEast,
  [Direction.South]: Direction.South,
  [Direction.SouthWest]: Direction.SouthEast,
  [Direction.West]: Direction.East,
  [Direction.NorthWest]: Direction.NorthEast,
};

export interface WithOrientableMapObjectProps {
  readonly orientation: Direction;
}

export const withOrientableMapObject = () =>
  <C extends React.ComponentType<ExtractProps<C>>>(WrappedComponent: C) => {
    type PP = ExtractPublicProps<C>;

    return class WithOrientableMapObject extends React.Component<PP & WithOrientableMapObjectProps> {
      public render() {
        const { orientation, ...rest } = this.props;

        return (
          <OrientableMapObject
            invert={orientationMap[orientation] !== orientation}
          >
            <WrappedComponent {...rest as PP} orientation={orientationMap[orientation]} />
          </OrientableMapObject>
        );
      }
    };
  };
