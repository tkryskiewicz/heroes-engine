import * as React from "react";
import { DispatchProp } from "react-redux";

import {
  GameData,
  Hero,
  isHeroMapObject,
  isTownMapObject,
  Map,
  MapObject,
  Town,
} from "heroes-core";
import {
  AdventureWindow,
  MapTile,
} from "heroes-homm1-react";
import { adventureScreenActions, gameActions, Locator, LocatorType } from "heroes-homm1-state";

import { HeroTradingWindow } from "../HeroTradingWindow";
import { onTileClick, renderMapObject, renderMapObjectDetails } from "./config";

interface Props extends DispatchProp {
  readonly mapObjects: GameData["mapObjects"];
  readonly alignment: string;
  readonly map: Map;
  readonly heroes: Hero[];
  readonly towns: Town[];
  readonly selectedLocator?: Locator;
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
          map={this.props.map}
          renderTile={this.renderTile}
          onTileClick={this.onTileClick}
        />
        {this.props.visibleMapObjectDetails && this.renderMapObjectDetails(this.props.visibleMapObjectDetails)}
        {this.props.heroTradingScreenVisible && this.rendeHeroTradingWindow()}
      </div>
    );
  }

  private readonly renderTile = (index: number) => {
    const tile = this.props.map.tiles[index];

    const object = tile.object ?
      this.renderMapObject(tile.object) :
      undefined;

    return (
      <MapTile
        key={index}
        index={index}
        onMouseEnter={this.onTileMouseEnter}
        onMouseLeave={this.onTileMouseLeave}
        onClick={this.onTileClick}
      >
        {object}
      </MapTile>
    );
  }

  private renderMapObject(object: MapObject) {
    const { mapObjects } = this.props;

    const objectData = mapObjects[object.dataId];

    return renderMapObject(object, objectData);
  }

  private readonly onTileMouseEnter = (index: number) => {
    const tile = this.props.map.tiles[index];

    const object = tile.object;

    if (object) {
      const { selectedLocator } = this.props;

      if (isHeroMapObject(object)) {
        const heroIndex = this.props.heroes.indexOf(object);

        if (selectedLocator && selectedLocator.type === LocatorType.Hero && selectedLocator.index !== heroIndex) {
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
    const { mapObjects, heroes, towns, alignment, selectedLocator } = this.props;

    const activeHero = selectedLocator !== undefined && selectedLocator.type === LocatorType.Hero ?
      this.props.heroes[selectedLocator.index] :
      undefined;

    const activeTown = selectedLocator !== undefined && selectedLocator.type === LocatorType.Town ?
      this.props.towns[selectedLocator.index] :
      undefined;

    const tile = this.props.map.tiles[index];

    const object = tile.object;

    if (object) {
      const objectData = mapObjects[object.dataId];

      onTileClick(alignment, object, objectData, heroes, activeHero, towns, activeTown, this.props.dispatch);
    }
  }

  private renderMapObjectDetails(id: string) {
    const { mapObjects, alignment, selectedLocator, heroes } = this.props;

    const activeHero = selectedLocator !== undefined && selectedLocator.type === LocatorType.Hero ?
      heroes[selectedLocator.index] :
      undefined;

    const mapObject: MapObject =
      this.props.map.tiles.find((t) => t.object !== undefined && (t.object as any).id === id)!.object!;

    const objectData = mapObjects[mapObject.dataId];

    return renderMapObjectDetails(alignment, mapObject, objectData, activeHero, {
      onCloseClick: this.onCloseMapObjectDetailsClick,
      onConfirmClick: this.onConfirmMapObjectDetailsClick,
    });
  }

  private readonly onCloseMapObjectDetailsClick = () => {
    this.props.dispatch(adventureScreenActions.closeMapObjectDetails());
  }

  private readonly onConfirmMapObjectDetailsClick = () => {
    const { selectedLocator, visibleMapObjectDetails } = this.props;

    this.props.dispatch(adventureScreenActions.closeMapObjectDetails());

    const hero = this.props.heroes[selectedLocator!.index];

    this.props.dispatch(gameActions.visitMapObject(visibleMapObjectDetails!, hero.id));
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
