import * as React from "react";

import { SpellType } from "heroes-homm1";

import "./SpellBookWindow.scss";

import { withGameWindow } from "../core";
import { AdventureSpellsImage, CombatSpellsImage, ExitImage, NextPageImage, PreviousPageImage } from "./assets";
import { SpellBox } from "./SpellBox";

const SpellsPerPage = 4;

interface Spell {
  id: string;
  type: SpellType;
  charges: number;
}

export interface SpellBookWindowProps {
  spells: Spell[];
  spellType: SpellType;
  onSpellTypeMouseEnter: (value: SpellType) => void;
  onSpellTypeMouseLeave: (value: SpellType) => void;
  onSpellTypeChange: (value: SpellType) => void;
  page: number;
  onPreviousPageMouseEnter: () => void;
  onPreviousPageMouseLeave: () => void;
  onNextPageMouseEnter: () => void;
  onNextPageMouseLeave: () => void;
  onPageChange: (value: number) => void;
  onSpellClick: (value: string) => void;
  onExitMouseEnter: () => void;
  onExitMouseLeave: () => void;
  onExitClick: () => void;
}

type DefaultProp =
  "onSpellTypeMouseEnter" |
  "onSpellTypeMouseLeave" |
  "onSpellTypeChange" |
  "onPreviousPageMouseEnter" |
  "onPreviousPageMouseLeave" |
  "onNextPageMouseEnter" |
  "onNextPageMouseLeave" |
  "onPageChange" |
  "onSpellClick" |
  "onExitMouseEnter" |
  "onExitMouseLeave" |
  "onExitClick";

class SpellBookWindow extends React.Component<SpellBookWindowProps> {
  public static defaultProps: Pick<SpellBookWindowProps, DefaultProp> = {
    onExitClick: () => undefined,
    onExitMouseEnter: () => undefined,
    onExitMouseLeave: () => undefined,
    onNextPageMouseEnter: () => undefined,
    onNextPageMouseLeave: () => undefined,
    onPageChange: () => undefined,
    onPreviousPageMouseEnter: () => undefined,
    onPreviousPageMouseLeave: () => undefined,
    onSpellClick: () => undefined,
    onSpellTypeChange: () => undefined,
    onSpellTypeMouseEnter: () => undefined,
    onSpellTypeMouseLeave: () => undefined,
  };

  public render() {
    return (
      <div className="spell-book-window">
        {this.renderSpells(this.props.spells, this.props.spellType)}
        <img
          className="spell-book-window-previous-page"
          src={PreviousPageImage}
          onMouseEnter={this.props.onPreviousPageMouseEnter}
          onMouseLeave={this.props.onPreviousPageMouseLeave}
          onClick={this.onPreviousPageClick}
        />
        <img
          className="spell-book-window-next-page"
          src={NextPageImage}
          onMouseEnter={this.props.onNextPageMouseEnter}
          onMouseLeave={this.props.onNextPageMouseLeave}
          onClick={this.onNextPageClick}
        />
        <img
          className="spell-book-window-combat-spells"
          src={CombatSpellsImage}
          onMouseEnter={this.onCombatSpellsMouseEnter}
          onMouseLeave={this.onCombatSpellsMouseLeave}
          onClick={this.onCombatSpellsClick}
        />
        <img
          className="spell-book-window-adventure-spells"
          src={AdventureSpellsImage}
          onMouseEnter={this.onAdventureSpellsMouseEnter}
          onMouseLeave={this.onAdventureSpellsMouseLeave}
          onClick={this.onAdventureSpellsClick}
        />
        <img
          className="spell-book-window-exit"
          src={ExitImage}
          onMouseEnter={this.props.onExitMouseEnter}
          onMouseLeave={this.props.onExitMouseLeave}
          onClick={this.props.onExitClick}
        />
      </div>
    );
  }

  private renderSpells(spells: Spell[], spellType: SpellType) {
    const firstSpellIndex = this.props.page * SpellsPerPage;
    const lastSpellIndex = (this.props.page + 1) * SpellsPerPage - 1;

    const visibleSpells = spells
      .filter((s) => s.type === spellType)
      .filter((_, i) => i >= firstSpellIndex && i <= lastSpellIndex);

    return (
      <div>
        {visibleSpells.map(this.renderSpell)}
      </div>
    );
  }

  private renderSpell = (spell: Spell, index: number) => {
    return (
      <div
        key={spell.id}
        className={`spell-book-window-spell spell-book-window-spell-${index}`}
      >
        <SpellBox
          spell={spell.id}
          charges={spell.charges}
          onClick={this.props.onSpellClick}
        />
      </div>
    );
  }

  private onCombatSpellsMouseEnter = () => {
    this.props.onSpellTypeMouseEnter(SpellType.Combat);
  }

  private onCombatSpellsMouseLeave = () => {
    this.props.onSpellTypeMouseLeave(SpellType.Combat);
  }

  private onCombatSpellsClick = () => {
    this.props.onSpellTypeChange(SpellType.Combat);
  }

  private onAdventureSpellsMouseEnter = () => {
    this.props.onSpellTypeMouseEnter(SpellType.Adventure);
  }

  private onAdventureSpellsMouseLeave = () => {
    this.props.onSpellTypeMouseLeave(SpellType.Adventure);
  }

  private onAdventureSpellsClick = () => {
    this.props.onSpellTypeChange(SpellType.Adventure);
  }

  private onPreviousPageClick = () => {
    const firstPage = this.getFirstPage();

    const value = this.props.page > firstPage ?
      this.props.page - 1 :
      firstPage;

    this.props.onPageChange(value);
  }

  private onNextPageClick = () => {
    const lastPage = this.getLastPage();

    const value = this.props.page < lastPage ?
      this.props.page + 1 :
      lastPage;

    this.props.onPageChange(value);
  }

  private getFirstPage() {
    return 0;
  }

  private getLastPage() {
    const spells = this.props.spells.filter((s) => s.type === this.props.spellType);

    const value = Math.floor(spells.length / SpellsPerPage);

    return value;
  }
}

const SpellBookWindowWrapped = withGameWindow()<typeof SpellBookWindow, SpellBookWindowProps>(SpellBookWindow);

export { SpellBookWindowWrapped as SpellBookWindow };
