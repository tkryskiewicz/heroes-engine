import React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";

import { Battlefield, CombatSide, HeroSkills } from "heroes-core";
import { getLuckType, getMoraleType } from "heroes-homm1";

import * as styles from "./CombatWindow.module.scss";

import { terrainBackgrounds } from "./assets";

import { ScreenWidth, withGameWindow } from "../../core";
import { CombatTent } from "../CombatTent";
import { HeroCombatOptions, heroCombatOptionsMessages } from "../HeroCombatOptions";
import { CombatBar } from "./CombatBar";
import { CombatCell } from "./CombatCell";
import { messages } from "./messages";

interface Hero {
  readonly id: string;
  readonly alignment: string;
  readonly heroClass: string;
  readonly skills: HeroSkills;
  readonly morale: number;
  readonly luck: number;
}

interface BattleSide {
  readonly hero: Hero;
}

interface CombatWindowProps extends InjectedIntlProps {
  readonly attacker: BattleSide;
  readonly defender: BattleSide;
  readonly battlefield: Battlefield;
  readonly visible?: boolean;
  readonly visibleHeroCombatOptions?: CombatSide;
  readonly onVisibleHeroCombatOptionsChange: (value?: CombatSide) => void;
}

interface CombatWindowState {
  readonly statusText: string;
}

type DefaultProp =
  "onVisibleHeroCombatOptionsChange";

class CombatWindow extends React.Component<CombatWindowProps, CombatWindowState> {
  public static readonly defaultProps: Pick<CombatWindowProps, DefaultProp> = {
    onVisibleHeroCombatOptionsChange: () => undefined,
  };

  public readonly state: CombatWindowState = {
    statusText: "",
  };

  public componentDidMount() {
    this.setDefaultStatusText();
  }

  public render() {
    const { attacker, defender, battlefield, visibleHeroCombatOptions } = this.props;

    return (
      <div className={styles.root}>
        {this.renderBackground(battlefield.terrainType, battlefield.woodyTerrain)}
        {this.renderBattlefield(battlefield)}
        {this.renderTent(CombatSide.Attacker, attacker.hero)}
        {this.renderTent(CombatSide.Defender, defender.hero)}
        <div className={styles.bar}>
          <CombatBar
            statusText={this.state.statusText}
          />
        </div>
        {visibleHeroCombatOptions && this.renderHeroCombatOptions(visibleHeroCombatOptions)}
      </div>
    );
  }

  private renderBackground(terrainType: string, woodyTerrain?: boolean) {
    const imageUrl = terrainBackgrounds[terrainType] ?
      terrainBackgrounds[terrainType] :
      `/assets/terrains/${terrainType}/combat-background${woodyTerrain ? "-woody" : ""}.jpg`;

    return (
      <img
        className={styles.background}
        src={imageUrl}
      />
    );
  }

  private renderBattlefield(battlefield: Battlefield) {
    const content = new Array(battlefield.height).fill(undefined).map((_row, rowIndex) => {
      const rowContent = new Array(battlefield.width).fill(undefined).map((_column, columnIndex) => {
        const cellIndex = rowIndex * battlefield.width + columnIndex;

        const cell = battlefield.cells[cellIndex];

        return (
          <div
            className={styles.battlefieldCell}
            key={cellIndex}
          >
            <CombatCell
              index={cellIndex}
              terrainType={battlefield.terrainType}
              terrainVariant={cell.terrainVariant}
              object={cell.object}
            />
          </div>
        );
      });

      const evenRow = rowIndex % 2 === 0;

      return (
        <div
          className={styles.battlefieldRow}
          key={rowIndex}
        >
          <div className={styles.battlefieldCell}>
            <img src={`assets/terrains/${battlefield.terrainType}/cell-right-${evenRow ? 2 : 1}.png`} />
          </div>
          {rowContent}
          <div className={styles.battlefieldCell}>
            <img src={`assets/terrains/${battlefield.terrainType}/cell-left-${evenRow ? 1 : 2}.png`} />
          </div>
        </div>
      );
    });

    return (
      <div className={styles.battlefield}>
        {content}
      </div>
    );
  }

