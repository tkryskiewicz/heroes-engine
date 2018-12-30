import * as React from "react";

import "./SpellBookWindow.scss";

import { GameWindow } from "../core";
import { AdventureSpellsImage, CombatSpellsImage, ExitImage } from "./assets";

export interface SpellBookWindowProps {
  visible?: boolean;
  onCombatSpellsClick: () => void;
  onAdventureSpellsClick: () => void;
  onExitClick: () => void;
}

type DefaultProp =
  "onCombatSpellsClick" |
  "onAdventureSpellsClick" |
  "onExitClick";

export class SpellBookWindow extends React.Component<SpellBookWindowProps> {
  public static defaultProps: Pick<SpellBookWindowProps, DefaultProp> = {
    onAdventureSpellsClick: () => undefined,
    onCombatSpellsClick: () => undefined,
    onExitClick: () => undefined,
  };

  public render() {
    return (
      <GameWindow
        visible={this.props.visible}
      >
        <div className="spell-book-window">
          <img
            className="spell-book-window-combat-spells"
            src={CombatSpellsImage}
            onClick={this.props.onCombatSpellsClick}
          />
          <img
            className="spell-book-window-adventure-spells"
            src={AdventureSpellsImage}
            onClick={this.props.onAdventureSpellsClick}
          />
          <img
            className="spell-book-window-exit"
            src={ExitImage}
            onClick={this.props.onExitClick}
          />
        </div>
      </GameWindow>
    );
  }
}
