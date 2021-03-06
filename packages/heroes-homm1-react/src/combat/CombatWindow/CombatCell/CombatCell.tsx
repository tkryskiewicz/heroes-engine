import React from "react";

import {
  BattlefieldObject,
  BattlefieldObjectType,
  BattlefieldObstacleObject,
  BattlefieldTroopObject,
} from "heroes-core";
import { noop } from "heroes-helpers";

import * as styles from "./CombatCell.module.scss";

import { CombatTroop } from "../CombatTroop";

export interface CombatCellProps {
  readonly index: number;
  readonly terrainType: string;
  readonly terrainVariant: number;
  readonly object?: BattlefieldObject;
  readonly onClick: (index: number) => void;
}

export class CombatCell extends React.Component<CombatCellProps> {
  public static readonly defaultProps: Pick<CombatCellProps, "onClick"> = {
    onClick: noop,
  };

  public render() {
    return (
      <div
        className={styles.root}
        onClick={this.onClick}
      >
        <img src={`assets/terrains/${this.props.terrainType}/cell-${this.props.terrainVariant}.png`} />
        {this.props.object && this.renderObject(this.props.object)}
      </div>
    );
  }

  private renderObject(object: BattlefieldObject) {
    switch (object.type) {
      case BattlefieldObjectType.Obstacle:
        return this.renderObstacle(object);
      case BattlefieldObjectType.Troop:
        return this.renderTroop(object);
    }
  }

  private renderObstacle(obstacleObject: BattlefieldObstacleObject) {
    return (
      <div className={styles.object}>
        <img src={`assets/terrains/${this.props.terrainType}/obstacle-${obstacleObject.variant}.png`} />
      </div>
    );
  }

  private renderTroop(troopObject: BattlefieldTroopObject) {
    return (
      <div className={styles.object}>
        <CombatTroop
          side={troopObject.side}
          creature={troopObject.troop.creature}
          count={troopObject.troop.count}
        />
      </div>
    );
  }

  private readonly onClick = () => {
    this.props.onClick(this.props.index);
  }
}
