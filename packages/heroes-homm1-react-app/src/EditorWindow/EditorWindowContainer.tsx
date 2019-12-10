import React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";

import {
  changeTerrain,
  CreatureObject,
  GameData,
  getCellIndex,
  getCellPoint,
  getObjectById,
  isSamePoint,
  MapObject,
  MapObjectOrientation,
  MapPoint,
  nextOption,
  placeObject,
  previousOption,
  removeObject,
  replaceObject,
  translatePoint,
} from "heroes-core";
import { noop } from "heroes-helpers";
import {
  canPlaceObject,
  createRandomMap,
  EditorOption,
  EraseObjectsSettings,
  getScenarioSpecification,
  getTerrainTransition,
  MapObjectType,
  ObjectDetails,
  RandomMapSettings,
  Scenario,
  ScenarioSpecification,
  setScenarioSpecification,
  TerrainType,
} from "heroes-homm1";
import {
  AdventureMapWindow,
  CellNumbers,
  DetailsOptionDetails,
  EditorButtons,
  EditorHorizontalScrollbar,
  EditorObjectGrid,
  EditorObjectsWindow,
  EditorOptions,
  EditorVerticalScrollbar,
  EditorWindow,
  editorWindowMessages,
  EraseOptionDetails,
  EraseOptionSettingsWindow,
  MapCell,
  MapCellSize,
  MapSize,
  ObjectDetailsUnavailablePrompt,
  ObjectsOptionDetails,
  RandomMapSettingsWindow,
  ScenarioSpecificationWindow,
  TerrainsOptionDetails,
} from "heroes-homm1-react";

import { renderEditorObject } from "../config";
import { createEditorMapObject, getObjectDetails, getObjects, renderObjectDetails, setObjectDetails } from "./config";

interface EditorWindowContainerProps extends InjectedIntlProps {
  readonly data: GameData;
  readonly scenario: Scenario;
  readonly onScenarioChange: (value: Scenario) => void;
  readonly position: MapPoint;
  readonly onPositionChange: (value: MapPoint) => void;
  readonly selectedOption: EditorOption;
  readonly onSelectedOptionChange: (value: EditorOption) => void;
  readonly selectedTerrain: string;
  readonly onSelectedTerrainChange: (value: string) => void;

  readonly selectedObjectType: MapObjectType;
  readonly onSelectedObjectTypeChange: (value: MapObjectType) => void;
  readonly selectedObject?: string;
  readonly onSelectedObjectChange: (value: string) => void;
  readonly objectsWindowVisible: boolean;
  readonly onOpenObjectsWindowClick: () => void;
  readonly onCloseObjectsWindowClick: () => void;

  readonly visibleObjectDetails?: string;
  readonly onOpenObjectDetailsClick: (id: string, details: ObjectDetails) => void;
  readonly onCloseObjectDetailsClick: () => void;
  readonly objectDetailsUnavailablePromptVisible: boolean;
  readonly onOpenObjectDetailsUnavailablePromptClick: () => void;
  readonly onCloseObjectDetailsUnavailablePromptClick: () => void;

  readonly selectedObjectDetails?: ObjectDetails;
  readonly onSelectedObjectDetailsChange: (value: ObjectDetails) => void;

  readonly eraseObjectsSettings: EraseObjectsSettings;
  readonly eraseObjectsSettingsVisible: boolean;
  readonly onOpenEraseObjectsSettingsClick: () => void;
  readonly onCloseEraseObjectsSettingsClick: () => void;
  readonly onEraseObjectsSettingsChange: (value: EraseObjectsSettings) => void;

  readonly scenarioSpecification: ScenarioSpecification;
  readonly scenarioSpecificationVisible: boolean;
  readonly onOpenScenarioSpecificationClick: () => void;
  readonly onCloseScenarioSpecificationClick: () => void;
  readonly onScenarioSpecificationChange: (value: ScenarioSpecification) => void;

  readonly randomMapSettings: RandomMapSettings;
  readonly randomMapSettingsVisible: boolean;
  readonly onOpenRandomMapSettingsClick: () => void;
  readonly onCloseRandomMapSettingsClick: () => void;
  readonly onRandomMapSettingsChange: (value: RandomMapSettings) => void;

  readonly zoomed: boolean;
  readonly onZoomInClick: () => void;
  readonly onZoomOutClick: () => void;
  readonly onUndoClick: () => void;
  readonly onNewClick: () => void;
  readonly onLoadClick: () => void;
  readonly onSaveClick: () => void;
  readonly onQuitClick: () => void;
}

