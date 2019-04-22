import * as React from "react";

import { MapObjectOrientation } from "heroes-core";
import { EditorHorizontalScroll, EditorVerticalScroll, EditorWindow } from "heroes-homm1-react";

interface EditorWindowContainerProps {
  readonly onScroll: (direction: MapObjectOrientation) => void;
}

class EditorWindowContainer extends React.Component<EditorWindowContainerProps> {
  public static readonly defaultProps: EditorWindowContainerProps = {
    onScroll: () => undefined,
  };

  public render() {
    return (
      <EditorWindow
        onScrollTopLeft={this.onScrollNorthWest}
        onScrollTopRight={this.onScrollNorthEast}
        onScrollBottomLeft={this.onScrollSouthWest}
        onScrollBottomRight={this.onScrollSouthEast}
        renderHorizontalScrollbar={this.renderHorizontalScrollbar}
        renderVerticalScrollbar={this.renderVerticalScrollbar}
      />
    );
  }

  private readonly onScrollNorthWest = () => {
    this.props.onScroll(MapObjectOrientation.NorthWest);
  }

  private readonly onScrollNorthEast = () => {
    this.props.onScroll(MapObjectOrientation.NorthEast);
  }

  private readonly onScrollSouthWest = () => {
    this.props.onScroll(MapObjectOrientation.SouthWest);
  }

  private readonly onScrollSouthEast = () => {
    this.props.onScroll(MapObjectOrientation.SouthEast);
  }

  private readonly renderHorizontalScrollbar = () => {
    return (
      <EditorHorizontalScroll
        onScrollLeftClick={this.onScrollWest}
        onScrollRightClick={this.onScrollEast}
      />
    );
  }

  private readonly onScrollWest = () => {
    this.props.onScroll(MapObjectOrientation.West);
  }

  private readonly onScrollEast = () => {
    this.props.onScroll(MapObjectOrientation.East);
  }

  private readonly renderVerticalScrollbar = () => {
    return (
      <EditorVerticalScroll
        onScrollUpClick={this.onScrollNorth}
        onScrollDownClick={this.onScrollSouth}
      />
    );
  }

  private readonly onScrollNorth = () => {
    this.props.onScroll(MapObjectOrientation.North);
  }

  private readonly onScrollSouth = () => {
    this.props.onScroll(MapObjectOrientation.South);
  }
}

export {
  EditorWindowContainer as EditorWindow,
  EditorWindowContainerProps as EditorWindowProps,
};
