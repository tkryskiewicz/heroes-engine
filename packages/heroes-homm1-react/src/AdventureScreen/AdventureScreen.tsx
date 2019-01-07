import { Col, Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { AdventureButtons } from "../AdventureButtons";
import { AdventureOptions } from "../AdventureOptions";
import { GameModal } from "../base";
import { CampaignScenarioInfoWindow } from "../CampaignScenarioInfoWindow";
import { GameText } from "../core";
import { GameOptions } from "../GameOptions";
import { HeroLocators } from "../HeroLocators";
import { HeroWindow } from "../HeroWindow";
import { KingdomOverviewWindow } from "../KingdomOverviewWindow";
import { PuzzleWindow } from "../PuzzleWindow";
import { TownLocators } from "../TownLocators";
import { TownWindow } from "../TownWindow";
import { messages } from "./messages";

interface Hero {
  mobility: number;
}

export interface AdventureScreenProps {
  heroes: Hero[];
  heroWindowVisible?: boolean;
  kingdomOverviewWindowVisible?: boolean;
  townWindowVisible?: boolean;
  adventureOptionsVisible?: boolean;
  gameOptionsVisible?: boolean;
  puzzleWindowVisible?: boolean;
  scenarioInfoWindowVisible?: boolean;
  endTurnPromptVisible: boolean;
  onEndTurnPromptVisibleChange: (value: boolean) => void;
  onEndTurn: () => void;
}

type DefaultProp =
  "endTurnPromptVisible" |
  "onEndTurnPromptVisibleChange" |
  "onEndTurn";

export class AdventureScreen extends React.Component<AdventureScreenProps> {
  public static defaultProps: Pick<AdventureScreenProps, DefaultProp> = {
    endTurnPromptVisible: false,
    onEndTurn: () => undefined,
    onEndTurnPromptVisibleChange: () => undefined,
  };

  public render() {
    const {
      heroWindowVisible,
      kingdomOverviewWindowVisible,
      townWindowVisible,
      adventureOptionsVisible,
      gameOptionsVisible,
      puzzleWindowVisible,
      scenarioInfoWindowVisible,
    } = this.props;

    return (
      <Row>
        <Col span={20}>
          <h1>
            Adventure Window
          </h1>
        </Col>
        <Col span={4}>
          <Row>
            <h1>
              World Map
            </h1>
          </Row>
          <Row>
            <h1>
              Locators
            </h1>
            <Col span={12}>
              <HeroLocators />
              {heroWindowVisible && this.renderHeroWindow(heroWindowVisible)}
            </Col>
            <Col span={12}>
              <TownLocators />
              {townWindowVisible && this.renderTownWindow(townWindowVisible)}
            </Col>
          </Row>
          <Row>
            <h1>
              Adventure Buttons
            </h1>
            <AdventureButtons
              onEndTurnClick={this.onEndTurnClick}
            />
            {this.props.endTurnPromptVisible && this.renderEndTurnPrompt()}
            {kingdomOverviewWindowVisible && this.renderKingdomOverviewWindow(kingdomOverviewWindowVisible)}
            {adventureOptionsVisible && this.renderAdventureOptions(adventureOptionsVisible)}
            {gameOptionsVisible && this.renderGameOptions(gameOptionsVisible)}
            {puzzleWindowVisible && this.renderPuzzleWindow(puzzleWindowVisible)}
            {scenarioInfoWindowVisible && this.renderScenarioInfoWindow(scenarioInfoWindowVisible)}
          </Row>
          <Row>
            <h1>
              Status Window
            </h1>
          </Row>
        </Col>
      </Row>
    );
  }

  private onEndTurnClick = () => {
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

  private onConfirmEndTurnClick = () => {
    this.props.onEndTurn();
  }

  private onCancelEndTurnClick = () => {
    this.props.onEndTurnPromptVisibleChange(false);
  }

  private renderHeroWindow(visible: boolean) {
    return (
      <HeroWindow
        visible={visible}
      />
    );
  }

  private renderKingdomOverviewWindow(visible: boolean) {
    return (
      <KingdomOverviewWindow
        visible={visible}
      />
    );
  }

  private renderTownWindow(visible: boolean) {
    return (
      <TownWindow
        visible={visible}
      />
    );
  }

  private renderAdventureOptions(visible: boolean) {
    return (
      <AdventureOptions
        visible={visible}
      />
    );
  }

  private renderGameOptions(visible: boolean) {
    return (
      <GameOptions
        visible={visible}
      />
    );
  }

  private renderPuzzleWindow(visible: boolean) {
    return (
      <PuzzleWindow
        visible={visible}
      />
    );
  }

  private renderScenarioInfoWindow(visible: boolean) {
    return (
      <CampaignScenarioInfoWindow
        visible={visible}
      />
    );
  }
}
