import * as React from "react";
import { FormattedMessage } from "react-intl";

import {
  Alignment,
  GameDifficulty,
  getGameDifficultyRating,
  getOpponentSettingRating,
  OpponentSetting,
  ScenarioDifficulty,
  ScenarioSize,
} from "heroes-homm1";

import * as styles from "./StandardGameScenarioInfoWindow.module.scss";

import { buttonImages } from "./assets";

import { AlignmentJewel, ImageButton } from "../base";
import { GameText, withGameWindow } from "../core";
import {
  getGameDifficultyMessage,
  getKingOfTheHillMessage,
  getOpponentSettingNameMessage,
  getScenarioDifficultyMessage,
  getScenarioSizeMessage,
} from "../messages";

export interface StandardGameScenarioInfoWindowProps {
  scenarioName: string;
  gameDifficulty: GameDifficulty;
  opponentSettings: OpponentSetting[];
  alignment: Alignment;
  kingOfTheHill: boolean;
  scenarioSize: ScenarioSize;
  scenarioDescription: string;
  scenarioDifficulty: ScenarioDifficulty;
  onOkayClick: () => void;
}

type DefaultProp =
  "kingOfTheHill" |
  "onOkayClick";

class StandardGameScenarioInfoWindow extends React.Component<StandardGameScenarioInfoWindowProps> {
  public static defaultProps: Pick<StandardGameScenarioInfoWindowProps, DefaultProp> = {
    kingOfTheHill: false,
    onOkayClick: () => undefined,
  };

  public render() {
    // FIXME: extract to getGameRating() ?
    const difficultyRating = getGameDifficultyRating(this.props.gameDifficulty) +
      this.props.opponentSettings.reduce((p, c) => p + getOpponentSettingRating(c), 0);

    return (
      <div className={styles.root}>
        <div className={styles.scenarioName}>
          <GameText size="large">
            {this.props.scenarioName}
          </GameText>
        </div>
        <div className={styles.gameDifficulty}>
          <GameText size="large">
            <FormattedMessage {...getGameDifficultyMessage(this.props.gameDifficulty)} />
          </GameText>
        </div>
        <div className={styles.opponentSettings}>
          <GameText size="large">
            {this.props.opponentSettings.map(this.renderOpponentSetting)}
          </GameText>
        </div>
        <div className={styles.alignment}>
          <AlignmentJewel
            value={this.props.alignment}
          />
        </div>
        <div className={styles.kingOfTheHill}>
          <GameText size="large">
            <FormattedMessage {...getKingOfTheHillMessage(this.props.kingOfTheHill)} />
          </GameText>
        </div>
        <div className={styles.difficultyRating}>
          <GameText size="large">
            {difficultyRating}%
          </GameText>
        </div>
        <div className={styles.scenarioSize}>
          <GameText size="large">
            <FormattedMessage {...getScenarioSizeMessage(this.props.scenarioSize)} />
          </GameText>
        </div>
        <div className={styles.scenarioDifficulty}>
          <GameText size="large">
            <FormattedMessage {...getScenarioDifficultyMessage(this.props.scenarioDifficulty)} />
          </GameText>
        </div>
        <div className={styles.scenarioDescription}>
          <GameText size="large">
            {this.props.scenarioDescription}
          </GameText>
        </div>
        <div className={styles.okay}>
          <ImageButton
            images={buttonImages.okay}
            onClick={this.props.onOkayClick}
          />
        </div>
      </div>
    );
  }

  private renderOpponentSetting(value: OpponentSetting, index: number) {
    return (
      <React.Fragment key={index}>
        <FormattedMessage {...getOpponentSettingNameMessage(value)} />
        <br />
      </React.Fragment>
    );
  }
}

const StandardGameScenarioInfoWindowWrapped = withGameWindow(322)(StandardGameScenarioInfoWindow);

export {
  StandardGameScenarioInfoWindowWrapped as StandardGameScenarioInfoWindow,
};
