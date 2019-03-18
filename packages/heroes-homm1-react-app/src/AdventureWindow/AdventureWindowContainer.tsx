import * as React from "react";
import { DispatchProp } from "react-redux";

import {
  Hero,
  HeroMapObject as HeroObject,
  HeroMapObjectType,
  isStructureBuilt,
  Map,
  MapObject,
  Town,
  TownMapObject as TownObject,
  TownMapObjectType,
} from "heroes-core";
import { StructureId } from "heroes-homm1";
import { AdventureWindow, HeroMapObject, MapTile, TownMapObject } from "heroes-homm1-react";
import { adventureScreenActions, Locator, locatorsActions, LocatorType } from "heroes-homm1-state";

import { HeroTradingWindow } from "../HeroTradingWindow";

interface Props extends DispatchProp {
  readonly map: Map;
  readonly heroes: Hero[];
  readonly towns: Town[];
  readonly selectedLocator?: Locator;
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
    if (object.type === HeroMapObjectType) {
      const heroObject = object as HeroObject;

      const hero = heroObject.hero;

      return (
        <HeroMapObject
          heroClass={hero.heroClass}
          alignment={hero.alignment}
          orientation={heroObject.orientation}
        />
      );
    }

    if (object.type === TownMapObjectType) {
      const townObject = object as TownObject;

      const town = townObject.town;

      return (
        <TownMapObject
          town={town.id}
          isCastleBuilt={isStructureBuilt(town, StructureId.Castle)}
          alignment={town.alignment}
        />
      );
    }
  }

  private readonly onTileMouseEnter = (index: number) => {
    const tile = this.props.map.tiles[index];

    const object = tile.object;

    if (object) {
      const { selectedLocator } = this.props;

      if (object.type === HeroMapObjectType) {
        const heroObject = object as HeroObject;

        const heroIndex = this.props.heroes.indexOf(heroObject.hero);

        if (selectedLocator && selectedLocator.type === LocatorType.Hero && selectedLocator.index !== heroIndex) {
          this.setState({
            cursor: "trade",
          });
        } else {
          this.setState({
            cursor: "hero",
          });
        }
      } else if (object.type === TownMapObjectType) {
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
      if (object.type === HeroMapObjectType) {
        const heroObject = object as HeroObject;

        const heroIndex = this.props.heroes.indexOf(heroObject.hero);

        if (!selectedLocator) {
          this.props.dispatch(locatorsActions.selectLocator({ type: LocatorType.Hero, index: heroIndex }));
        } else if (selectedLocator.type === LocatorType.Hero && heroIndex !== selectedLocator.index) {
          const otherHero = this.props.heroes[selectedLocator.index];

          this.props.dispatch(adventureScreenActions.openHeroTradingWindow(heroObject.hero.id, otherHero.id));
        } else {
          this.props.dispatch(locatorsActions.openLocatorDetails());
        }
      } else if (object.type === TownMapObjectType) {
        const townObject = object as TownObject;

        const townIndex = this.props.towns.indexOf(townObject.town);

        if (!selectedLocator || selectedLocator.type === LocatorType.Hero || selectedLocator.index !== townIndex) {
          this.props.dispatch(locatorsActions.selectLocator({ type: LocatorType.Town, index: townIndex }));
        } else {
          this.props.dispatch(locatorsActions.openLocatorDetails());
        }
      }
    }
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
