import * as React from "react";

import { canSelectNextHero, getNextHero, Hero } from "heroes-core";
import { AdventureButtons, EndTurnPrompt } from "heroes-homm1-react";

export interface AdventureButtonsContainerProps {
  readonly heroes: Hero[];
  readonly activeObjectId?: string;
  readonly onNextHeroClick: (id: string) => void;
  readonly onKingdomOverviewClick: () => void;
  readonly endTurnPromptVisible: boolean;
  readonly onEndTurnClick: () => void;
  readonly onConfirmEndTurnClick: () => void;
  readonly onCancelEndTurnClick: () => void;
  readonly onAdventureOptionsClick: () => void;
  readonly onGameOptionsClick: () => void;
}

export class AdventureButtonsContainer extends React.Component<AdventureButtonsContainerProps> {
  public render() {
    const nextHeroDisabled = !canSelectNextHero(this.props.heroes);

    return (
      <>
        <AdventureButtons
          nextHeroDisabled={nextHeroDisabled}
          onNextHeroClick={this.onNextHeroClick}
          onKingdomOverviewClick={this.props.onKingdomOverviewClick}
          onEndTurnClick={this.onEndTurnClick}
          onAdventureOptionsClick={this.props.onAdventureOptionsClick}
          onGameOptionsClick={this.props.onGameOptionsClick}
        />
        {this.props.endTurnPromptVisible && this.renderEndTurnPrompt()}
      </>
    );
  }

  private readonly onNextHeroClick = () => {
    const nextHero = getNextHero(this.props.heroes, this.props.activeObjectId);

    if (nextHero !== undefined) {
      this.props.onNextHeroClick(nextHero);
    }
  }

  private readonly onEndTurnClick = () => {
    if (this.props.heroes.some((h) => h.mobility !== 0)) {
      this.props.onEndTurnClick();

      return;
    }

    this.props.onConfirmEndTurnClick();
  }

  private renderEndTurnPrompt() {
    return (
      <EndTurnPrompt
        visible={true}
        onConfirmClick={this.props.onConfirmEndTurnClick}
        onCancelClick={this.props.onCancelEndTurnClick}
      />
    );
  }
}
