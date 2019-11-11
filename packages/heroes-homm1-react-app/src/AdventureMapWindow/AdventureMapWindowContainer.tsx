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
import { AdventureMapWindow, MapCellSize, MapSize, MapTile } from "heroes-homm1-react";
import { adventureWindowActions, gameActions } from "heroes-homm1-state";

import { renderObject } from "../config";
import { HeroTradingWindow } from "../HeroTradingWindow";
import { onTileClick, renderMapObjectDetails } from "./config";

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
          renderCell={this.renderTile}
        />
        {this.props.visibleMapObjectDetails && this.renderMapObjectDetails(this.props.visibleMapObjectDetails)}
        {this.props.heroTradingScreenVisible && this.rendeHeroTradingWindow()}
      </div>
    );
  }

  private readonly renderTile = (index: number, point: MapPoint) => {
    const { data, map } = this.props;

    const tile = map.tiles[index];

    const object = tile.object ?
      this.renderMapObject(tile.object, tile.terrain) :
      undefined;

    const transition = getTerrainTransition(map, point, data);

    return (
      <MapTile
        key={index}
        index={index}
        size="large"
        terrainType={tile.terrain}
        terrainVariant={0}
        terrainTransition={transition}
        onMouseEnter={this.onTileMouseEnter}
        onMouseLeave={this.onTileMouseLeave}
        onClick={this.onTileClick}
      >
        {object}
      </MapTile>
    );
  }

  private renderMapObject(object: MapObject, terrain: string) {
    const { data } = this.props;

    const objectData = data.mapObjects[object.dataId];

    return renderObject(object, objectData, terrain, data, "large");
  }

  private readonly onTileMouseEnter = (index: number) => {
    const { map, activeObjectId } = this.props;

    const activeObject = activeObjectId !== undefined ?
      getObject(map, activeObjectId) :
      undefined;

    const tile = this.props.map.tiles[index];

    const object = tile.object;

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
        cursor: "move",
      });
    }
  }

  private readonly onTileMouseLeave = () => {
    this.setState({
      cursor: "",
    });
  }

  private readonly onTileClick = (index: number) => {
    const { data, map, player, activeObjectId } = this.props;

    const activeObject = activeObjectId !== undefined ?
      getObject(map, activeObjectId) :
      undefined;

    const tile = this.props.map.tiles[index];

    const object = tile.object;

    if (object) {
      const objectData = data.mapObjects[object.dataId];

      onTileClick(player, object, objectData, activeObject, data, this.props.dispatch);
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
