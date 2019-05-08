import * as React from "react";

import {
  GameData,
  getTileIndex,
  getTilePoint,
  isSamePoint,
  Map,
  MapObject,
  MapObjectOrientation,
  MapPoint,
} from "heroes-core";
import { EditorObjectType, EditorOption, nextObjectType, previousObjectType, TerrainType } from "heroes-homm1";
import {
  AdventureWindow,
  CellNumbers,
  DetailsOptionDetails,
  EditorButtons,
  EditorHorizontalScrollbar,
  EditorObjectGrid,
  EditorObjectsWindow,
  EditorOptions,
  EditorVerticalScrollbar,
  EditorWindow,
  EraseOptionDetails,
  MapTile,
  ObjectsOptionDetails,
  TerrainsOptionDetails,
} from "heroes-homm1-react";

import { getObjects, renderObject } from "./config";

interface EditorWindowContainerProps {
  readonly data: GameData;
  readonly map: Map;
  readonly position: MapPoint;
  readonly onChangePosition: (value: MapPoint) => void;
  readonly selectedOption: EditorOption;
  readonly onSelectedOptionChange: (value: EditorOption) => void;
  readonly selectedTerrain: string;
  readonly onSelectedTerrainChange: (value: string) => void;
  readonly onChangeTerrainClick: (point: MapPoint, terrain: string) => void;

  readonly selectedObjectType: EditorObjectType;
  readonly onSelectedObjectTypeChange: (value: EditorObjectType) => void;
  readonly selectedObject?: string;
  readonly onSelectedObjectChange: (value: string) => void;
  readonly objectsWindowVisible: boolean;
  readonly onOpenObjectsWindowClick: () => void;
  readonly onCloseObjectsWindowClick: () => void;

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
  "onChangePosition" |
  "onSelectedOptionChange" |
  "onSelectedTerrainChange" |
  "onChangeTerrainClick" |