interface EditorWindowContainerState {
  readonly activePoint?: MapPoint;
  readonly activeCell: boolean;
  readonly message: string;
  readonly objectId: number;
  readonly eraseObjectsSettings: EraseObjectsSettings;
}

type DefaultProp =
  "onScenarioChange" |
  "onPositionChange" |
  "onSelectedOptionChange" |
  "onSelectedTerrainChange" |

  "onSelectedObjectTypeChange" |
  "onSelectedObjectChange" |
  "onOpenObjectsWindowClick" |
  "onCloseObjectsWindowClick" |

  "onOpenObjectDetailsClick" |
  "onCloseObjectDetailsClick" |
  "objectDetailsUnavailablePromptVisible" |
  "onOpenObjectDetailsUnavailablePromptClick" |
  "onCloseObjectDetailsUnavailablePromptClick" |

  "onSelectedObjectDetailsChange" |

  "eraseObjectsSettingsVisible" |
  "onOpenEraseObjectsSettingsClick" |
  "onCloseEraseObjectsSettingsClick" |
  "onEraseObjectsSettingsChange" |

  "scenarioSpecificationVisible" |
  "onOpenScenarioSpecificationClick" |
  "onCloseScenarioSpecificationClick" |
  "onScenarioSpecificationChange" |

  "randomMapSettingsVisible" |
  "onOpenRandomMapSettingsClick" |
  "onCloseRandomMapSettingsClick" |
  "onRandomMapSettingsChange" |

  "onZoomInClick" |
  "onZoomOutClick" |
  "onUndoClick" |
  "onNewClick" |
  "onLoadClick" |
  "onSaveClick" |
  "onQuitClick";

class EditorWindowContainer extends React.Component<EditorWindowContainerProps, EditorWindowContainerState> {
  public static readonly defaultProps: Pick<EditorWindowContainerProps, DefaultProp> = {
    eraseObjectsSettingsVisible: false,
    objectDetailsUnavailablePromptVisible: false,
    onCloseEraseObjectsSettingsClick: noop,
    onCloseObjectDetailsClick: noop,
    onCloseObjectDetailsUnavailablePromptClick: noop,
    onCloseObjectsWindowClick: noop,
    onCloseRandomMapSettingsClick: noop,
    onCloseScenarioSpecificationClick: noop,
    onEraseObjectsSettingsChange: noop,
    onLoadClick: noop,
    onNewClick: noop,
    onOpenEraseObjectsSettingsClick: noop,
    onOpenObjectDetailsClick: noop,
    onOpenObjectDetailsUnavailablePromptClick: noop,
    onOpenObjectsWindowClick: noop,
    onOpenRandomMapSettingsClick: noop,
    onOpenScenarioSpecificationClick: noop,
    onPositionChange: noop,
    onQuitClick: noop,
    onRandomMapSettingsChange: noop,
    onSaveClick: noop,
    onScenarioChange: noop,
    onScenarioSpecificationChange: noop,
    onSelectedObjectChange: noop,
    onSelectedObjectDetailsChange: noop,
    onSelectedObjectTypeChange: noop,
    onSelectedOptionChange: noop,
    onSelectedTerrainChange: noop,
    onUndoClick: noop,
    onZoomInClick: noop,
    onZoomOutClick: noop,
    randomMapSettingsVisible: false,
    scenarioSpecificationVisible: false,
  };

  public readonly state: EditorWindowContainerState = {
    activeCell: false,
    eraseObjectsSettings: {
      allOverlays: false,
      clearEntire: false,
      objectTypes: [],
    },
    message: "",
    objectId: 0,
  };

  public componentDidUpdate(prevProps: EditorWindowContainerProps) {
    if (this.props.zoomed !== prevProps.zoomed ||
      (this.props.selectedOption !== prevProps.selectedOption && prevProps.selectedOption === EditorOption.Details) ||
      !isSamePoint(this.props.position, prevProps.position)) {
      this.setState({
        activePoint: undefined,
      });
    }
  }

  public render() {
    return (
      <EditorWindow
        renderAdventureMap={this.renderAdventureMap}
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
        message={this.state.message}
      />
    );
  }

