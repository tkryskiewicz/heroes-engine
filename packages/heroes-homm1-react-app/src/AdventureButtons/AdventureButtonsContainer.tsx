import * as React from "react";

import { canSelectNextHero, getNextHeroIndex, Hero } from "heroes-core";
import { AdventureButtons } from "heroes-homm1-react";

export interface AdventureButtonsContainerProps {
  readonly heroes: Hero[];
  readonly selectedIndex?: number;
  readonly onNextHeroClick: (index: number) => void;
  readonly onKingdomOverviewClick: () => void;
  readonly onEndTurnClick: () => void;
  readonly onAdventureOptionsClick: () => void;
  readonly onGameOptionsClick: () => void;
}

export class AdventureButtonsContainer extends React.Component<AdventureButtonsContainerProps> {
  public render() {
    const nextHeroDisabled = !canSelectNextHero(this.props.heroes);

    return (
      <AdventureButtons
        nextHeroDisabled={nextHeroDisabled}
        onNextHeroClick={this.onNextHeroClick}
        onKingdomOverviewClick={this.props.onKingdomOverviewClick}
        onEndTurnClick={this.props.onEndTurnClick}
        onAdventureOptionsClick={this.props.onAdventureOptionsClick}
        onGameOptionsClick={this.props.onGameOptionsClick}
      />
    );
  }

  private readonly onNextHeroClick = () => {
    const index = getNextHeroIndex(this.props.heroes, this.props.selectedIndex);

    if (index !== undefined) {
      this.props.onNextHeroClick(index);
    }
  }
}