  private renderTent(side: CombatSide, hero: Hero) {
    return (
      <div className={side === CombatSide.Attacker ? styles.tentAttacker : styles.tentDefender}>
        <CombatTent
          side={side}
          alignment={hero.alignment}
          heroClass={hero.heroClass}
          onMouseEnter={this.onTentMouseEnter}
          onMouseLeave={this.onTentMouseLeave}
          onClick={this.onTentClick}
        />
      </div>
    );
  }

  private readonly onTentMouseEnter = (side: CombatSide) => {
    const statusText = this.props.intl.formatMessage(side === CombatSide.Attacker ?
      messages.generalsOptions :
      messages.opposingGeneralsOptions,
    );

    this.setStatusText(statusText);
  }

  private readonly onTentMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private readonly onTentClick = (side: CombatSide) => {
    this.props.onVisibleHeroCombatOptionsChange(side);
  }

  private renderHeroCombatOptions(side: CombatSide) {
    const hero = side === CombatSide.Attacker ?
      this.props.attacker.hero :
      this.props.defender.hero;

    return (
      <HeroCombatOptions
        // FIXME
        hero={{ ...hero, morale: getMoraleType(hero.morale), luck: getLuckType(hero.luck) }}
        canCastSpell={side === CombatSide.Attacker}
        onCastSpellMouseEnter={this.onCastSpellMouseEnter}
        onCastSpellMouseLeave={this.onCastSpellMouseLeave}
        canRetreat={side === CombatSide.Attacker}
        onRetreatMouseEnter={this.onRetreatMouseEnter}
        onRetreatMouseLeave={this.onRetreatMouseLeave}
        canSurrender={side === CombatSide.Attacker}
        onSurrenderMouseEnter={this.onSurrenderMouseEnter}
        onSurrenderMouseLeave={this.onSurrenderMouseLeave}
        visible={true}
        onCancelMouseEnter={this.onCloseHeroCombatOptionsMouseEnter}
        onCancelMouseLeave={this.onCloseHeroCombatOptionsMouseLeave}
        onCancelClick={this.onCloseHeroCombatOptionsClick}
      />
    );
  }

  private readonly onCastSpellMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(heroCombatOptionsMessages.castSpellStatusText);

    this.setStatusText(statusText);
  }

  private readonly onCastSpellMouseLeave = () => {
    this.setDefaultHeroCombatOptionsStatusText();
  }

  private readonly onRetreatMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(heroCombatOptionsMessages.retreatStatusText);

    this.setStatusText(statusText);
  }

  private readonly onRetreatMouseLeave = () => {
    this.setDefaultHeroCombatOptionsStatusText();
  }

  private readonly onSurrenderMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(heroCombatOptionsMessages.surrenderStatusText);

    this.setStatusText(statusText);
  }

  private readonly onSurrenderMouseLeave = () => {
    this.setDefaultHeroCombatOptionsStatusText();
  }

  private readonly onCloseHeroCombatOptionsMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(heroCombatOptionsMessages.cancelStatusText);

    this.setStatusText(statusText);
  }

  private readonly onCloseHeroCombatOptionsMouseLeave = () => {
    this.setDefaultHeroCombatOptionsStatusText();
  }

  private readonly onCloseHeroCombatOptionsClick = () => {
    this.props.onVisibleHeroCombatOptionsChange();
  }

  private setDefaultHeroCombatOptionsStatusText() {
    const statusText = this.props.intl.formatMessage(heroCombatOptionsMessages.defaultStatusText);

    this.setStatusText(statusText);
  }

  private setStatusText(statusText: string) {
    this.setState({
      statusText,
    });
  }

  private setDefaultStatusText() {
    const statusText = this.props.intl.formatMessage(messages.defaultStatusText);

    this.setStatusText(statusText);
  }
}

const ComponentWrapped = injectIntl(
  withGameWindow(ScreenWidth)(CombatWindow),
);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as CombatWindow,
  ComponentWrappedProps as CombatWindowProps,
};
