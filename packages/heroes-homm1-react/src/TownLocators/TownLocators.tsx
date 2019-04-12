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
  readonly onLocatorClick?: (index: number) => void;
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
          onClick={this.props.onLocatorClick}
        />
      );
    });
  }
}
