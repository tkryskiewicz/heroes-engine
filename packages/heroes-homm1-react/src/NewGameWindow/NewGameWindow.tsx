import React from "react";
import { FormattedMessage, FormattedNumber } from "react-intl";

import { noop } from "heroes-helpers";

import * as styles from "./NewGameWindow.module.scss";

import { buttonImages, switchImages } from "./assets";

import { ImageButton, ImageSwitch, PlayerColorJewel } from "../base";
import { GameText } from "../core";
import { messages } from "./messages";

const GameDifficultySlotCount = 4;
const OpponentSettingSlotCount = 3;

interface Props {
  readonly renderGameDifficulty: (index: number) => React.ReactNode;
  readonly renderOpponentSetting: (index: number) => React.ReactNode;
  readonly playerColor: string;
  readonly onPlayerColorClick: () => void;
  readonly kingOfTheHill: boolean;
  readonly onKingOfTheHillChange: (value: boolean) => void;
  readonly scenarioName: string;
  readonly onSelectScenarioClick: () => void;
  readonly difficultyRating: number;
  readonly onOkayClick: () => void;
  readonly onCancelClick: () => void;
}

export class NewGameWindow extends React.Component<Props> {
  public static readonly defaultProps: Props = {
    difficultyRating: 0,
    kingOfTheHill: false,
    onCancelClick: noop,
    onKingOfTheHillChange: noop,
    onOkayClick: noop,
    onPlayerColorClick: noop,
    onSelectScenarioClick: noop,
    playerColor: "",
    renderGameDifficulty: noop,
    renderOpponentSetting: noop,
    scenarioName: "",
  };

  public render() {
    return (
      <div className={styles.root}>
        <GameText
          className={styles.gameDifficultiesTitle}
          size="large"
        >
          <FormattedMessage {...messages.difficultyTitle} />:
        </GameText>
        <div className={styles.gameDifficulties}>
          {[...new Array(GameDifficultySlotCount).keys()].map(this.renderGameDifficulty)}
        </div>
        <GameText
          className={styles.opponentSettingsTitle}
          size="large"
        >
          <FormattedMessage {...messages.opponentsTitle} />:
        </GameText>
        <div className={styles.opponentSettings}>
          {[...new Array(OpponentSettingSlotCount).keys()].map(this.renderOpponentSetting)}
        </div>
        <div className={styles.playerColor}>
          <GameText size="large">
            <FormattedMessage {...messages.playerColorTitle} />:
          </GameText>
          <div>
            <PlayerColorJewel
              data-test-id="player-color"
              value={this.props.playerColor}
              onClick={this.props.onPlayerColorClick}
            />
          </div>
        </div>
        <div className={styles.kingOfTheHill}>
          <GameText size="large">
            <FormattedMessage {...messages.kingOfTheHill} />:
          </GameText>
          <div>
            <ImageSwitch
              data-test-id="king-of-the-hill"
              images={switchImages.checkbox}
              checked={this.props.kingOfTheHill}
              onChange={this.props.onKingOfTheHillChange}
            />
          </div>
        </div>
        <GameText
          className={styles.scenarioTitle}
          size="large"
        >
          <FormattedMessage {...messages.scenarioTitle} />:
        </GameText>
        <GameText
          data-test-id="scenario-name"
          className={styles.scenarioName}
          size="normal"
        >
          {this.props.scenarioName}
        </GameText>
        <ImageButton
          data-test-id="select-scenario"
          className={styles.selectScenario}
          images={buttonImages.select}
          onClick={this.props.onSelectScenarioClick}
        />
        <GameText
          data-test-id="difficulty-rating"
          className={styles.difficultyRating}
          size="large"
        >
          <FormattedMessage {...messages.difficultyRatingTitle} />:
          {" "}
          <FormattedNumber
            style="percent"
            value={this.props.difficultyRating / 100}
          />
        </GameText>
        <ImageButton
          data-test-id="okay"
          className={styles.okay}
          images={buttonImages.okay}
          onClick={this.props.onOkayClick}
        />
        <ImageButton
          data-test-id="cancel"
          className={styles.cancel}
          images={buttonImages.cancel}
          onClick={this.props.onCancelClick}
        />
      </div>
    );
  }

  private readonly renderGameDifficulty = (index: number) => {
    return (
      <div
        data-test-id={`game-difficulty-${index}`}
        key={index}
        className={styles.gameDifficulty}
      >
        {this.props.renderGameDifficulty(index)}
      </div>
    );
  }

  private readonly renderOpponentSetting = (index: number) => {
    return (
      <div
        data-test-id={`opponent-setting-${index}`}
        key={index}
        className={styles.opponentSetting}
      >
        {this.props.renderOpponentSetting(index)}
      </div>
    );
  }
}

export type NewGameWindowProps = ExtractPublicProps<typeof NewGameWindow>;
