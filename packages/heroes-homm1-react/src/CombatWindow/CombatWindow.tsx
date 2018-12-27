import * as React from "react";

import { CombatSide, HeroSkills } from "heroes-core";

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

interface Terrain {
  type: "graveyard" | string;
  woody?: boolean;
}

export interface CombatWindowProps {
  attacker: Hero;
  defender: Hero;
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
          <div className="combat-window-tent-attacker">
            <Tent
              side={CombatSide.Attacker}
              alignment={attacker.alignment}
              heroClass={attacker.heroClass}
            />
          </div>
          <div className="combat-window-tent-defender">
            <Tent
              side={CombatSide.Defender}
              alignment={defender.alignment}
              heroClass={defender.heroClass}
            />
          </div>
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
      <img src={imageUrl} />
    );
  }

  private renderHeroCombatOptions(side: CombatSide) {
    const hero = side === CombatSide.Attacker ?
      this.props.attacker :
      this.props.defender;

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
