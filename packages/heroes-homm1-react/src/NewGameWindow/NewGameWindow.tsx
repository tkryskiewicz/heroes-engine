import * as React from "react";
import { FormattedMessage } from "react-intl";

import {
  Alignment,
  GameDifficulty,
  getGameDifficultyRating,
  getOpponentSettingRating,
  OpponentSetting,
} from "heroes-homm1";

import "./NewGameWindow.scss";

import { GameSwitch, ImageButton } from "../base";
import { GameText } from "../core";
import { AlignmentBox } from "./AlignmentBox";
import { buttonImages } from "./assets";
import { GameDifficultyBox } from "./GameDifficultyBox";
import { messages } from "./messages";
import { OpponentSettingBox } from "./OpponentSettingBox";

export interface NewGameWindowProps {
  selectedGameDifficulty: GameDifficulty;
  onGameDifficultyChange: (value: GameDifficulty) => void;
  opponentSettings: OpponentSetting[];
  onOpponentSettingsChange: (settings: OpponentSetting[]) => void;
  selectedAlignment: Alignment;
  onAlignmentChange: (value: Alignment) => void;
  kingOfTheHill: boolean;
  onKingOfTheHillChange: (value: boolean) => void;
  onOkayClick: () => void;
  onCancelClick: () => void;
}

type DefaultProp =
  "onGameDifficultyChange" |
  "onOpponentSettingsChange" |
  "onAlignmentChange" |
  "onKingOfTheHillChange" |
  "onOkayClick" |
  "onCancelClick";

export class NewGameWindow extends React.Component<NewGameWindowProps> {
  public static defaultProps: Pick<NewGameWindowProps, DefaultProp> = {
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
      <div className="new-game-window">
        <div className="new-game-window-game-difficulties-title">
          <GameText size="large">
            <FormattedMessage {...messages.difficultyTitle} />
          </GameText>
        </div>
        {this.renderDifficulties()}
        <div className="new-game-window-opponent-settings-title">
          <GameText size="large">
            <FormattedMessage {...messages.opponentsTitle} />
          </GameText>
        </div>
        <div className="new-game-window-opponent-settings">
          {this.renderOpponentSettings(this.props.opponentSettings)}
        </div>
        <div className="new-game-window-alignment">
          <GameText size="large">
            <FormattedMessage {...messages.alignmentTitle} />
          </GameText>
          <div>
            <AlignmentBox
              value={this.props.selectedAlignment}
              onChange={this.props.onAlignmentChange}
            />
          </div>
        </div>
        <div className="new-game-window-king-of-the-hill">
          <GameText size="large">
            <FormattedMessage {...messages.kingOfTheHill} />
          </GameText>
          <div>
            <GameSwitch
              type="checkbox"
              checked={this.props.kingOfTheHill}
              onChange={this.props.onKingOfTheHillChange}
            />
          </div>
        </div>
        <div className="new-game-window-scenario">
          <GameText size="large">
            <FormattedMessage {...messages.scenarioTitle} />
          </GameText>
        </div>
        <div>
          {/* TODO: implement scenario selection */}
        </div>
        <div className="new-game-window-difficulty-rating">
          <GameText size="large">
            <FormattedMessage {...messages.difficultyRatingTitle} /> {difficultyRating}%
          </GameText>
        </div>
        <div className="new-game-window-okay">
          <ImageButton
            images={buttonImages.okay}
            onClick={this.props.onOkayClick}
          />
        </div>
        <div className="new-game-window-cancel">
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
      <div className="new-game-window-game-difficulties">
        {difficulties.map((d) => this.renderDifficulty(d, this.props.selectedGameDifficulty))}
      </div>
    );
  }

  private renderDifficulty(difficulty: GameDifficulty, selectedDifficulty?: GameDifficulty) {
    return (
      <div
        className="new-game-window-game-difficulty"
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

  private onGameDifficultyClick = (value: GameDifficulty) => {
    if (value !== this.props.selectedGameDifficulty) {
      this.props.onGameDifficultyChange(value);
    }
  }

  private renderOpponentSettings(settings: OpponentSetting[]) {
    return settings.map((s, i) => (
      <div
        key={i}
        className="new-game-window-opponent-setting"
      >
        <OpponentSettingBox
          index={i}
          value={s}
          onChange={this.onOpponentSettingChange}
        />
      </div>
    ));
  }

  private onOpponentSettingChange = (index: number, setting: OpponentSetting) => {
    const settings = [...this.props.opponentSettings];

    settings[index] = setting;

    this.props.onOpponentSettingsChange(settings);
  }
}
