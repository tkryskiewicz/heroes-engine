import * as React from "react";

import { GameData, getTilePoint, Map, MapObjectOrientation } from "heroes-core";
import { EditorOption } from "heroes-homm1";
import {
  AdventureWindow,
  CellNumbers,
  DetailsOptionDetails,
  EditorButtons,
  EditorHorizontalScroll,
  EditorOptions,
  EditorVerticalScroll,
  EditorWindow,
  EraseOptionDetails,
  GameText,
  MapTile,
  TerrainsOptionDetails,
} from "heroes-homm1-react";

interface EditorWindowContainerProps {
  readonly data: GameData;
  readonly map: Map;
  readonly x: number;
  readonly y: number;
  readonly onScroll: (direction: MapObjectOrientation) => void;
  readonly selectedOption: EditorOption;
  readonly onSelectedOptionChange: (value: EditorOption) => void;
  readonly selectedTerrain: string;
  readonly onSelectedTerrainChange: (value: string) => void;
  readonly onEraseTypesClick: () => void;
  readonly zoomed: boolean;
  readonly onZoomInClick: () => void;
  readonly onZoomOutClick: () => void;
  readonly onUndoClick: () => void;
  readonly onSpecsClick: () => void;
  readonly onRandomClick: () => void;
  readonly onNewClick: () => void;
  readonly onLoadClick: () => void;
  readonly onSaveClick: () => void;
  readonly onQuitClick: () => void;
}

interface EditorWindowContainerState {
  readonly x?: number;
  readonly y?: number;
}

type DefaultProp =
  "onScroll" |
  "onSelectedOptionChange" |
  "onSelectedTerrainChange" |
  "onEraseTypesClick" |
  "onZoomInClick" |
  "onZoomOutClick" |
  "onUndoClick" |
  "onSpecsClick" |
  "onRandomClick" |
  "onNewClick" |
  "onLoadClick" |
  "onSaveClick" |
  "onQuitClick";

class EditorWindowContainer extends React.Component<EditorWindowContainerProps, EditorWindowContainerState> {
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
    onZoomInClick: () => undefined,
    onZoomOutClick: () => undefined,
  };

  public readonly state: EditorWindowContainerState = {};

  public componentDidUpdate(prevProps: EditorWindowContainerProps) {
    if (this.props.zoomed !== prevProps.zoomed ||
      (this.props.selectedOption !== prevProps.selectedOption && prevProps.selectedOption === EditorOption.Details) ||
      (this.props.x !== prevProps.x || this.props.y !== prevProps.y)) {
      this.setState({
        x: undefined,
        y: undefined,
      });
    }
  }

  public render() {
    return (
      <EditorWindow
        renderAdventureWindow={this.renderAdventureWindow}
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

  private readonly renderAdventureWindow = () => {
    const { zoomed } = this.props;

    const size = zoomed ? 14 : 28;

    return (
      <AdventureWindow
        width={size}
        height={size}
        x={this.props.x}
        y={this.props.y}
        renderTile={this.renderTile}
      />
    );
  }

  private readonly renderTile = (index: number) => {
    const tile = this.props.map.tiles[index];

    return (
      <MapTile
        key={index}
        index={index}
        size={this.props.zoomed ? "large" : "small"}
        terrainType={tile.terrain}
        onMouseEnter={this.onTileMouseEnter}
      />
    );
  }

  private readonly onTileMouseEnter = (index: number) => {
    const size = this.props.zoomed ? 14 : 28;

    const point = getTilePoint(size, index);

    this.setState({
      ...point,
    });
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
        active={this.state.y}
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
        active={this.state.x}
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
        onZoomClick={this.onZoomClick}
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

  private readonly onZoomClick = () => {
    if (this.props.zoomed) {
      this.props.onZoomOutClick();
    } else {
      this.props.onZoomInClick();
    }
  }
}

export {
  EditorWindowContainer as EditorWindow,
  EditorWindowContainerProps as EditorWindowProps,
};
