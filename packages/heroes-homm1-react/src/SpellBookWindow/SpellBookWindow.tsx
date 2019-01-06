import * as React from "react";

import { SpellType } from "heroes-homm1";

import "./SpellBookWindow.scss";

import { withGameWindow } from "../core";
import { AdventureSpellsImage, CombatSpellsImage, ExitImage } from "./assets";
import { SpellBox } from "./SpellBox";

interface Spell {
  id: string;
  type: SpellType;
  charges: number;
}

export interface SpellBookWindowProps {
  spells: Spell[];
  spellType: SpellType;
  onSpellTypeChange: (value: SpellType) => void;
  onSpellClick: (value: string) => void;
  onExitClick: () => void;
}

type DefaultProp =
  "onSpellTypeChange" |
  "onSpellClick" |
  "onExitClick";

class SpellBookWindow extends React.Component<SpellBookWindowProps> {
  public static defaultProps: Pick<SpellBookWindowProps, DefaultProp> = {
    onExitClick: () => undefined,
    onSpellClick: () => undefined,
    onSpellTypeChange: () => undefined,
  };

  public render() {
    return (
      <div className="spell-book-window">
        {this.renderSpells(this.props.spells, this.props.spellType)}
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

  private renderSpells(spells: Spell[], spellType: SpellType) {
    const visibleSpells = spells.filter((s) => s.type === spellType);

    return (
      <div>
        {visibleSpells.map(this.renderSpell)}
      </div>
    );
  }

  private renderSpell = (spell: Spell, index: number) => {
    if (index >= 4) {
      return;
    }

    return (
      <div className={`spell-book-window-spell spell-book-window-spell-${index + 1}`}>
        <SpellBox
          spell={spell.id}
          charges={spell.charges}
          onClick={this.props.onSpellClick}
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