  private readonly renderAdventureMap = () => {
    const size = this.getCellCount();

    return (
      <AdventureMapWindow
        width={size}
        height={size}
        cellSize={this.props.zoomed ? MapCellSize : MapCellSize / 2}
        renderCell={this.renderCell}
      />
    );
  }

  private readonly renderCell = (index: number, point: MapPoint) => {
    const { data, scenario, position, selectedOption } = this.props;
    const { activePoint, activeCell } = this.state;

    const cellPoint = translatePoint(position, point.x, point.y);

    const cellIndex = getCellIndex(scenario.map.width, cellPoint);

    const size = this.props.zoomed ? "large" : "small";

    const cell = scenario.map.cells[cellIndex];

    const object = cell.object ?
      renderEditorObject(cell.object, data.mapObjects[cell.object.dataId], cell.terrain, data, size) :
      undefined;

    const transition = getTerrainTransition(scenario.map, cellPoint, data);

    const active = activeCell && activePoint && isSamePoint(activePoint, cellPoint) &&
      selectedOption === EditorOption.Details;

    return (
      <MapCell
        key={index}
        index={cellIndex}
        size={size}
        terrainType={cell.terrain}
        terrainTransition={transition}
        terrainVariant={cell.terrainVariant}
        active={active}
        onMouseEnter={this.onCellMouseEnter}
        onClick={this.onCellClick}
      >
        {object}
      </MapCell>
    );
  }

  private readonly onCellMouseEnter = (index: number) => {
    const point = getCellPoint(this.props.scenario.map.width, index);

    this.setState({
      activeCell: this.props.selectedOption === EditorOption.Details,
      activePoint: point,
    });
  }

