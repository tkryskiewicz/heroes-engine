import React from "react";

import { MapObjectOrientation } from "heroes-core";

import { OrientableMapObject } from "./OrientableMapObject";

const orientationMap = {
  [MapObjectOrientation.North]: MapObjectOrientation.North,
  [MapObjectOrientation.NorthEast]: MapObjectOrientation.NorthEast,
  [MapObjectOrientation.East]: MapObjectOrientation.East,
  [MapObjectOrientation.SouthEast]: MapObjectOrientation.SouthEast,
  [MapObjectOrientation.South]: MapObjectOrientation.South,
  [MapObjectOrientation.SouthWest]: MapObjectOrientation.SouthEast,
  [MapObjectOrientation.West]: MapObjectOrientation.East,
  [MapObjectOrientation.NorthWest]: MapObjectOrientation.NorthEast,
};

export interface WithOrientableMapObjectProps {
  readonly orientation: MapObjectOrientation;
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
