import * as React from "react";

import { Locator } from "../Locator";

export interface TownLocatorProps {
  index: number;
  town?: string;
  isCastleBuilt?: boolean;
  selected?: boolean;
  onClick?: (index: number) => void;
}

export class TownLocator extends React.Component<TownLocatorProps> {
  public render() {
    return (
      <Locator
        index={this.props.index}
        selected={this.props.selected}
        onClick={this.props.onClick}
      >
        {this.props.town && this.renderTown(this.props.town, this.props.isCastleBuilt)}
      </Locator>
    );
  }

  private renderTown(town: string, isCastleBuilt?: boolean) {
    const style: React.CSSProperties = {
      left: 1,
      position: "absolute",
      top: 1,
    };

    return (
      <img
        style={style}
        src={`assets/towns/${town}/${isCastleBuilt ? "castle" : "town"}-locator.jpg`}
      />
    );
  }
}
