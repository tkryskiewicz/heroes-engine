import * as React from "react";

import { SpellType } from "heroes-homm1";

import "./SpellBookWindow.scss";

import { withGameWindow } from "../core";
import { AdventureSpellsImage, CombatSpellsImage, ExitImage } from "./assets";

export interface SpellBookWindowProps {
  spellType: SpellType;
  onSpellTypeChange: (value: SpellType) => void;
  onExitClick: () => void;
}

type DefaultProp =
  "onSpellTypeChange" |
  "onExitClick";

class SpellBookWindow extends React.Component<SpellBookWindowProps> {
  public static defaultProps: Pick<SpellBookWindowProps, DefaultProp> = {
    onExitClick: () => undefined,
    onSpellTypeChange: () => undefined,
  };

  public render() {
    return (
      <div className="spell-book-window">
        <img
          className="spell-book-window-combat-spells"
          src={CombatSpellsImage}
          onClick={this.onCombatSpellsClick}
        />
        <img
          className="spell-book-window-adventure-spells"
          src={AdventureSpellsImage}
          onClick={this.onAdventureSpellsClick}
        />
        <img
          className="spell-book-window-exit"
          src={ExitImage}
          onClick={this.props.onExitClick}
        />
      </div>
    );
  }

  private onCombatSpellsClick = () => {
    this.props.onSpellTypeChange(SpellType.Combat);
  }

  private onAdventureSpellsClick = () => {
    this.props.onSpellTypeChange(SpellType.Adventure);
  }
}

const SpellBookWindowWrapped = withGameWindow()<typeof SpellBookWindow, SpellBookWindowProps>(SpellBookWindow);

export {
  SpellBookWindowWrapped as SpellBookWindow,
};
