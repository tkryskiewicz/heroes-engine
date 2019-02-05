import * as React from "react";

import * as styles from "./AdventureScreen.module.scss";

import { AdventureOptions } from "../AdventureOptions";
import { CampaignScenarioInfoWindow } from "../CampaignScenarioInfoWindow";
import { GameText } from "../core";
import { GameOptions } from "../GameOptions";
import { HeroLocators } from "../HeroLocators";
import { HeroWindow } from "../HeroWindow";
import { KingdomOverviewWindow } from "../KingdomOverviewWindow";
import { PuzzleWindow } from "../PuzzleWindow";
import { TownLocators } from "../TownLocators";
import { TownWindow } from "../TownWindow";

export interface AdventureScreenProps {
  readonly renderAdventureButtons: () => React.ReactNode;
  readonly heroWindowVisible?: boolean;
  readonly kingdomOverviewWindowVisible?: boolean;
  readonly townWindowVisible?: boolean;
  readonly adventureOptionsVisible?: boolean;
  readonly gameOptionsVisible?: boolean;
  readonly puzzleWindowVisible?: boolean;
  readonly scenarioInfoWindowVisible?: boolean;
}

export class AdventureScreen extends React.Component<AdventureScreenProps> {
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
      <div className={styles.root}>
        <div className={styles.adventureMap}>
          <GameText size="normal">
            Adventure Window
          </GameText>
        </div>
        <div className={styles.worldMap}>
          <GameText size="normal">
            World Map
          </GameText>
          {kingdomOverviewWindowVisible && this.renderKingdomOverviewWindow(kingdomOverviewWindowVisible)}
          {adventureOptionsVisible && this.renderAdventureOptions(adventureOptionsVisible)}
          {gameOptionsVisible && this.renderGameOptions(gameOptionsVisible)}
          {puzzleWindowVisible && this.renderPuzzleWindow(puzzleWindowVisible)}
          {scenarioInfoWindowVisible && this.renderScenarioInfoWindow(scenarioInfoWindowVisible)}
        </div>
        <div className={styles.heroLocators}>
          <HeroLocators />
          {heroWindowVisible && this.renderHeroWindow(heroWindowVisible)}
        </div>
        <div className={styles.townLocators}>
          <TownLocators />
          {townWindowVisible && this.renderTownWindow(townWindowVisible)}
        </div>
        <div className={styles.adventureButtons}>
          {this.props.renderAdventureButtons()}
        </div>
        <div className={styles.statusWindow}>
          <GameText size="normal">
            Status Window
          </GameText>
        </div>
      </div>
    );
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
