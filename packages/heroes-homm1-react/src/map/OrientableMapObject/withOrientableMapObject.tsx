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
  <P extends WithOrientableMapObjectProps>(WrappedComponent: React.ComponentType<P>) => {
    return class WithOrientableMapObject extends React.Component<P> {
      public render() {
        const { orientation } = this.props;

        return (
          <OrientableMapObject
            invert={orientationMap[orientation] !== orientation}
          >
            <WrappedComponent {...this.props} orientation={orientationMap[orientation]} />
          </OrientableMapObject>
        );
      }
    };
  };
