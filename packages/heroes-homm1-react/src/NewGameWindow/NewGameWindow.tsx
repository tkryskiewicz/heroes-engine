import * as React from "react";
import { FormattedMessage, FormattedNumber } from "react-intl";

import { nextOption } from "heroes-core";
import {
  Alignment,
  GameDifficulty,
  getGameDifficultyRating,
  getOpponentSettingRating,
  OpponentSetting,
} from "heroes-homm1";

import * as styles from "./NewGameWindow.module.scss";

import { buttonImages, switchImages } from "./assets";

import { AlignmentJewel, ImageButton, ImageSwitch } from "../base";
import { GameText } from "../core";
import { GameDifficultyBox } from "./GameDifficultyBox";
import { messages } from "./messages";
import { OpponentSettingBox } from "./OpponentSettingBox";

export interface NewGameWindowProps {
  readonly selectedGameDifficulty: GameDifficulty;
  readonly onGameDifficultyChange: (value: GameDifficulty) => void;
  readonly opponentSettings: OpponentSetting[];
  readonly onOpponentSettingsChange: (settings: OpponentSetting[]) => void;
  readonly selectedAlignment: Alignment;
  readonly onAlignmentChange: (value: Alignment) => void;
  readonly kingOfTheHill: boolean;
  readonly onKingOfTheHillChange: (value: boolean) => void;
  readonly onOkayClick: () => void;
  readonly onCancelClick: () => void;
}

type DefaultProp =
  "onGameDifficultyChange" |
  "onOpponentSettingsChange" |
  "onAlignmentChange" |
  "onKingOfTheHillChange" |
  "onOkayClick" |
  "onCancelClick";

export class NewGameWindow extends React.Component<NewGameWindowProps> {
  public static readonly defaultProps: Pick<NewGameWindowProps, DefaultProp> = {
    onAlignmentChange: () => undefined,
    onCancelClick: () => undefined,
    onGameDifficultyChange: () => undefined,
    onKingOfTheHillChange: () => undefined,
    onOkayClick: () => undefined,
    onOpponentSettingsChange: () => undefined,
  };

  public render() {
    const difficultyRating = getGameDifficultyRating(this.props.selectedGameDifficulty) +
      this.props.opponentSettings.reduce((p, c) => p + getOpponentSettingRating(c), 0);

    return (
      <div className={styles.root}>
        <div className={styles.gameDifficultiesTitle}>
          <GameText size="large">
            <FormattedMessage {...messages.difficultyTitle} />:
          </GameText>
        </div>
        {this.renderDifficulties()}
        <div className={styles.opponentSettingsTitle}>
          <GameText size="large">
            <FormattedMessage {...messages.opponentsTitle} />:
          </GameText>
        </div>
        <div className={styles.opponentSettings}>
          {this.renderOpponentSettings(this.props.opponentSettings)}
        </div>
        <div className={styles.alignment}>
          <GameText size="large">
            <FormattedMessage {...messages.alignmentTitle} />:
          </GameText>
          <div>
            <AlignmentJewel
              value={this.props.selectedAlignment}
              onClick={this.onAlignmentClick}
            />
          </div>
        </div>
        <div className={styles.kingOfTheHill}>
          <GameText size="large">
            <FormattedMessage {...messages.kingOfTheHill} />:
          </GameText>
          <div>
            <ImageSwitch
              images={switchImages.checkbox}
              checked={this.props.kingOfTheHill}
              onChange={this.props.onKingOfTheHillChange}
            />
          </div>
        </div>
        <div className={styles.scenario}>
          <GameText size="large">
            <FormattedMessage {...messages.scenarioTitle} />:
          </GameText>
        </div>
        <div>
          {/* TODO: implement scenario selection */}
        </div>
        <div className={styles.difficultyRating}>
          <GameText size="large">
            <FormattedMessage {...messages.difficultyRatingTitle} />:
            {" "}
            <FormattedNumber
              style="percent"
              value={difficultyRating / 100}
            />
          </GameText>
        </div>
        <div className={styles.okay}>
          <ImageButton
            images={buttonImages.okay}
            onClick={this.props.onOkayClick}
          />
        </div>
        <div className={styles.cancel}>
          <ImageButton
            images={buttonImages.cancel}
            onClick={this.props.onCancelClick}
          />
        </div>
      </div>
    );
  }

  private renderDifficulties() {
    const difficulties = [
      GameDifficulty.Easy,
      GameDifficulty.Normal,
      GameDifficulty.Hard,
      GameDifficulty.Expert,
    ];

    return (
      <div className={styles.gameDifficulties}>
        {difficulties.map((d) => this.renderDifficulty(d, this.props.selectedGameDifficulty))}
      </div>
    );
  }

  private renderDifficulty(difficulty: GameDifficulty, selectedDifficulty?: GameDifficulty) {
    return (
      <div
        className={styles.gameDifficulty}
        key={difficulty}
      >
        <GameDifficultyBox
          value={difficulty}
          selected={difficulty === selectedDifficulty}
          onClick={this.onGameDifficultyClick}
        />
      </div>
    );
  }

  private readonly onGameDifficultyClick = (value: GameDifficulty) => {
    if (value !== this.props.selectedGameDifficulty) {
      this.props.onGameDifficultyChange(value);
    }
  }

  private renderOpponentSettings(settings: OpponentSetting[]) {
    return settings.map((s, i) => (
      <div
        key={i}
        className={styles.opponentSetting}
      >
        <OpponentSettingBox
          index={i}
          value={s}
          onChange={this.onOpponentSettingChange}
        />
      </div>
    ));
  }

  private readonly onOpponentSettingChange = (index: number, setting: OpponentSetting) => {
    const settings = [...this.props.opponentSettings];

    settings[index] = setting;

    this.props.onOpponentSettingsChange(settings);
  }

  private readonly onAlignmentClick = () => {
    const value = nextOption(Object.values(Alignment), this.props.selectedAlignment);

    this.props.onAlignmentChange(value);
  }
}
