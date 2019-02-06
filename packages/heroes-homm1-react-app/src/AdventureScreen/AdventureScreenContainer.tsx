import * as React from "react";
import { FormattedMessage } from "react-intl";

import {
  AdventureButtons,
  AdventureOptions,
  AdventureScreen,
  CampaignScenarioInfoWindow,
  GameModal,
  GameOptions,
  GameText,
  HeroLocators,
  HeroWindow,
  KingdomOverviewWindow,
  PuzzleWindow,
  TownLocators,
  TownWindow,
} from "heroes-homm1-react";

import { messages } from "./messages";

interface Hero {
  readonly mobility: number;
}

export interface AdventureScreenContainerProps {
  readonly heroWindowVisible?: boolean;
  readonly townWindowVisible?: boolean;
  readonly heroes: Hero[];
  readonly kingdomOverviewWindowVisible?: boolean;
  readonly adventureOptionsVisible?: boolean;
  readonly gameOptionsVisible?: boolean;
  readonly puzzleWindowVisible?: boolean;
  readonly scenarioInfoWindowVisible?: boolean;
  readonly endTurnPromptVisible: boolean;
  readonly onEndTurnPromptVisibleChange: (value: boolean) => void;
  readonly onEndTurn: () => void;
}

type DefaultProp =
  "endTurnPromptVisible" |
  "onEndTurnPromptVisibleChange" |
  "onEndTurn";

export class AdventureScreenContainer extends React.Component<AdventureScreenContainerProps> {
  public static readonly defaultProps: Pick<AdventureScreenContainerProps, DefaultProp> = {
    endTurnPromptVisible: false,
    onEndTurn: () => undefined,
    onEndTurnPromptVisibleChange: () => undefined,
  };

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
        {this.props.heroWindowVisible && this.renderHeroWindow()}
        {this.props.townWindowVisible && this.renderTownWindow()}
        {this.props.kingdomOverviewWindowVisible && this.renderKingdomOverviewWindow()}
        {this.props.adventureOptionsVisible && this.renderAdventureOptions()}
        {this.props.gameOptionsVisible && this.renderGameOptions()}
        {this.props.puzzleWindowVisible && this.renderPuzzleWindow()}
        {this.props.scenarioInfoWindowVisible && this.renderScenarioInfoWindow()}
        {this.props.endTurnPromptVisible && this.renderEndTurnPrompt()}
      </>
    );
  }

  private readonly renderAdventureWindow = () => {
    return (
      <GameText size="normal">
        Adventure Window
      </GameText>
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

  private renderHeroWindow() {
    return (
      <HeroWindow
        visible={true}
      />
    );
  }

  private readonly renderTownLocators = () => {
    return (
      <TownLocators />
    );
  }

  private renderTownWindow() {
    return (
      <TownWindow
        visible={true}
      />
    );
  }

  private readonly renderAdventureButtons = () => {
    return (
      <AdventureButtons
        onEndTurnClick={this.onEndTurnClick}
      />
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

  private readonly onEndTurnClick = () => {
    if (this.props.heroes.some((h) => h.mobility !== 0)) {
      this.props.onEndTurnPromptVisibleChange(true);

      return;
    }

    this.props.onEndTurn();
  }

  private renderEndTurnPrompt() {
    return (
      <GameModal
        type="yesNo"
        onConfirmClick={this.onConfirmEndTurnClick}
        onCancelClick={this.onCancelEndTurnClick}
        visible={true}
      >
        <GameText size="large">
          <FormattedMessage {...messages.endTurnWarning} />
        </GameText>
      </GameModal>
    );
  }

  private readonly onConfirmEndTurnClick = () => {
    this.props.onEndTurn();
  }

  private readonly onCancelEndTurnClick = () => {
    this.props.onEndTurnPromptVisibleChange(false);
  }

  private readonly renderStatusWindow = () => {
    return (
      <GameText size="normal">
        Status Window
      </GameText>
    );
  }
}
