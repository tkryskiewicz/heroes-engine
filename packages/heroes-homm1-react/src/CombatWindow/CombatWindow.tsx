import * as React from "react";

import { GameWindow } from "../core";
import { CombatBar } from "./CombatBar";

import "./CombatWindow.scss";

import { Tent } from "./Tent";

export interface CombatWindowProps {
  attacker: {
    alignment: string;
    heroClass: string;
  };
  visible?: boolean;
}

export class CombatWindow extends React.Component<CombatWindowProps> {
  public render() {
    const { attacker } = this.props;

    return (
      <GameWindow
        width={640}
        visible={this.props.visible}
      >
        <div className="combat-window">
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
}
