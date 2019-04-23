import * as React from "react";

import { MapObjectOrientation } from "heroes-core";
import {
  CellNumbers,
  EditorButtons,
  EditorHorizontalScroll,
  EditorVerticalScroll,
  EditorWindow,
} from "heroes-homm1-react";

interface EditorWindowContainerProps {
  readonly onScroll: (direction: MapObjectOrientation) => void;
  readonly zoomed: boolean;
  readonly onZoomClick: () => void;
  readonly onUndoClick: () => void;
  readonly onSpecsClick: () => void;
  readonly onRandomClick: () => void;
  readonly onNewClick: () => void;
  readonly onLoadClick: () => void;
  readonly onSaveClick: () => void;
  readonly onQuitClick: () => void;
}

class EditorWindowContainer extends React.Component<EditorWindowContainerProps> {
  public static readonly defaultProps: EditorWindowContainerProps = {
    onLoadClick: () => undefined,
    onNewClick: () => undefined,
    onQuitClick: () => undefined,
    onRandomClick: () => undefined,
    onSaveClick: () => undefined,
    onScroll: () => undefined,
    onSpecsClick: () => undefined,
    onUndoClick: () => undefined,
    onZoomClick: () => undefined,
    zoomed: false,
  };

  public render() {
    return (
      <EditorWindow
        onScrollTopLeft={this.onScrollNorthWest}
        onScrollTopRight={this.onScrollNorthEast}
        onScrollBottomLeft={this.onScrollSouthWest}
        onScrollBottomRight={this.onScrollSouthEast}
        renderVerticalCellNumbers={this.renderVerticalCellNumbers}
        renderHorizontalCellNumbers={this.renderHorizontalCellNumbers}
        renderHorizontalScrollbar={this.renderHorizontalScrollbar}
        renderVerticalScrollbar={this.renderVerticalScrollbar}
        renderButtons={this.renderButtons}
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

  private readonly renderVerticalCellNumbers = () => {
    return (
      <CellNumbers
        orientation="vertical"
        size={this.props.zoomed ? "large" : "small"}
        from={0}
        to={this.props.zoomed ? 13 : 27}
      />
    );
  }

  private readonly renderHorizontalCellNumbers = () => {
    return (
      <CellNumbers
        orientation="horizontal"
        size={this.props.zoomed ? "large" : "small"}
        from={0}
        to={this.props.zoomed ? 13 : 27}
      />
    );
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

  private readonly renderButtons = () => {
    return (
      <EditorButtons
        onZoomClick={this.props.onZoomClick}
        onUndoClick={this.props.onUndoClick}
        onSpecsClick={this.props.onSpecsClick}
        onRandomClick={this.props.onRandomClick}
        onNewClick={this.props.onNewClick}
        onLoadClick={this.props.onLoadClick}
        onSaveClick={this.props.onSaveClick}
        onQuitClick={this.props.onQuitClick}
      />
    );
  }
}

export {
  EditorWindowContainer as EditorWindow,
  EditorWindowContainerProps as EditorWindowProps,
};
