import React from "react";
import { FormattedMessage, FormattedNumber } from "react-intl";

import { noop } from "heroes-helpers";
import {
  GameDifficulty,
  OpponentSetting,
  ScenarioDifficulty,
  ScenarioSize,
} from "heroes-homm1";

import * as styles from "./StandardScenarioInfoWindow.module.scss";

import { buttonImages } from "./assets";

import { ImageButton, PlayerColorJewel } from "../base";
import { GameText, withGameWindow } from "../core";
import {
  getGameDifficultyMessage,
  getKingOfTheHillMessage,
  getOpponentSettingNameMessage,
  getScenarioDifficultyMessage,
  getScenarioSizeMessage,
} from "../messages";

interface Props {
  readonly scenarioName: string;
  readonly gameDifficulty: GameDifficulty;
  readonly opponentSettings: OpponentSetting[];
  readonly playerColor: string;
  readonly kingOfTheHill: boolean;
  readonly difficultyRating: number;
  readonly scenarioSize: ScenarioSize;
  readonly scenarioDescription: string;
  readonly scenarioDifficulty: ScenarioDifficulty;
  readonly onOkayClick: () => void;
}

class StandardScenarioInfoWindow extends React.Component<Props> {
  public static readonly defaultProps: Props = {
    difficultyRating: 0,
    gameDifficulty: GameDifficulty.Easy,
    kingOfTheHill: false,
    onOkayClick: noop,
    opponentSettings: [],
    playerColor: "",
    scenarioDescription: "",
    scenarioDifficulty: ScenarioDifficulty.Easy,
    scenarioName: "",
    scenarioSize: ScenarioSize.Small,
  };

  public render() {
    return (
      <div className={styles.root}>
        <GameText
          data-test-id="scenario-name"
          className={styles.scenarioName}
          size="large"
        >
          {this.props.scenarioName}
        </GameText>
        <GameText
          data-test-id="game-difficulty"
          className={styles.gameDifficulty}
          size="large"
        >
          <FormattedMessage {...getGameDifficultyMessage(this.props.gameDifficulty)} />
        </GameText>
        <div
          data-test-id="opponent-settings"
          className={styles.opponentSettings}
        >
          {this.props.opponentSettings.map(this.renderOpponentSetting)}
        </div>
        <PlayerColorJewel
          data-test-id="player-color"
          className={styles.playerColor}
          value={this.props.playerColor}
        />
        <GameText
          data-test-id="king-of-the-hill"
          className={styles.kingOfTheHill}
          size="large"
        >
          <FormattedMessage {...getKingOfTheHillMessage(this.props.kingOfTheHill)} />
        </GameText>
        <GameText
          data-test-id="difficulty-rating"
          className={styles.difficultyRating}
          size="large"
        >
          <FormattedNumber
            style="percent"
            value={this.props.difficultyRating / 100}
          />
        </GameText>
        <GameText
          data-test-id="scenario-size"
          className={styles.scenarioSize}
          size="large"
        >
          <FormattedMessage {...getScenarioSizeMessage(this.props.scenarioSize)} />
        </GameText>
        <GameText
          data-test-id="scenario-difficulty"
          className={styles.scenarioDifficulty}
          size="large"
        >
          <FormattedMessage {...getScenarioDifficultyMessage(this.props.scenarioDifficulty)} />
        </GameText>
        <GameText
          data-test-id="scenario-description"
          className={styles.scenarioDescription}
          size="large"
        >
          {this.props.scenarioDescription}
        </GameText>
        <ImageButton
          data-test-id="okay"
          className={styles.okay}
          images={buttonImages.okay}
          onClick={this.props.onOkayClick}
        />
      </div>
    );
  }

  private renderOpponentSetting(value: OpponentSetting, index: number) {
    return (
      <GameText
        data-test-id={`opponent-${index}`}
        key={index}
        size="large"
      >
        <FormattedMessage {...getOpponentSettingNameMessage(value)} />
        <br />
      </GameText>
    );
  }
}

const ComponentWrapped = withGameWindow(322)(StandardScenarioInfoWindow);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as StandardScenarioInfoWindow,
  ComponentWrappedProps as StandardScenarioInfoWindowProps,
};
