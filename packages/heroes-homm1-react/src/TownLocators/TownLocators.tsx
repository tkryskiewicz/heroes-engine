import * as React from "react";

import { TownLimit } from "heroes-homm1";

import { TownLocator } from "../TownLocator";

interface Town {
  readonly id: string;
  readonly isCastleBuilt: boolean;
}

export interface TownLocatorsProps {
  readonly towns: Town[];
  readonly selectedIndex?: number;
  readonly onSelectLocator?: (index: number) => void;
  readonly onSelectedLocatorClick?: () => void;
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

  private readonly onLocatorClick = (index: number) => {
    const town = this.props.towns[index];

    if (!town) {
      return;
    }

    if (index !== this.props.selectedIndex && this.props.onSelectLocator) {
      this.props.onSelectLocator(index);
    } else if (this.props.onSelectedLocatorClick) {
      this.props.onSelectedLocatorClick();
    }
  }
}
