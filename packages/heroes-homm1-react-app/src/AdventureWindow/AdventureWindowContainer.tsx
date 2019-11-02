import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router";

import { AdventureOptionsWindow, AdventureWindow, GameText } from "heroes-homm1-react";

import { AdventureButtons } from "../AdventureButtons";
import { AdventureMapWindow } from "../AdventureMapWindow";
import { CampaignScenarioInfoWindow } from "../CampaignScenarioInfoWindow";
import { GameOptionsWindow } from "../GameOptionsWindow";
import { HeroLocators } from "../HeroLocators";
import { KingdomOverviewWindow } from "../KingdomOverviewWindow";
import { PuzzleWindow } from "../PuzzleWindow";
import { StatusWindow } from "../StatusWindow";
import { TownLocators } from "../TownLocators";

export class AdventureWindowContainer extends React.Component<RouteComponentProps> {
  public render() {
    return (
      <div className="cursor-pointer">
        <AdventureWindow
          renderAdventureMap={this.renderAdventureMap}
          renderWorldMap={this.renderWorldMap}
          renderAdventureButtons={this.renderAdventureButtons}
          renderHeroLocators={this.renderHeroLocators}
          renderTownLocators={this.renderTownLocators}
          renderStatusWindow={this.renderStatusWindow}
        />
        <Switch>
          <Route
            path={`${this.props.match.path}/kingdom-overview`}
            render={this.renderKingdomOverviewWindow}
          />
          <Route
            path={`${this.props.match.path}/adventure-options`}
            render={this.renderAdventureOptionsWindow}
          />
          <Route
            path={`${this.props.match.path}/puzzle`}
            render={this.renderPuzzleWindow}
          />
          <Route
            path={`${this.props.match.path}/game-options`}
            render={this.renderGameOptionsWindow}
          />
          <Route
            path={`${this.props.match.path}/scenario-info`}
            render={this.renderScenarioInfoWindow}
          />
        </Switch>
      </div>
    );
  }

  private readonly renderAdventureMap = () => {
    return (
      <AdventureMapWindow />
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
        onKingdomOverviewClick={this.onKingdomOverviewClick}
        onAdventureOptionsClick={this.onAdventureOptionsClick}
        onGameOptionsClick={this.onGameOptionsClick}
      />
    );
  }

  private readonly onKingdomOverviewClick = () => {
    this.props.history.push(`${this.props.match.path}/kingdom-overview`);
  }

  private readonly renderKingdomOverviewWindow = () => {
    return (
      <KingdomOverviewWindow
        visible={true}
        onExitClick={this.onBackClick}
      />
    );
  }

  private readonly onAdventureOptionsClick = () => {
    this.props.history.push(`${this.props.match.path}/adventure-options`);
  }

  private readonly renderAdventureOptionsWindow = () => {
    return (
      <AdventureOptionsWindow
        visible={true}
        onViewPuzzleClick={this.onViewPuzzleClick}
        onOkayClick={this.onBackClick}
      />
    );
  }

  private readonly onViewPuzzleClick = () => {
    this.props.history.push(`${this.props.match.path}/puzzle`);
  }

  private readonly renderPuzzleWindow = () => {
    return (
      <PuzzleWindow
        visible={true}
        onExitClick={this.onBackClick}
      />
    );
  }

  private readonly onGameOptionsClick = () => {
    this.props.history.push(`${this.props.match.path}/game-options`);
  }

  private readonly renderGameOptionsWindow = () => {
    return (
      <GameOptionsWindow
        visible={true}
        onOkayClick={this.onBackClick}
        onInfoClick={this.onGameOptionsInfoClick}
      />
    );
  }

  private readonly onGameOptionsInfoClick = () => {
    this.props.history.push(`${this.props.match.path}/scenario-info`);
  }

  private readonly renderScenarioInfoWindow = () => {
    return (
      <CampaignScenarioInfoWindow
        visible={true}
        onOkayClick={this.onBackClick}
      />
    );
  }

  private readonly renderStatusWindow = () => {
    return (
      <StatusWindow />
    );
  }

  private readonly onBackClick = () => {
    this.props.history.push(this.props.match.path);
  }
}