  "onSelectedObjectTypeChange" |
  "onSelectedObjectChange" |
  "onOpenObjectsWindowClick" |
  "onCloseObjectsWindowClick" |

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
    onChangePosition: () => undefined,
    onChangeTerrainClick: () => undefined,
    onCloseObjectsWindowClick: () => undefined,
    onEraseTypesClick: () => undefined,
    onLoadClick: () => undefined,
    onNewClick: () => undefined,
    onOpenObjectsWindowClick: () => undefined,
    onQuitClick: () => undefined,
    onRandomClick: () => undefined,
    onSaveClick: () => undefined,
    onSelectedObjectChange: () => undefined,
    onSelectedObjectTypeChange: () => undefined,
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
      !isSamePoint(this.props.position, prevProps.position)) {
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
    const size = this.getTileCount();

    return (
      <AdventureWindow
        width={size}
        height={size}
        renderTile={this.renderTile}
      />
    );
  }

  private readonly renderTile = (index: number) => {
    const { map, position } = this.props;

    // FIXME: move some logic to adventure window?
    const windowPoint = getTilePoint(this.getTileCount(), index);

    const tileIndex = getTileIndex(map.width, {
      x: position.x + windowPoint.x,
      y: position.y + windowPoint.y,
    });

    const tile = map.tiles[tileIndex];

    return (
      <MapTile
        key={index}
        index={tileIndex}
        size={this.props.zoomed ? "large" : "small"}
        terrainType={tile.terrain}
        onMouseEnter={this.onTileMouseEnter}
        onClick={this.onTileClick}
      />
    );
  }

  private readonly onTileMouseEnter = (index: number) => {
    const point = getTilePoint(this.props.map.width, index);

    this.setState({
      ...point,
    });
  }

  private readonly onTileClick = (index: number) => {
    const point = getTilePoint(this.props.map.width, index);

    if (this.props.selectedOption === EditorOption.Terrains) {
      this.props.onChangeTerrainClick(point, this.props.selectedTerrain);
    }
  }

  private readonly onScrollNorthWest = () => {
    this.onScroll(MapObjectOrientation.NorthWest);
  }

  private readonly onScrollNorthEast = () => {
    this.onScroll(MapObjectOrientation.NorthEast);
  }

  private readonly onScrollSouthWest = () => {
    this.onScroll(MapObjectOrientation.SouthWest);
  }

  private readonly onScrollSouthEast = () => {
    this.onScroll(MapObjectOrientation.SouthEast);
  }

  private readonly renderVerticalCellNumbers = () => {
    const { position } = this.props;

    return (
      <CellNumbers
        orientation="vertical"
        size={this.props.zoomed ? "large" : "small"}
        from={position.y}
        to={position.y + this.getTileCount() - 1}
        active={this.state.y}
      />
    );
  }

  private readonly renderHorizontalCellNumbers = () => {
    const { position } = this.props;

    return (
      <CellNumbers
        orientation="horizontal"
        size={this.props.zoomed ? "large" : "small"}
        from={position.x}
        to={position.x + this.getTileCount() - 1}
        active={this.state.x}
      />
    );
  }

  private readonly renderHorizontalScrollbar = () => {
    const progress = this.props.position.x / (this.props.map.width - this.getTileCount());

    return (
      <EditorHorizontalScrollbar
        progress={progress}
        onScrollLeftClick={this.onScrollWest}
        onScrollRightClick={this.onScrollEast}
      />
    );
  }

  private readonly onScrollWest = () => {
    this.onScroll(MapObjectOrientation.West);
  }

  private readonly onScrollEast = () => {
    this.onScroll(MapObjectOrientation.East);
  }

  private readonly renderVerticalScrollbar = () => {
    const progress = this.props.position.y / (this.props.map.height - this.getTileCount());

    return (
      <EditorVerticalScrollbar
        progress={progress}
        onScrollUpClick={this.onScrollNorth}
        onScrollDownClick={this.onScrollSouth}
      />
    );
  }

  private readonly onScrollNorth = () => {
    this.onScroll(MapObjectOrientation.North);
  }

  private readonly onScrollSouth = () => {
    this.onScroll(MapObjectOrientation.South);
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
          <>
            <ObjectsOptionDetails
              onSlotClick={this.props.onOpenObjectsWindowClick}
              selectedObjectType={this.props.selectedObjectType}
              onPreviousTypeClick={this.onPreviousObjectTypeClick}
              onNextTypeClick={this.onNextObjectTypeClick}
              renderObject={this.renderSelectedObject}
            />
            {this.props.objectsWindowVisible && this.renderObjectsWindow()}
          </>
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

  private readonly onPreviousObjectTypeClick = () => {
    this.props.onSelectedObjectTypeChange(previousObjectType(this.props.selectedObjectType));
  }

  private readonly onNextObjectTypeClick = () => {
    this.props.onSelectedObjectTypeChange(nextObjectType(this.props.selectedObjectType));
  }

  private readonly renderSelectedObject = () => {
    const { selectedObject } = this.props;

    return selectedObject && this.renderObject(selectedObject);
  }

  private renderObjectsWindow() {
    const { data, selectedObjectType } = this.props;

    const objects = getObjects(selectedObjectType, data);

    return (
      <EditorObjectsWindow
        visible={true}
        objects={objects}
        renderObject={this.renderObject}
        onObjectClick={this.props.onSelectedObjectChange}
      />
    );
  }

  private readonly renderObject = (object: string) => {
    const { data } = this.props;

    const obj: MapObject = {
      dataId: object,
      id: "",
    };

    const objectData = data.mapObjects[object];

    const terrain = this.getTerrain();

    return (
      <EditorObjectGrid
        width={objectData.width}
        height={objectData.height}
        grid={objectData.grid}
      >
        {renderObject(obj, objectData, terrain, data)}
      </EditorObjectGrid>
    );
  }

  // FIXME
  private getTerrain() {
    switch (this.props.selectedObjectType) {
      case EditorObjectType.WaterObjects:
        return TerrainType.Water;
      case EditorObjectType.GrassObjects:
        return TerrainType.Grass;
      case EditorObjectType.SnowObjects:
        return TerrainType.Snow;
      case EditorObjectType.SwampObjects:
        return TerrainType.Swamp;
      case EditorObjectType.LavaObjects:
        return TerrainType.Lava;
      case EditorObjectType.DesertObjects:
        return TerrainType.Desert;
      case EditorObjectType.DirtObjects:
        return TerrainType.Dirt;
      default:
        return undefined;
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

  private getTileCount() {
    return this.props.zoomed ? 14 : 28;
  }

  private readonly onScroll = (direction: MapObjectOrientation) => {
    const { map, position } = this.props;

    // TODO: simplify
    let point: MapPoint = {
      x: position.x,
      y: position.y,
    };

    if (direction.includes(MapObjectOrientation.North) && position.y > 0) {
      point = {
        ...point,
        y: point.y - 1,
      };
    } else if (direction.includes(MapObjectOrientation.South) && position.y < map.height - this.getTileCount()) {
      point = {
        ...point,
        y: point.y + 1,
      };
    }

    if (direction.includes(MapObjectOrientation.West) && position.x > 0) {
      point = {
        ...point,
        x: point.x - 1,
      };
    } else if (direction.includes(MapObjectOrientation.East) && position.x < map.width - this.getTileCount()) {
      point = {
        ...point,
        x: point.x + 1,
      };
    }

    if (!isSamePoint(point, position)) {
      this.props.onChangePosition(point);
    }
  }
}

export {
  EditorWindowContainer as EditorWindow,
  EditorWindowContainerProps as EditorWindowProps,
};
