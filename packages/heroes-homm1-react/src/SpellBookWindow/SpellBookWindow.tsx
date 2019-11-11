import React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { noop } from "heroes-helpers";
import { SpellType } from "heroes-homm1";

import * as styles from "./SpellBookWindow.module.scss";

import { AdventureSpellsImage, CombatSpellsImage, ExitImage, NextPageImage, PreviousPageImage } from "./assets";

import { GameModal, SpellIcon } from "../base";
import { GameParagraph, withGameWindow, WithGameWindowProps } from "../core";
import { getSpellDescriptionMessage, getSpellLongNameMessage, getSpellNameMessage } from "../messages";
import { getSpellTypeStatusTextMessage, messages } from "./messages";
import { SpellBox } from "./SpellBox";

const SpellsPerPage = 4;

interface Spell {
  readonly id: string;
  readonly type: SpellType;
  readonly charges: number;
}

interface SpellBookWindowProps extends InjectedIntlProps, WithGameWindowProps {
  readonly spells: Spell[];
  readonly spellType: SpellType;
  readonly onSpellTypeChange: (value: SpellType) => void;
  readonly page: number;
  readonly onPageChange: (value: number) => void;
  readonly onSpellClick: (value: string) => void;
  readonly visibleSpellDetails?: string;
  readonly onCloseSpellDetailsClick: () => void;
  readonly onStatusTextChange: (statusText: string) => void;
  readonly onExitClick: () => void;
}

type DefaultProp =
  "onSpellTypeChange" |
  "onPageChange" |
  "onSpellClick" |
  "onCloseSpellDetailsClick" |
  "onStatusTextChange" |
  "onExitClick";

class SpellBookWindow extends React.Component<SpellBookWindowProps> {
  public static readonly defaultProps: Pick<SpellBookWindowProps, DefaultProp> = {
    onCloseSpellDetailsClick: noop,
    onExitClick: noop,
    onPageChange: noop,
    onSpellClick: noop,
    onSpellTypeChange: noop,
    onStatusTextChange: noop,
  };

  public componentDidMount() {
    this.setDefaultStatusText();
  }

  public render() {
    return (
      <div className={styles.root}>
        {this.renderSpells(this.props.spells, this.props.spellType)}
        {this.props.visibleSpellDetails && this.renderSpellDetails(this.props.visibleSpellDetails)}
        <img
          className={styles.previousPage}
          src={PreviousPageImage}
          onMouseEnter={this.onPreviousPageMouseEnter}
          onMouseLeave={this.onPreviousPageMouseLeave}
          onClick={this.onPreviousPageClick}
        />
        <img
          className={styles.nextPage}
          src={NextPageImage}
          onMouseEnter={this.onNextPageMouseEnter}
          onMouseLeave={this.onNextPageMouseLeave}
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
          onMouseEnter={this.onExitMouseEnter}
          onMouseLeave={this.onExitMouseLeave}
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
    this.onSpellTypeMouseEnter(SpellType.Combat);
  }

  private readonly onCombatSpellsMouseLeave = () => {
    this.onSpellTypeMouseLeave();
  }

  private readonly onCombatSpellsClick = () => {
    if (this.props.spellType !== SpellType.Combat) {
      this.props.onSpellTypeChange(SpellType.Combat);
    }
  }

  private readonly onAdventureSpellsMouseEnter = () => {
    this.onSpellTypeMouseEnter(SpellType.Adventure);
  }

  private readonly onAdventureSpellsMouseLeave = () => {
    this.onSpellTypeMouseLeave();
  }

  private readonly onAdventureSpellsClick = () => {
    if (this.props.spellType !== SpellType.Adventure) {
      this.props.onSpellTypeChange(SpellType.Adventure);
    }
  }

  private readonly onSpellTypeMouseEnter = (value: SpellType) => {
    const statusText = this.props.intl.formatMessage(getSpellTypeStatusTextMessage(value));

    this.setStatusText(statusText);
  }

  private readonly onSpellTypeMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private readonly onPreviousPageMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(messages.previousPageStatusText);

    this.setStatusText(statusText);
  }

  private readonly onPreviousPageMouseLeave = () => {
    this.setDefaultStatusText();
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

  private readonly onNextPageMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(messages.nextPageStatusText);

    this.setStatusText(statusText);
  }

  private readonly onNextPageMouseLeave = () => {
    this.setDefaultStatusText();
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

    return Math.floor((spells.length - 1) / SpellsPerPage);
  }

  private readonly onExitMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(messages.exitStatusText);

    this.setStatusText(statusText);
  }

  private readonly onExitMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private setDefaultStatusText() {
    const statusText = this.props.intl.formatMessage(messages.defaultStatusText);

    this.setStatusText(statusText);
  }

  private setStatusText(statusText: string) {
    this.props.onStatusTextChange(statusText);
  }
}

const ComponentWrapped = injectIntl(
  withGameWindow(324)(SpellBookWindow),
);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as SpellBookWindow,
  ComponentWrappedProps as SpellBookWindowProps,
};
