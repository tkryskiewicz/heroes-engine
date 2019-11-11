import React from "react";
import { FormattedMessage, FormattedNumber } from "react-intl";

import { Army, Troop } from "heroes-core";
import { ArmySize } from "heroes-homm1";

import * as styles from "./HeroStatus.module.scss";

import { CreatureIcon, SmallCrest } from "../base";
import { GameText } from "../core";
import { getHeroNameMessage } from "../messages";
import { StatusWindow } from "../StatusWindow";

export interface HeroStatusProps {
  readonly playerColor: string;
  readonly heroClass: string;
  readonly hero: string;
  readonly army: Army;
}

export class HeroStatus extends React.Component<HeroStatusProps> {
  public render() {
    const { playerColor, heroClass, hero } = this.props;

    const army = this.props.army.filter((t) => t !== undefined);

    return (
      <StatusWindow>
        <div className={styles.root}>
          {this.renderCrest(playerColor, heroClass, hero)}
          {[...new Array(ArmySize).keys()].map((i) => this.renderTroopSlot(i, army[ArmySize - i - 1]))}
        </div>
      </StatusWindow>
    );
  }

  private renderCrest(playerColor: string, heroClass: string, hero: string) {
    return (
      <div className={styles.crest}>
        <div>
          <SmallCrest
            playerColor={playerColor}
            heroClass={heroClass}
          />
        </div>
        <GameText size="small">
          <FormattedMessage {...getHeroNameMessage(hero)} />
        </GameText>
      </div>
    );
  }

  private renderTroopSlot(index: number, troop?: Troop) {
    return (
      <div
        key={index}
        className={styles.troopSlot}
      >
        {troop && this.renderTroop(troop)}
      </div>
    );
  }

  private renderTroop(troop: Troop) {
    return (
      <div className={styles.troop}>
        <CreatureIcon
          size="small"
          creature={troop.creature}
        />
        <div className={styles.troopCount}>
          <GameText size="small">
            <FormattedNumber value={troop.count} />
          </GameText>
        </div>
      </div>
    );
  }
}
