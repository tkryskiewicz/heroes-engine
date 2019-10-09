import React from "react";
import { DispatchProp } from "react-redux";

import {
  GameData,
  getObject,
  getTilePoint,
  Map,
  MapObject,
} from "heroes-core";
import { getTerrainTransition, isHeroMapObject, isTownMapObject } from "heroes-homm1";
import { AdventureWindow, MapTile } from "heroes-homm1-react";
import { adventureScreenActions, gameActions } from "heroes-homm1-state";

import { renderObject } from "../config";
import { HeroTradingWindow } from "../HeroTradingWindow";
import { onTileClick, renderMapObjectDetails } from "./config";

interface Props extends DispatchProp {
  readonly data: GameData;
  readonly alignment: string;
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

class AdventureWindowContainer extends React.Component<Props, State> {
  public readonly state: State = {
    cursor: "",
  };

  public render() {
    const { cursor } = this.state;

    return (
      <div className={cursor ? `cursor-${cursor}` : undefined}>
        <AdventureWindow
          width={14}
          height={14}
          renderTile={this.renderTile}
          onTileClick={this.onTileClick}
        />
        {this.props.visibleMapObjectDetails && this.renderMapObjectDetails(this.props.visibleMapObjectDetails)}
        {this.props.heroTradingScreenVisible && this.rendeHeroTradingWindow()}
      </div>
    );
  }

  private readonly renderTile = (index: number) => {
    const { data, map } = this.props;

    const tile = map.tiles[index];

    const object = tile.object ?
      this.renderMapObject(tile.object, tile.terrain) :
      undefined;

    const point = getTilePoint(map.width, index);

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
    const { data, map, alignment, activeObjectId } = this.props;

    const activeObject = activeObjectId !== undefined ?
      getObject(map, activeObjectId) :
      undefined;

    const tile = this.props.map.tiles[index];

    const object = tile.object;

    if (object) {
      const objectData = data.mapObjects[object.dataId];

      onTileClick(alignment, object, objectData, activeObject, data, this.props.dispatch);
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
    this.props.dispatch(adventureScreenActions.closeMapObjectDetails());
  }

  private readonly onConfirmMapObjectDetailsClick = () => {
    const { activeObjectId, visibleMapObjectDetails } = this.props;

    this.props.dispatch(adventureScreenActions.closeMapObjectDetails());

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
    this.props.dispatch(adventureScreenActions.closeHeroTradingWindow());
  }
}

export {
  AdventureWindowContainer as AdventureWindow,
  Props as AdventureWindowProps,
};
