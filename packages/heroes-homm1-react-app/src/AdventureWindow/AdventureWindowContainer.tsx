import * as React from "react";
import { DispatchProp } from "react-redux";

import {
  GameData,
  getVisitor,
  Hero,
  isDwellingMapObject,
  isDwellingMapObjectData,
  isHeroMapObject,
  isLimitedInteractionMapObject,
  isLimitedInteractionMapObjectData,
  isObjectOwnedBy,
  isOwnableMapObject,
  isResourceGeneratorMapObjectData,
  isStructureBuilt,
  isTownMapObject,
  isTreasureMapObject,
  Map,
  MapObject,
  Town,
  wasVisitedBy,
} from "heroes-core";
import { MapObjectId, StructureId } from "heroes-homm1";
import {
  AdventureWindow,
  CreatureJoinPrompt,
  DwellingEmptyPrompt,
  HeroMapObject,
  MapObject as MapObj,
  MapTile,
  MineMapObject,
  ObeliskAlreadyVisitedPrompt,
  ResourceMapObject,
  TownMapObject,
  VisitMinePrompt,
  VisitObeliskPrompt,
} from "heroes-homm1-react";
import { adventureScreenActions, gameActions, Locator, locatorsActions, LocatorType } from "heroes-homm1-state";

import { HeroTradingWindow } from "../HeroTradingWindow";

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

    const objectData = mapObjects[object.id];

    if (isHeroMapObject(object)) {
      return (
        <HeroMapObject
          heroClass={object.hero.heroClass}
          alignment={object.owner}
          orientation={object.orientation}
        />
      );
    }

    if (isTownMapObject(object)) {
      return (
        <TownMapObject
          town={object.town.id}
          isCastleBuilt={isStructureBuilt(object.town, StructureId.Castle)}
          alignment={object.owner}
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

    if (isTreasureMapObject(object)) {
      // TODO: handle multiple resources
      const resource = Object.keys(object.treasure)[0];

      return (
        <ResourceMapObject
          resource={resource}
        />
      );
    }

    if (isResourceGeneratorMapObjectData(objectData) && isOwnableMapObject(object)) {
      return (
        <MineMapObject
          resource={objectData.mine.resource}
          alignment={object.owner}
        />
      );
    }

    return (
      <MapObj
        type={object.id}
      />
    );
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
    const { alignment, selectedLocator } = this.props;

    const activeHero = selectedLocator !== undefined && selectedLocator.type === LocatorType.Hero ?
      this.props.heroes[selectedLocator.index] :
      undefined;

    const activeTown = selectedLocator !== undefined && selectedLocator.type === LocatorType.Town ?
      this.props.towns[selectedLocator.index] :
      undefined;

    const tile = this.props.map.tiles[index];

    const object = tile.object;

    if (object) {
      const objectData = this.props.mapObjects[object.id];

      // FIXME: extract
      if (isHeroMapObject(object)) {
        const heroIndex = this.props.heroes.indexOf(object.hero);

        if (!activeHero) {
          this.props.dispatch(locatorsActions.selectLocator({ type: LocatorType.Hero, index: heroIndex }));
        } else if (activeHero && object.hero !== activeHero) {
          this.props.dispatch(adventureScreenActions.openHeroTradingWindow(activeHero.id, object.hero.id));
        } else {
          this.props.dispatch(locatorsActions.openLocatorDetails());
        }
      } else if (isTownMapObject(object)) {
        const townIndex = this.props.towns.indexOf(object.town);

        if (activeHero || object.town !== activeTown) {
          this.props.dispatch(locatorsActions.selectLocator({ type: LocatorType.Town, index: townIndex }));
        } else {
          this.props.dispatch(locatorsActions.openLocatorDetails());
        }
      } else if (isDwellingMapObject(object)) {
        if (!activeHero) {
          return;
        }

        this.props.dispatch(adventureScreenActions.openMapObjectDetails(object.id));
      } else if (isTreasureMapObject(object)) {
        if (!activeHero) {
          return;
        }

        this.props.dispatch(gameActions.visitMapObject(object.id, activeHero.id));
      } else if (isResourceGeneratorMapObjectData(objectData) && isOwnableMapObject(object)) {
        if (!activeHero || isObjectOwnedBy(object, alignment)) {
          return;
        }

        this.props.dispatch(adventureScreenActions.openMapObjectDetails(object.id));
      } else {
        if (!activeHero) {
          return;
        }

        this.props.dispatch(adventureScreenActions.openMapObjectDetails(object.id));
      }
    }
  }

  private renderMapObjectDetails(id: string) {
    const { alignment, selectedLocator, heroes } = this.props;

    const activeHero = selectedLocator !== undefined && selectedLocator.type === LocatorType.Hero ?
      heroes[selectedLocator.index] :
      undefined;

    const mapObject: MapObject =
      this.props.map.tiles.find((t) => t.object !== undefined && (t.object as any).id === id)!.object!;

    const objectData = this.props.mapObjects[mapObject.id];

    if (activeHero && isLimitedInteractionMapObjectData(objectData) && isLimitedInteractionMapObject(mapObject)) {
      const visitor = getVisitor(objectData, alignment, activeHero.id);

      if (mapObject.id === MapObjectId.Obelisk) {
        if (wasVisitedBy(mapObject, visitor)) {
          return (
            <ObeliskAlreadyVisitedPrompt
              visible={true}
              onConfirmClick={this.onCloseMapObjectDetailsClick}
            />
          );
        }

        return (
          <VisitObeliskPrompt
            visible={true}
            onConfirmClick={this.onConfirmMapObjectDetailsClick}
          />
        );
      }
    }

    if (isResourceGeneratorMapObjectData(objectData)) {
      return (
        <VisitMinePrompt
          visible={true}
          resource={objectData.mine.resource}
          mine={objectData.id}
          amount={objectData.mine.amount}
          onConfirmClick={this.onConfirmMapObjectDetailsClick}
        />
      );
    }

    if (isDwellingMapObjectData(objectData) && isDwellingMapObject(mapObject)) {
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
            onConfirmClick={this.onConfirmMapObjectDetailsClick}
            onCancelClick={this.onCloseMapObjectDetailsClick}
          />
        );
      }
    }
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
