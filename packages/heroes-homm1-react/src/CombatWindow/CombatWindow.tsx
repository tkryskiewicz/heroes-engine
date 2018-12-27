import * as React from "react";

import { GameWindow } from "../core";
import { CombatBar } from "./CombatBar";

import "./CombatWindow.scss";

import { terrainBackgrounds } from "./assets";
import { Tent } from "./Tent";

interface Terrain {
  type: "graveyard" | string;
  woody?: boolean;
}

export interface CombatWindowProps {
  attacker: {
    alignment: string;
    heroClass: string;
  };
  terrain: Terrain;
  visible?: boolean;
}

export class CombatWindow extends React.Component<CombatWindowProps> {
  public render() {
    const { attacker, terrain } = this.props;

    return (
      <GameWindow
        width={640}
        visible={this.props.visible}
      >
        <div className="combat-window">
          {this.renderBackground(terrain)}
          <div className="combat-window-attacker-tent">
            <Tent
              alignment={attacker.alignment}
              heroClass={attacker.heroClass}
            />
          </div>
          <div className="combat-window-bar">
            <CombatBar />
          </div>
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
}
