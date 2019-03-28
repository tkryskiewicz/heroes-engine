import * as React from "react";
import { DispatchProp } from "react-redux";

import {
  GameData,
  Hero,
  isDwellingMapObject,
  isDwellingMapObjectData,
  isHeroMapObject,
  isStructureBuilt,
  isTownMapObject,
  Map,
  MapObject,
  Town,
} from "heroes-core";
import { StructureId } from "heroes-homm1";
import {
  AdventureWindow,
  CreatureJoinPrompt,
  DwellingEmptyPrompt,
  HeroMapObject,
  MapObject as MapObj,
  MapTile,
  TownMapObject,
} from "heroes-homm1-react";
import { adventureScreenActions, gameActions, Locator, locatorsActions, LocatorType } from "heroes-homm1-state";

import { HeroTradingWindow } from "../HeroTradingWindow";

interface Props extends DispatchProp {
  readonly mapObjects: GameData["mapObjects"];
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
    if (isHeroMapObject(object)) {
      return (
        <HeroMapObject
          heroClass={object.hero.heroClass}
          alignment={object.hero.alignment}
          orientation={object.orientation}
        />
      );
    }

    if (isTownMapObject(object)) {
      return (
        <TownMapObject
          town={object.town.id}
          isCastleBuilt={isStructureBuilt(object.town, StructureId.Castle)}
          alignment={object.town.alignment}
        />
      );
    }

    if (isDwellingMapObject(object)) {
      return (
        <MapObj
          type={object.id}
        />
      );
    }
  }

  private readonly onTileMouseEnter = (index: number) => {
    const tile = this.props.map.tiles[index];

    const object = tile.object;

    if (object) {
      const { selectedLocator } = this.props;

      if (isHeroMapObject(object)) {
        const heroIndex = this.props.heroes.indexOf(object.hero);

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
    const tile = this.props.map.tiles[index];

    const object = tile.object;

    if (object) {
      const { selectedLocator } = this.props;

      // FIXME: extract
      if (isHeroMapObject(object)) {
        const heroIndex = this.props.heroes.indexOf(object.hero);

        if (!selectedLocator) {
          this.props.dispatch(locatorsActions.selectLocator({ type: LocatorType.Hero, index: heroIndex }));
        } else if (selectedLocator.type === LocatorType.Hero && heroIndex !== selectedLocator.index) {
          const otherHero = this.props.heroes[selectedLocator.index];

          this.props.dispatch(adventureScreenActions.openHeroTradingWindow(object.hero.id, otherHero.id));
        } else {
          this.props.dispatch(locatorsActions.openLocatorDetails());
        }
      } else if (isTownMapObject(object)) {
        const townIndex = this.props.towns.indexOf(object.town);

        if (!selectedLocator || selectedLocator.type === LocatorType.Hero || selectedLocator.index !== townIndex) {
          this.props.dispatch(locatorsActions.selectLocator({ type: LocatorType.Town, index: townIndex }));
        } else {
          this.props.dispatch(locatorsActions.openLocatorDetails());
        }
      } else if (isDwellingMapObject(object)) {
        if (selectedLocator === undefined || selectedLocator.type !== LocatorType.Hero) {
          return;
        }

        this.props.dispatch(adventureScreenActions.openMapObjectDetails(object.id));
      }
    }
  }

  private renderMapObjectDetails(id: string) {
    const mapObject: MapObject =
      this.props.map.tiles.find((t) => t.object !== undefined && (t.object as any).id === id)!.object!;

    const objectData = this.props.mapObjects[mapObject.id];

    if (isDwellingMapObjectData(objectData) && isDwellingMapObject(mapObject)) {
      const onConfirmClick = () => this.onConfirmCreatureJoinPrompt(mapObject.id);

      if (mapObject.availableCount === 0) {
        return (
          <DwellingEmptyPrompt
            visible={true}
            dwelling={mapObject.id}
            creature={objectData.dwelling.creature}
            onConfirmClick={this.onCloseMapObjectDetailsClick}
          />
        );
      } else {
        return (
          <CreatureJoinPrompt
            visible={true}
            creature={objectData.dwelling.creature}
            onConfirmClick={onConfirmClick}
            onCancelClick={this.onCloseMapObjectDetailsClick}
          />
        );
      }
    }
  }

  private readonly onCloseMapObjectDetailsClick = () => {
    this.props.dispatch(adventureScreenActions.closeMapObjectDetails());
  }

  private readonly onConfirmCreatureJoinPrompt = (id: string) => {
    const { selectedLocator } = this.props;

    this.props.dispatch(adventureScreenActions.closeMapObjectDetails());

    const hero = this.props.heroes[selectedLocator!.index];

    this.props.dispatch(gameActions.visitMapObject(id, hero.id));
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
