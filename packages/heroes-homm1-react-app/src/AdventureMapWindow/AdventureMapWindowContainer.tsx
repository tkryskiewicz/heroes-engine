import React from "react";
import { DispatchProp } from "react-redux";

import {
  GameData,
  getObject,
  Map,
  MapObject,
  MapPoint,
} from "heroes-core";
import { getTerrainTransition, isHeroMapObject, isTownMapObject } from "heroes-homm1";
import { AdventureMapWindow, MapCell, MapCellSize, MapSize } from "heroes-homm1-react";
import { adventureWindowActions, gameActions } from "heroes-homm1-state";

import { renderObject } from "../config";
import { HeroTradingWindow } from "../HeroTradingWindow";
import { onCellClick, renderMapObjectDetails } from "./config";

interface Props extends DispatchProp {
  readonly data: GameData;
  readonly player: string;
  readonly map: Map;
  readonly x: number;
  readonly y: number;
  readonly activeObjectId?: string;
  readonly visibleMapObjectDetails?: string;
  readonly heroTradingScreenVisible: boolean;
}

interface State {
  readonly cursor: string;
}

class AdventureMapWindowContainer extends React.Component<Props, State> {
  public readonly state: State = {
    cursor: "",
  };

  public render() {
    const { cursor } = this.state;

    return (
      <div className={cursor ? `cursor-${cursor}` : undefined}>
        <AdventureMapWindow
          width={MapSize}
          height={MapSize}
          cellSize={MapCellSize}
          renderCell={this.renderCell}
        />
        {this.props.visibleMapObjectDetails && this.renderMapObjectDetails(this.props.visibleMapObjectDetails)}
        {this.props.heroTradingScreenVisible && this.rendeHeroTradingWindow()}
      </div>
    );
  }

  private readonly renderCell = (index: number, point: MapPoint) => {
    const { data, map } = this.props;

    const cell = map.cells[index];

    const object = cell.object ?
      this.renderMapObject(cell.object, cell.terrain) :
      undefined;

    const transition = getTerrainTransition(map, point, data);

    return (
      <MapCell
        key={index}
        index={index}
        size="large"
        terrainType={cell.terrain}
        terrainVariant={cell.terrainVariant}
        terrainTransition={transition}
        onMouseEnter={this.onCellMouseEnter}
        onMouseLeave={this.onCellMouseLeave}
        onClick={this.onCellClick}
      >
        {object}
      </MapCell>
    );
  }

  private renderMapObject(object: MapObject, terrain: string) {
    const { data } = this.props;

    const objectData = data.mapObjects[object.dataId];

    return renderObject(object, objectData, terrain, data, "large");
  }

  private readonly onCellMouseEnter = (index: number) => {
    const { map, activeObjectId } = this.props;

    const activeObject = activeObjectId !== undefined ?
      getObject(map, activeObjectId) :
      undefined;

    const cell = this.props.map.cells[index];

    const object = cell.object;

    if (object) {
      if (isHeroMapObject(object)) {
        if (activeObject !== undefined && activeObject.id !== object.id) {
          this.setState({
            cursor: "trade",
          });
        } else {
          this.setState({
            cursor: "hero",
          });
        }
      } else if (isTownMapObject(object)) {
        this.setState({
          cursor: "town",
        });
      }
    } else {
      this.setState({
        cursor: "",
      });
    }
  }

  private readonly onCellMouseLeave = () => {
    this.setState({
      cursor: "",
    });
  }

  private readonly onCellClick = (index: number) => {
    const { data, map, player, activeObjectId } = this.props;

    const activeObject = activeObjectId !== undefined ?
      getObject(map, activeObjectId) :
      undefined;

    const cell = this.props.map.cells[index];

    const object = cell.object;

    if (object) {
      const objectData = data.mapObjects[object.dataId];

      onCellClick(player, object, objectData, activeObject, data, this.props.dispatch);
    }
  }

  private renderMapObjectDetails(id: string) {
    const { data, map, activeObjectId } = this.props;

    const activeObject = activeObjectId !== undefined ?
      getObject(map, activeObjectId) :
      undefined;

    const object = getObject(this.props.map, id)!;

    const objectData = data.mapObjects[object.dataId];

    return renderMapObjectDetails(object, objectData, activeObject, data, {
      onCloseClick: this.onCloseMapObjectDetailsClick,
      onConfirmClick: this.onConfirmMapObjectDetailsClick,
    });
  }

  private readonly onCloseMapObjectDetailsClick = () => {
    this.props.dispatch(adventureWindowActions.closeMapObjectDetails());
  }

  private readonly onConfirmMapObjectDetailsClick = () => {
    const { activeObjectId, visibleMapObjectDetails } = this.props;

    this.props.dispatch(adventureWindowActions.closeMapObjectDetails());

    this.props.dispatch(gameActions.visitMapObject(visibleMapObjectDetails!, activeObjectId!));
  }

  private rendeHeroTradingWindow() {
    return (
      <HeroTradingWindow
        visible={true}
        onExitClick={this.onExitHeroTradingWindowClick}
      />
    );
  }

  private readonly onExitHeroTradingWindowClick = () => {
    this.props.dispatch(adventureWindowActions.closeHeroTradingWindow());
  }
}

export {
  AdventureMapWindowContainer as AdventureMapWindow,
  Props as AdventureMapWindowProps,
};
