import * as React from "react";

import * as styles from "./TownLocator.module.scss";

import { Locator } from "../Locator";

export interface TownLocatorProps {
  readonly index: number;
  readonly town?: string;
  readonly isCastleBuilt?: boolean;
  readonly selected?: boolean;
  readonly onClick?: (index: number) => void;
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
    return (
      <img
        className={styles.root}
        src={`assets/towns/${town}/${isCastleBuilt ? "castle" : "town"}-locator.jpg`}
      />
    );
  }
}
