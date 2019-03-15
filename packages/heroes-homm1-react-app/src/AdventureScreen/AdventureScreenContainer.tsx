import * as React from "react";

import { AdventureScreen, GameText } from "heroes-homm1-react";

import { AdventureButtons } from "../AdventureButtons";
import { AdventureOptions } from "../AdventureOptions";
import { AdventureWindow } from "../AdventureWindow";
import { CampaignScenarioInfoWindow } from "../CampaignScenarioInfoWindow";
import { GameOptions } from "../GameOptions";
import { HeroLocators } from "../HeroLocators";
import { KingdomOverviewWindow } from "../KingdomOverviewWindow";
import { PuzzleWindow } from "../PuzzleWindow";
import { TownLocators } from "../TownLocators";

interface Hero {
  readonly mobility: number;
}

export interface AdventureScreenContainerProps {
  readonly heroes: Hero[];
  readonly kingdomOverviewWindowVisible?: boolean;
  readonly adventureOptionsVisible?: boolean;
  readonly gameOptionsVisible?: boolean;
  readonly puzzleWindowVisible?: boolean;
  readonly scenarioInfoWindowVisible?: boolean;
}

export class AdventureScreenContainer extends React.Component<AdventureScreenContainerProps> {
  public render() {
    return (
      <>
        <AdventureScreen
          renderAdventureWindow={this.renderAdventureWindow}
          renderWorldMap={this.renderWorldMap}
          renderAdventureButtons={this.renderAdventureButtons}
          renderHeroLocators={this.renderHeroLocators}
          renderTownLocators={this.renderTownLocators}
          renderStatusWindow={this.renderStatusWindow}
        />
        {this.props.kingdomOverviewWindowVisible && this.renderKingdomOverviewWindow()}
        {this.props.adventureOptionsVisible && this.renderAdventureOptions()}
        {this.props.gameOptionsVisible && this.renderGameOptions()}
        {this.props.puzzleWindowVisible && this.renderPuzzleWindow()}
        {this.props.scenarioInfoWindowVisible && this.renderScenarioInfoWindow()}
      </>
    );
  }

  private readonly renderAdventureWindow = () => {
    return (
      <AdventureWindow />
    );
  }

  private readonly renderWorldMap = () => {
    return (
      <GameText size="normal">
        World Map
      </GameText>
    );
  }

  private readonly renderHeroLocators = () => {
    return (
      <HeroLocators />
    );
  }

  private readonly renderTownLocators = () => {
    return (
      <TownLocators />
    );
  }

  private readonly renderAdventureButtons = () => {
    return (
      <AdventureButtons />
    );
  }

  private renderKingdomOverviewWindow() {
    return (
      <KingdomOverviewWindow
        visible={true}
      />
    );
  }

  private renderAdventureOptions() {
    return (
      <AdventureOptions
        visible={true}
      />
    );
  }

  private renderGameOptions() {
    return (
      <GameOptions
        visible={true}
      />
    );
  }

  private renderPuzzleWindow() {
    return (
      <PuzzleWindow
        visible={true}
      />
    );
  }

  private renderScenarioInfoWindow() {
    return (
      <CampaignScenarioInfoWindow
        visible={true}
      />
    );
  }

  private readonly renderStatusWindow = () => {
    return (
      <GameText size="normal">
        Status Window
      </GameText>
    );
  }
}
