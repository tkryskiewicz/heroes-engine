import * as React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";

import { Battlefield, CombatSide, HeroSkills } from "heroes-core";

import "./CombatWindow.scss";

import { withGameWindow } from "../core";
import { HeroCombatOptions } from "../HeroCombatOptions";
import { terrainBackgrounds } from "./assets";
import { CombatBar } from "./CombatBar";
import { CombatCell } from "./CombatCell";
import { messages } from "./messages";
import { Tent } from "./Tent";

interface Hero {
  id: string;
  alignment: string;
  heroClass: string;
  skills: HeroSkills;
  morale: number;
  luck: number;
}

interface BattleSide {
  hero: Hero;
}

export interface CombatWindowProps {
  attacker: BattleSide;
  defender: BattleSide;
  battlefield: Battlefield;
  visible?: boolean;
  visibleHeroCombatOptions?: CombatSide;
  onVisibleHeroCombatOptionsChange: (value?: CombatSide) => void;
}

interface CombatWindowState {
  statusText: string;
}

type DefaultProp =
  "onVisibleHeroCombatOptionsChange";

class CombatWindow extends React.Component<CombatWindowProps & InjectedIntlProps, CombatWindowState> {
  public static defaultProps: Pick<CombatWindowProps, DefaultProp> = {
    onVisibleHeroCombatOptionsChange: () => undefined,
  };

  public state: CombatWindowState = {
    statusText: "",
  };

  public componentDidMount() {
    this.setDefaultStatusText();
  }

  public render() {
    const { attacker, defender, battlefield, visibleHeroCombatOptions } = this.props;

    return (
      <div className="combat-window">
        {this.renderBackground(battlefield.terrainType, battlefield.woodyTerrain)}
        {this.renderBattlefield(battlefield)}
        {this.renderTent(CombatSide.Attacker, attacker.hero)}
        {this.renderTent(CombatSide.Defender, defender.hero)}
        <div className="combat-window-bar">
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
        className="combat-window-background"
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
            className="combat-window-battlefield-cell"
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
          className="combat-window-battlefield-row"
          key={rowIndex}
        >
          <div className="combat-window-battlefield-cell">
            <img src={`assets/terrains/${battlefield.terrainType}/cell-right-${evenRow ? 2 : 1}.png`} />
          </div>
          {rowContent}
          <div className="combat-window-battlefield-cell">
            <img src={`assets/terrains/${battlefield.terrainType}/cell-left-${evenRow ? 1 : 2}.png`} />
          </div>
        </div>
      );
    });

    return (
      <div className="combat-window-battlefield">
        {content}
      </div>
    );
  }

  private renderTent(side: CombatSide, hero: Hero) {
    return (
      <div className={`combat-window-tent-${side}`}>
        <Tent
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

  private onTentMouseEnter = (side: CombatSide) => {
    const statusText = this.props.intl.formatMessage(side === CombatSide.Attacker ?
      messages.generalsOptions :
      messages.opposingGeneralsOptions,
    );

    this.setStatusText(statusText);
  }

  private onTentMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private onTentClick = (side: CombatSide) => {
    this.props.onVisibleHeroCombatOptionsChange(side);
  }

  private renderHeroCombatOptions(side: CombatSide) {
    const hero = side === CombatSide.Attacker ?
      this.props.attacker.hero :
      this.props.defender.hero;

    return (
      <HeroCombatOptions
        hero={hero}
        canCastSpell={true}
        canSurrender={true}
        visible={true}
        onCancelClick={this.onCloseHeroCombatOptionsClick}
      />
    );
  }

  private onCloseHeroCombatOptionsClick = () => {
    this.props.onVisibleHeroCombatOptionsChange();
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

const CombatWindowWrapped = injectIntl(
  withGameWindow(640)(CombatWindow),
);

export {
  CombatWindowWrapped as CombatWindow,
};
