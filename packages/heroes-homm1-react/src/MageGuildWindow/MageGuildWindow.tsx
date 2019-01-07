import * as React from "react";

import { StructureId } from "heroes-homm1";

import "./MageGuildWindow.scss";

import { withGameWindow } from "../core";
import { StructureView } from "../TownView/StructureView"; // FIXME
import { SpellScroll } from "./SpellScroll";

interface Spell {
  id: string;
  level: number;
}

export interface MageGuildWindowProps {
  spells: Spell[];
  levelBuilt: number;
  onSpellClick: (value: string) => void;
}

class MageGuildWindow extends React.Component<MageGuildWindowProps> {
  public static defaultProps: Pick<MageGuildWindowProps, "onSpellClick"> = {
    onSpellClick: () => undefined,
  };

  public render() {
    const spells = [...this.props.spells]
      .sort((a, b) => b.level - a.level);

    return (
      <div className="mage-guild-window">
        <div className="mage-guild-window-structure">
          <StructureView
            structure={StructureId.MageGuild}
            town={""}
          />
        </div>
        <div className="mage-guild-window-spells">
          {spells.map((s) => this.renderSpell(s))}
        </div>
      </div>
    );
  }

  private renderSpell(spell: Spell) {
    return (
      <div
        key={spell.id}
        className="mage-guild-window-spell-scroll"
      >
        <SpellScroll
          spell={spell.id}
          unfolded={spell.level <= this.props.levelBuilt}
          onClick={this.onSpellClick}
        />
      </div>
    );
  }

  private onSpellClick = (value: string) => {
    const spell = this.props.spells.find((s) => s.id === value);

    if (spell && spell.level <= this.props.levelBuilt) {
      this.props.onSpellClick(value);
    }
  }
}

const MageGuildWindowWrapped = withGameWindow(640)<typeof MageGuildWindow, MageGuildWindowProps>(MageGuildWindow);

export { MageGuildWindowWrapped as MageGuildWindow };
