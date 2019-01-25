import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { StructureId } from "heroes-homm1";

import * as styles from "./MageGuildWindow.module.scss";

import { GameModal, SpellIcon } from "../base";
import { GameParagraph } from "../core";
import { getSpellDescriptionMessage, getSpellLongNameMessage, getSpellNameMessage } from "../messages";
import { StructureView } from "../StructureView";
import {
  withTownDetailWindow,
  WithTownDetailWindowInjectedProps,
  WithTownDetailWindowProps,
} from "../TownDetailWindow";
import { messages } from "./messages";
import { SpellScroll } from "./SpellScroll";

interface Spell {
  readonly id: string;
  readonly level: number;
}

export interface MageGuildWindowProps extends
  InjectedIntlProps,
  WithTownDetailWindowInjectedProps,
  WithTownDetailWindowProps {
  readonly spells: Spell[];
  readonly levelBuilt: number;
  readonly visibleSpellDetail?: string;
  readonly onVisibleSpellDetailChange: (spell?: string) => void;
}

class MageGuildWindow extends React.Component<MageGuildWindowProps> {
  public static readonly defaultProps: Pick<MageGuildWindowProps, "onVisibleSpellDetailChange"> = {
    onVisibleSpellDetailChange: () => undefined,
  };

  public componentDidMount() {
    const statusText = this.props.intl.formatMessage(messages.defaultStatusText);

    this.props.onStatusTextChange(statusText);
  }

  public render() {
    const spells = [...this.props.spells]
      .sort((a, b) => b.level - a.level);

    return (
      <div className={styles.root}>
        <div className={styles.structure}>
          <StructureView
            structure={StructureId.MageGuild}
            town={""}
          />
        </div>
        <div className={styles.spells}>
          {spells.map((s) => this.renderSpell(s))}
        </div>
        {this.props.visibleSpellDetail && this.renderSpellDetail(this.props.visibleSpellDetail)}
      </div>
    );
  }

  private renderSpell(spell: Spell) {
    return (
      <div
        key={spell.id}
        className={styles.spellScroll}
      >
        <SpellScroll
          spell={spell.id}
          unfolded={spell.level <= this.props.levelBuilt}
          onClick={this.onSpellClick}
        />
      </div>
    );
  }

  private readonly onSpellClick = (value: string) => {
    const spell = this.props.spells.find((s) => s.id === value);

    if (spell && spell.level <= this.props.levelBuilt) {
      this.props.onVisibleSpellDetailChange(value);
    }
  }

  private renderSpellDetail(spell: string) {
    return (
      <GameModal
        type="okay"
        size={3}
        onConfirmClick={this.onCloseSpellDetailClick}
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

  private readonly onCloseSpellDetailClick = () => {
    this.props.onVisibleSpellDetailChange();
  }
}

const MageGuildWindowWrapped = injectIntl(
  withTownDetailWindow()(MageGuildWindow),
);

export {
  MageGuildWindowWrapped as MageGuildWindow,
};
