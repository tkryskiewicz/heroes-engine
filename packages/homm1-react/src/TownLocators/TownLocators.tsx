import * as React from "react";

import { TownLimit } from "heroes-homm1";

import { TownLocator } from "../TownLocator";

export interface TownLocatorsProps {
  towns: Array<{
    id: string,
    isCastleBuilt?: boolean;
  }>;
  selectedIndex?: number;
  onSelectLocator?: (index: number) => void;
}

// TODO: unify hero and town locators?
export class TownLocators extends React.Component<TownLocatorsProps> {
  public render() {
    return [...new Array(TownLimit).keys()].map((i) => {
      const town = this.props.towns[i];

      return (
        <TownLocator
          key={i}
          index={i}
          town={town ? town.id : undefined}
          isCastleBuilt={town ? town.isCastleBuilt : undefined}
          selected={i === this.props.selectedIndex}
          onClick={this.onLocatorClick}
        />
      );
    });
  }

  private onLocatorClick = (index: number) => {
    if (!this.props.onSelectLocator) {
      return;
    }

    if (index !== this.props.selectedIndex && this.props.towns[index]) {
      this.props.onSelectLocator(index);
    }
  }
}
