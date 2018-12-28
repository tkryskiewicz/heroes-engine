import * as React from "react";

import { BattlefieldObstacleObject } from "heroes-core";

import "./CombatCell.scss";

export interface CombatCellProps {
  index: number;
  terrainType: string;
  terrainVariant: number;
  object?: BattlefieldObstacleObject;
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

  private renderObject(object: BattlefieldObstacleObject) {
    return (
      <div className="combat-cell-object">
        <img src={`assets/terrains/${this.props.terrainType}/obstacle-${object.variant}.png`} />
      </div>
    );
  }
}
