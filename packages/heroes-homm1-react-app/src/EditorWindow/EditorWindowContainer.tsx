import * as React from "react";

import { GameData, MapObjectOrientation } from "heroes-core";
import { EditorOption } from "heroes-homm1";
import {
  CellNumbers,
  DetailsOptionDetails,
  EditorButtons,
  EditorHorizontalScroll,
  EditorOptions,
  EditorVerticalScroll,
  EditorWindow,
  EraseOptionDetails,
  TerrainsOptionDetails,
  GameText,
} from "heroes-homm1-react";

interface EditorWindowContainerProps {
  readonly data: GameData;
  readonly x: number;
  readonly y: number;
  readonly onScroll: (direction: MapObjectOrientation) => void;
  readonly selectedOption: EditorOption;
  readonly onSelectedOptionChange: (value: EditorOption) => void;
  readonly selectedTerrain: string;
  readonly onSelectedTerrainChange: (value: string) => void;
  readonly onEraseTypesClick: () => void;
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

type DefaultProp =
  "onScroll" |
  "onSelectedOptionChange" |
  "onSelectedTerrainChange" |
  "onEraseTypesClick" |
  "onZoomClick" |
  "onUndoClick" |
  "onSpecsClick" |
  "onRandomClick" |
  "onNewClick" |
  "onLoadClick" |
  "onSaveClick" |
  "onQuitClick";

class EditorWindowContainer extends React.Component<EditorWindowContainerProps> {
  public static readonly defaultProps: Pick<EditorWindowContainerProps, DefaultProp> = {
    onEraseTypesClick: () => undefined,
    onLoadClick: () => undefined,
    onNewClick: () => undefined,
    onQuitClick: () => undefined,
    onRandomClick: () => undefined,
    onSaveClick: () => undefined,
    onScroll: () => undefined,
    onSelectedOptionChange: () => undefined,
    onSelectedTerrainChange: () => undefined,
    onSpecsClick: () => undefined,
    onUndoClick: () => undefined,
    onZoomClick: () => undefined,
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
        renderOptions={this.renderOptions}
        renderOptionDetails={this.renderOptionDetails}
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
    const { y } = this.props;

    return (
      <CellNumbers
        orientation="vertical"
        size={this.props.zoomed ? "large" : "small"}
        from={y}
        to={y + (this.props.zoomed ? 13 : 27)}
      />
    );
  }

  private readonly renderHorizontalCellNumbers = () => {
    const { x } = this.props;

    return (
      <CellNumbers
        orientation="horizontal"
        size={this.props.zoomed ? "large" : "small"}
        from={x}
        to={x + (this.props.zoomed ? 13 : 27)}
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

  private readonly renderOptions = () => {
    return (
      <EditorOptions
        selectedOption={this.props.selectedOption}
        onSelectedOptionChange={this.props.onSelectedOptionChange}
      />
    );
  }

  private readonly renderOptionDetails = () => {
    const { data, selectedOption } = this.props;

    switch (selectedOption) {
      case EditorOption.Terrains:
        return (
          <TerrainsOptionDetails
            options={Object.values(data.terrains)}
            selectedOption={this.props.selectedTerrain}
            onSelectedOptionChange={this.props.onSelectedTerrainChange}
          />
        );
      case EditorOption.Objects:
        return (
          <GameText size="normal">
            OBJECTS
          </GameText>
        );
      case EditorOption.Details:
        return (
          <DetailsOptionDetails />
        );
      case EditorOption.Erase:
        return (
          <EraseOptionDetails
            onTypesClick={this.props.onEraseTypesClick}
          />
        );
    }
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
