import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router";

import { AdventureScreen, GameText } from "heroes-homm1-react";

import { AdventureButtons } from "../AdventureButtons";
import { AdventureOptions } from "../AdventureOptions";
import { AdventureWindow } from "../AdventureWindow";
import { CampaignScenarioInfoWindow } from "../CampaignScenarioInfoWindow";
import { GameOptionsWindow } from "../GameOptionsWindow";
import { HeroLocators } from "../HeroLocators";
import { KingdomOverviewWindow } from "../KingdomOverviewWindow";
import { PuzzleWindow } from "../PuzzleWindow";
import { StatusWindow } from "../StatusWindow";
import { TownLocators } from "../TownLocators";

export interface AdventureScreenContainerProps extends RouteComponentProps {
  readonly kingdomOverviewWindowVisible?: boolean;
  readonly adventureOptionsVisible?: boolean;
  readonly puzzleWindowVisible?: boolean;
}

export class AdventureScreenContainer extends React.Component<AdventureScreenContainerProps> {
  public render() {
    return (
      <div className="cursor-pointer">
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
        {this.props.puzzleWindowVisible && this.renderPuzzleWindow()}
        <Switch>
          <Route
            path={`${this.props.match.path}/game-options`}
            render={this.renderGameOptions}
          />
          <Route
            path={`${this.props.match.path}/scenario-info`}
            render={this.renderScenarioInfoWindow}
          />
        </Switch>
      </div>
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
      <AdventureButtons
        onGameOptionsClick={this.onGameOptionsClick}
      />
    );
  }

  private readonly onGameOptionsClick = () => {
    this.props.history.push(`${this.props.match.path}/game-options`);
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

  private readonly renderGameOptions = () => {
    return (
      <GameOptionsWindow
        visible={true}
        onOkayClick={this.onGameOptionsOkayClick}
        onInfoClick={this.onGameOptionsInfoClick}
      />
    );
  }

  private readonly onGameOptionsOkayClick = () => {
    this.props.history.push(this.props.match.path);
  }

  private readonly onGameOptionsInfoClick = () => {
    this.props.history.push(`${this.props.match.path}/scenario-info`);
  }

  private renderPuzzleWindow() {
    return (
      <PuzzleWindow
        visible={true}
      />
    );
  }

  private readonly renderScenarioInfoWindow = () => {
    return (
      <CampaignScenarioInfoWindow
        visible={true}
        onOkayClick={this.onScenarioInfoOkayClick}
      />
    );
  }

  private readonly onScenarioInfoOkayClick = () => {
    this.props.history.push(this.props.match.path);
  }

  private readonly renderStatusWindow = () => {
    return (
      <StatusWindow />
    );
  }
}
