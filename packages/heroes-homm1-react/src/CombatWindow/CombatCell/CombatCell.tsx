import * as React from "react";

export interface CombatCellProps {
  index: number;
  terrainType: string;
  terrainVariant: number;
}

export class CombatCell extends React.Component<CombatCellProps> {
  public render() {
    return (
      <div className="combat-cell">
        <img src={`assets/terrains/${this.props.terrainType}/cell-${this.props.terrainVariant}.png`} />
      </div>
    );
  }
}
