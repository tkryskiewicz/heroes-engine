import * as React from "react";
import { FormattedMessage } from "react-intl";

import { SpellType } from "heroes-homm1";

import "./SpellBookWindow.scss";

import { GameModal, SpellIcon } from "../base";
import { GameParagraph, withGameWindow } from "../core";
import { getSpellDescriptionMessage, getSpellLongNameMessage, getSpellNameMessage } from "../messages";
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
  visibleSpellDetails?: string;
  onCloseSpellDetailsClick: () => void;
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
  "onCloseSpellDetailsClick" |
  "onExitMouseEnter" |
  "onExitMouseLeave" |
  "onExitClick";

class SpellBookWindow extends React.Component<SpellBookWindowProps> {
  public static defaultProps: Pick<SpellBookWindowProps, DefaultProp> = {
    onCloseSpellDetailsClick: () => undefined,
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
        {this.props.visibleSpellDetails && this.renderSpellDetails(this.props.visibleSpellDetails)}
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

  private renderSpellDetails(spell: string) {
    return (
      <GameModal
        type="okay"
        size={3}
        onConfirmClick={this.props.onCloseSpellDetailsClick}
        visible={true}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...getSpellLongNameMessage(spell)} />
        </GameParagraph>
        <GameParagraph textSize="large">
          <FormattedMessage {...getSpellDescriptionMessage(spell)} />
        </GameParagraph>
        <SpellIcon
          spell={spell}
        />
        <GameParagraph textSize="normal">
          <FormattedMessage {...getSpellNameMessage(spell)} />
        </GameParagraph>
      </GameModal>
    );
  }

  private onCombatSpellsMouseEnter = () => {
    this.props.onSpellTypeMouseEnter(SpellType.Combat);
  }

  private onCombatSpellsMouseLeave = () => {
    this.props.onSpellTypeMouseLeave(SpellType.Combat);
  }

  private onCombatSpellsClick = () => {
    if (this.props.spellType !== SpellType.Combat) {
      this.props.onSpellTypeChange(SpellType.Combat);
    }
  }

  private onAdventureSpellsMouseEnter = () => {
    this.props.onSpellTypeMouseEnter(SpellType.Adventure);
  }

  private onAdventureSpellsMouseLeave = () => {
    this.props.onSpellTypeMouseLeave(SpellType.Adventure);
  }

  private onAdventureSpellsClick = () => {
    if (this.props.spellType !== SpellType.Adventure) {
      this.props.onSpellTypeChange(SpellType.Adventure);
    }
  }

  private onPreviousPageClick = () => {
    const firstPage = this.getFirstPage();

    const value = this.props.page > firstPage ?
      this.props.page - 1 :
      firstPage;

    if (value !== this.props.page) {
      this.props.onPageChange(value);
    }
  }

  private onNextPageClick = () => {
    const lastPage = this.getLastPage();

    const value = this.props.page < lastPage ?
      this.props.page + 1 :
      lastPage;

    if (value !== this.props.page) {
      this.props.onPageChange(value);
    }
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

const SpellBookWindowWrapped = withGameWindow(324)(SpellBookWindow);

export {
  SpellBookWindowWrapped as SpellBookWindow,
};