  private readonly onCellClick = (index: number) => {
    const { data, scenario, selectedOption, selectedObject } = this.props;
    const { formatMessage } = this.props.intl;

    const point = getCellPoint(scenario.map.width, index);

    if (selectedOption === EditorOption.Terrains) {
      const newScenario: Scenario = {
        ...scenario,
        map: changeTerrain(scenario.map, point, this.props.selectedTerrain),
      };

      this.props.onScenarioChange(newScenario);
    } else if (selectedOption === EditorOption.Objects && selectedObject) {
      const objectData = data.mapObjects[selectedObject];

      if (!canPlaceObject(scenario.map, point, objectData, data)) {
        // FIXME: find better way to clear message
        this.setState({
          message: formatMessage(editorWindowMessages.invalidPlacement),
        }, () => {
          setTimeout(() => this.setState({ message: "" }), 1000);
        });
      } else {
        const object = createEditorMapObject(this.state.objectId.toString(), objectData.id, data);

        const newScenario: Scenario = {
          ...scenario,
          map: placeObject(scenario.map, point, object),
        };

        this.props.onScenarioChange(newScenario);

        this.setState({
          objectId: this.state.objectId + 1,
        });
      }
    } else if (selectedOption === EditorOption.Details) {
      const cell = scenario.map.cells[getCellIndex(scenario.map.width, point)];

      const object = cell.object;

      if (object === undefined) {
        this.props.onOpenObjectDetailsUnavailablePromptClick();
      } else {
        const details = getObjectDetails(object, data);

        if (details === undefined) {
          this.props.onOpenObjectDetailsUnavailablePromptClick();
        } else {
          this.props.onOpenObjectDetailsClick(object.id, details);
        }
      }
    } else if (selectedOption === EditorOption.Erase) {
      const cell = scenario.map.cells[getCellIndex(scenario.map.width, point)];

      // TODO: implement erase options
      if (cell.object) {
        const newScenario: Scenario = {
          ...scenario,
          map: removeObject(scenario.map, cell.object.id),
        };

        this.props.onScenarioChange(newScenario);
      }
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
    const { activePoint } = this.state;

    return (
      <CellNumbers
        orientation="vertical"
        size={this.props.zoomed ? "large" : "small"}
        from={position.y}
        to={position.y + this.getCellCount() - 1}
        active={activePoint ? activePoint.y : undefined}
      />
    );
  }

  private readonly renderHorizontalCellNumbers = () => {
    const { position } = this.props;
    const { activePoint } = this.state;

    return (
      <CellNumbers
        orientation="horizontal"
        size={this.props.zoomed ? "large" : "small"}
        from={position.x}
        to={position.x + this.getCellCount() - 1}
        active={activePoint ? activePoint.x : undefined}
      />
    );
  }

  private readonly renderHorizontalScrollbar = () => {
    const progress = this.props.position.x / (this.props.scenario.map.width - this.getCellCount());

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
    const progress = this.props.position.y / (this.props.scenario.map.height - this.getCellCount());

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
            options={Object.keys(data.terrains)}
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
            >
              {this.renderSelectedObject()}
            </ObjectsOptionDetails>
            {this.props.objectsWindowVisible && this.renderObjectsWindow()}
          </>
        );
      case EditorOption.Details:
        const { visibleObjectDetails } = this.props;

        return (
          <>
            <DetailsOptionDetails />
            {visibleObjectDetails && this.renderObjectDetails(visibleObjectDetails)}
            {this.props.objectDetailsUnavailablePromptVisible && this.renderObjectDetailsUnavailablePrompt()}
          </>
        );
      case EditorOption.Erase:
        return (
          <>
            <EraseOptionDetails
              onTypesClick={this.onOpenEraseObjectsSettingsClick}
            />
            {this.props.eraseObjectsSettingsVisible && this.renderEraseObjectsSettingsWindow()}
          </>
        );
    }
  }

  private readonly onPreviousObjectTypeClick = () => {
    const option = previousOption<MapObjectType>(Object.values(MapObjectType), this.props.selectedObjectType);

    this.props.onSelectedObjectTypeChange(option);
  }

  private readonly onNextObjectTypeClick = () => {
    const option = nextOption<MapObjectType>(Object.values(MapObjectType), this.props.selectedObjectType);

    this.props.onSelectedObjectTypeChange(option);
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
        {renderEditorObject(obj, objectData, terrain, data, "small")}
      </EditorObjectGrid>
    );
  }

  // FIXME
  private getTerrain() {
    switch (this.props.selectedObjectType) {
      case MapObjectType.Water:
        return TerrainType.Water;
      case MapObjectType.Grass:
        return TerrainType.Grass;
      case MapObjectType.Snow:
        return TerrainType.Snow;
      case MapObjectType.Swamp:
        return TerrainType.Swamp;
      case MapObjectType.Lava:
        return TerrainType.Lava;
      case MapObjectType.Desert:
        return TerrainType.Desert;
      case MapObjectType.Dirt:
        return TerrainType.Dirt;
      default:
        return undefined;
    }
  }

  private renderObjectDetails(id: string) {
    const { data, selectedObjectDetails } = this.props;

    const object = getObjectById(this.props.scenario.map, id);

    if (object === undefined || selectedObjectDetails === undefined) {
      return;
    }

    return renderObjectDetails(object, selectedObjectDetails, data, {
      onCloseClick: this.props.onCloseObjectDetailsClick,
      onConfirmClick: this.onConfirmObjectDetailsClick,
      onValueChange: this.props.onSelectedObjectDetailsChange,
    });
  }

  private readonly onConfirmObjectDetailsClick = () => {
    const { data, scenario, visibleObjectDetails, selectedObjectDetails } = this.props;

    const object = getObjectById(scenario.map, visibleObjectDetails!) as CreatureObject;

    const newObject = setObjectDetails(object, selectedObjectDetails!, data);

    const newScenario: Scenario = {
      ...scenario,
      map: replaceObject(scenario.map, newObject),
    };

    this.props.onScenarioChange(newScenario);

    this.props.onCloseObjectDetailsClick();
  }

  private renderObjectDetailsUnavailablePrompt() {
    return (
      <ObjectDetailsUnavailablePrompt
        visible={true}
        onConfirmClick={this.props.onCloseObjectDetailsUnavailablePromptClick}
      />
    );
  }

  private readonly onOpenEraseObjectsSettingsClick = () => {
    this.setState({
      eraseObjectsSettings: this.props.eraseObjectsSettings,
    }, this.props.onOpenEraseObjectsSettingsClick);
  }

  private renderEraseObjectsSettingsWindow() {
    return (
      <EraseOptionSettingsWindow
        visible={true}
        value={this.state.eraseObjectsSettings}
        onValueChange={this.onEraseObjectsSettingsChange}
        onConfirmClick={this.onConfirmEraseObjectsSettingsClick}
        onCancelClick={this.props.onCloseEraseObjectsSettingsClick}
      />
    );
  }

  private readonly onEraseObjectsSettingsChange = (value: EraseObjectsSettings) => {
    this.setState({
      eraseObjectsSettings: value,
    });
  }

  private readonly onConfirmEraseObjectsSettingsClick = () => {
    this.props.onEraseObjectsSettingsChange(this.state.eraseObjectsSettings);
  }

  private readonly renderButtons = () => {
    return (
      <>
        <EditorButtons
          onZoomClick={this.onZoomClick}
          onUndoClick={this.props.onUndoClick}
          onSpecsClick={this.onOpenScenarioSpecificationClick}
          onRandomClick={this.props.onOpenRandomMapSettingsClick}
          onNewClick={this.props.onNewClick}
          onLoadClick={this.props.onLoadClick}
          onSaveClick={this.props.onSaveClick}
          onQuitClick={this.props.onQuitClick}
        />
        {this.props.scenarioSpecificationVisible && this.renderScenarioSpecification()}
        {this.props.randomMapSettingsVisible && this.renderRandomMapSettings()}
      </>
    );
  }

  private readonly onZoomClick = () => {
    if (this.props.zoomed) {
      this.props.onZoomOutClick();
    } else {
      this.props.onZoomInClick();
    }
  }

  private readonly onOpenScenarioSpecificationClick = () => {
    const value = getScenarioSpecification(this.props.scenario);

    this.props.onScenarioSpecificationChange(value);

    this.props.onOpenScenarioSpecificationClick();
  }

  private renderScenarioSpecification() {
    return (
      <ScenarioSpecificationWindow
        visible={true}
        value={this.props.scenarioSpecification}
        onValueChange={this.props.onScenarioSpecificationChange}
        onConfirmClick={this.onConfirmScenarioSpecificationClick}
        onCancelClick={this.props.onCloseScenarioSpecificationClick}
      />
    );
  }

  private readonly onConfirmScenarioSpecificationClick = () => {
    const { scenario, scenarioSpecification } = this.props;

    const newScenario = setScenarioSpecification(scenario, scenarioSpecification);

    this.props.onScenarioChange(newScenario);

    this.props.onCloseScenarioSpecificationClick();
  }

  private renderRandomMapSettings() {
    return (
      <RandomMapSettingsWindow
        visible={true}
        data={this.props.data}
        value={this.props.randomMapSettings}
        onValueChange={this.props.onRandomMapSettingsChange}
        onConfirmClick={this.onConfirmRandomMapSettingsClick}
        onCancelClick={this.props.onCloseRandomMapSettingsClick}
      />
    );
  }

  private readonly onConfirmRandomMapSettingsClick = () => {
    const { randomMapSettings } = this.props;

    // TODO: is this random scenario?
    // NOTE: randomizing also resets scenario specification
    const newScenario = {
      ...this.props.scenario,
      map: createRandomMap(this.props.data, randomMapSettings, 4),
    };

    this.props.onScenarioChange(newScenario);

    this.props.onCloseRandomMapSettingsClick();

    if (randomMapSettings.saveWithoutViewing) {
      this.props.onOpenScenarioSpecificationClick();
    }
  }

  private getCellCount() {
    return this.props.zoomed ? MapSize : MapSize * 2;
  }

  private readonly onScroll = (direction: MapObjectOrientation) => {
    const { scenario, position } = this.props;

    // TODO: simplify
    let point = position;

    if ([MapObjectOrientation.NorthWest, MapObjectOrientation.North, MapObjectOrientation.NorthEast]
      .includes(direction) && position.y > 0) {
      point = translatePoint(point, 0, -1);
    } else if ([MapObjectOrientation.SouthWest, MapObjectOrientation.South, MapObjectOrientation.SouthEast]
      .includes(direction) && position.y < scenario.map.height - this.getCellCount()) {
      point = translatePoint(point, 0, 1);
    }

    if ([MapObjectOrientation.NorthWest, MapObjectOrientation.West, MapObjectOrientation.SouthWest]
      .includes(direction) && position.x > 0) {
      point = translatePoint(point, -1, 0);
    } else if ([MapObjectOrientation.NorthEast, MapObjectOrientation.East, MapObjectOrientation.SouthEast]
      .includes(direction) && position.x < scenario.map.width - this.getCellCount()) {
      point = translatePoint(point, 1, 0);
    }

    if (!isSamePoint(point, position)) {
      this.props.onPositionChange(point);
    }
  }
}

const ContainerWrapped = injectIntl(EditorWindowContainer);

type ContainerWrappedProps = ExtractProps<typeof ContainerWrapped>;

export {
  ContainerWrapped as EditorWindow,
  ContainerWrappedProps as EditorWindowProps,
};
