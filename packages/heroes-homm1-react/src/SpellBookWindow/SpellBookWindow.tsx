import * as React from "react";
import { FormattedMessage } from "react-intl";

import { SpellType } from "heroes-homm1";

import * as styles from "./SpellBookWindow.module.scss";

import { GameModal, SpellIcon } from "../base";
import { GameParagraph, withGameWindow } from "../core";
import { getSpellDescriptionMessage, getSpellLongNameMessage, getSpellNameMessage } from "../messages";
import { AdventureSpellsImage, CombatSpellsImage, ExitImage, NextPageImage, PreviousPageImage } from "./assets";
import { SpellBox } from "./SpellBox";

const SpellsPerPage = 4;

interface Spell {
  readonly id: string;
  readonly type: SpellType;
  readonly charges: number;
}

export interface SpellBookWindowProps {
  readonly spells: Spell[];
  readonly spellType: SpellType;
  readonly onSpellTypeMouseEnter: (value: SpellType) => void;
  readonly onSpellTypeMouseLeave: (value: SpellType) => void;
  readonly onSpellTypeChange: (value: SpellType) => void;
  readonly page: number;
  readonly onPreviousPageMouseEnter: () => void;
  readonly onPreviousPageMouseLeave: () => void;
  readonly onNextPageMouseEnter: () => void;
  readonly onNextPageMouseLeave: () => void;
  readonly onPageChange: (value: number) => void;
  readonly onSpellClick: (value: string) => void;
  readonly visibleSpellDetails?: string;
  readonly onCloseSpellDetailsClick: () => void;
  readonly onExitMouseEnter: () => void;
  readonly onExitMouseLeave: () => void;
  readonly onExitClick: () => void;
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
  public static readonly defaultProps: Pick<SpellBookWindowProps, DefaultProp> = {
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
      <div className={styles.root}>
        {this.renderSpells(this.props.spells, this.props.spellType)}
        {this.props.visibleSpellDetails && this.renderSpellDetails(this.props.visibleSpellDetails)}
        <img
          className={styles.previousPage}
          src={PreviousPageImage}
          onMouseEnter={this.props.onPreviousPageMouseEnter}
          onMouseLeave={this.props.onPreviousPageMouseLeave}
          onClick={this.onPreviousPageClick}
        />
        <img
          className={styles.nextPage}
          src={NextPageImage}
          onMouseEnter={this.props.onNextPageMouseEnter}
          onMouseLeave={this.props.onNextPageMouseLeave}
          onClick={this.onNextPageClick}
        />
        <img
          className={styles.combatSpells}
          src={CombatSpellsImage}
          onMouseEnter={this.onCombatSpellsMouseEnter}
          onMouseLeave={this.onCombatSpellsMouseLeave}
          onClick={this.onCombatSpellsClick}
        />
        <img
          className={styles.adventureSpells}
          src={AdventureSpellsImage}
          onMouseEnter={this.onAdventureSpellsMouseEnter}
          onMouseLeave={this.onAdventureSpellsMouseLeave}
          onClick={this.onAdventureSpellsClick}
        />
        <img
          className={styles.exit}
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
        {visibleSpells.map((s, i) => this.renderSpell(s, i))}
      </div>
    );
  }

  private renderSpell(spell: Spell, index: number) {
    return (
      <div
        key={spell.id}
        className={`${styles.spell} ${styles["spell" + index]}`}
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

  private readonly onCombatSpellsMouseEnter = () => {
    this.props.onSpellTypeMouseEnter(SpellType.Combat);
  }

  private readonly onCombatSpellsMouseLeave = () => {
    this.props.onSpellTypeMouseLeave(SpellType.Combat);
  }

  private readonly onCombatSpellsClick = () => {
    if (this.props.spellType !== SpellType.Combat) {
      this.props.onSpellTypeChange(SpellType.Combat);
    }
  }

  private readonly onAdventureSpellsMouseEnter = () => {
    this.props.onSpellTypeMouseEnter(SpellType.Adventure);
  }

  private readonly onAdventureSpellsMouseLeave = () => {
    this.props.onSpellTypeMouseLeave(SpellType.Adventure);
  }

  private readonly onAdventureSpellsClick = () => {
    if (this.props.spellType !== SpellType.Adventure) {
      this.props.onSpellTypeChange(SpellType.Adventure);
    }
  }

  private readonly onPreviousPageClick = () => {
    const firstPage = this.getFirstPage();

    const value = this.props.page > firstPage ?
      this.props.page - 1 :
      firstPage;

    if (value !== this.props.page) {
      this.props.onPageChange(value);
    }
  }

  private readonly onNextPageClick = () => {
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
