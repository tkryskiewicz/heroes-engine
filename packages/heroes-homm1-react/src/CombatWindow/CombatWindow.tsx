import * as React from "react";

import { CombatSide, HeroSkills } from "heroes-core";
import { BattlefieldHeigth, BattlefieldWidth } from "heroes-homm1";

import "./CombatWindow.scss";

import { GameWindow } from "../core";
import { HeroCombatOptions } from "../HeroCombatOptions";
import { terrainBackgrounds } from "./assets";
import { CombatBar } from "./CombatBar";
import { Tent } from "./Tent";

interface Hero {
  id: string;
  alignment: string;
  heroClass: string;
  skills: HeroSkills;
  morale: number;
  luck: number;
}

interface BattleSide {
  hero: Hero;
}

interface Terrain {
  type: "graveyard" | string;
  woody?: boolean;
}

export interface CombatWindowProps {
  attacker: BattleSide;
  defender: BattleSide;
  terrain: Terrain;
  visible?: boolean;
  visibleHeroCombatOptions?: CombatSide;
  onVisibleHeroCombatOptionsChange: (value?: CombatSide) => void;
}

type DefaultProp =
  "onVisibleHeroCombatOptionsChange";

export class CombatWindow extends React.Component<CombatWindowProps> {
  public static defaultProps: Pick<CombatWindowProps, DefaultProp> = {
    onVisibleHeroCombatOptionsChange: () => undefined,
  };

  public render() {
    const { attacker, defender, terrain, visibleHeroCombatOptions } = this.props;

    return (
      <GameWindow
        width={640}
        visible={this.props.visible}
      >
        <div className="combat-window">
          {this.renderBackground(terrain)}
          {this.renderBattlefield(terrain)}
          {this.renderTent(CombatSide.Attacker, attacker.hero)}
          {this.renderTent(CombatSide.Defender, defender.hero)}
          <div className="combat-window-bar">
            <CombatBar />
          </div>
          {visibleHeroCombatOptions && this.renderHeroCombatOptions(visibleHeroCombatOptions)}
        </div>
      </GameWindow>
    );
  }

  private renderBackground(terrain: Terrain) {
    const imageUrl = terrainBackgrounds[terrain.type] ?
      terrainBackgrounds[terrain.type] :
      `/assets/terrains/${terrain.type}/combat-background${terrain.woody ? "-woody" : ""}.jpg`;

    return (
      <img
        className="combat-window-background"
        src={imageUrl}
      />
    );
  }

  private renderBattlefield(terrain: Terrain) {
    const content = new Array(BattlefieldHeigth).fill(undefined).map((_row, rowIndex) => {
      const rowContent = new Array(BattlefieldWidth).fill(undefined).map((_cell, cellIndex) => (
        <div
          className="combat-window-battlefield-cell"
          key={cellIndex}
        >
          <img src={`assets/terrains/${terrain.type}/cell-1.png`} />
        </div>
      ));

      const evenRow = rowIndex % 2 === 0;

      return (
        <div
          className="combat-window-battlefield-row"
          key={rowIndex}
        >
          <div className="combat-window-battlefield-cell">
            <img src={`assets/terrains/${terrain.type}/cell-right-${evenRow ? 2 : 1}.png`} />
          </div>
          {rowContent}
          <div className="combat-window-battlefield-cell">
            <img src={`assets/terrains/${terrain.type}/cell-left-${evenRow ? 1 : 2}.png`} />
          </div>
        </div>
      );
    });

    return (
      <div className="combat-window-battlefield">
        {content}
      </div>
    );
  }

  private renderTent(side: CombatSide, hero: Hero) {
    return (
      <div className={`combat-window-tent-${side}`}>
        <Tent
          side={side}
          alignment={hero.alignment}
          heroClass={hero.heroClass}
          onClick={this.onTentClick}
        />
      </div>
    );
  }

  private onTentClick = (side: CombatSide) => {
    this.props.onVisibleHeroCombatOptionsChange(side);
  }

  private renderHeroCombatOptions(side: CombatSide) {
    const hero = side === CombatSide.Attacker ?
      this.props.attacker.hero :
      this.props.defender.hero;

    return (
      <HeroCombatOptions
        hero={hero}
        canCastSpell={true}
        canSurrender={true}
        visible={true}
        onExitClick={this.onCloseHeroCombatOptionsClick}
      />
    );
  }

  private onCloseHeroCombatOptionsClick = () => {
    this.props.onVisibleHeroCombatOptionsChange();
  }
}
