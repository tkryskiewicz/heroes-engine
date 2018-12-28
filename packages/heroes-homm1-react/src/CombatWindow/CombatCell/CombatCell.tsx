import * as React from "react";

import {
  BattlefieldObject,
  BattlefieldObjectType,
  BattlefieldObstacleObject,
  BattlefieldTroopObject,
} from "heroes-core";

import "./CombatCell.scss";

import { CombatTroop } from "../CombatTroop";

export interface CombatCellProps {
  index: number;
  terrainType: string;
  terrainVariant: number;
  object?: BattlefieldObject;
}

export class CombatCell extends React.Component<CombatCellProps> {
  public render() {
    return (
      <div className="combat-cell">
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
      <div className="combat-cell-object">
        <img src={`assets/terrains/${this.props.terrainType}/obstacle-${obstacleObject.variant}.png`} />
      </div>
    );
  }

  private renderTroop(troopObject: BattlefieldTroopObject) {
    return (
      <div className="combat-cell-object">
        <CombatTroop
          side={troopObject.side}
          creature={troopObject.troop.creature}
          count={troopObject.troop.count}
        />
      </div>
    );
  }
}
