import { Col, Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import {
  Alignment,
  GameDifficulty,
  getGameDifficultyRating,
  getOpponentSettingRating,
  OpponentSetting,
} from "heroes-homm1";

import { GameButton } from "../GameButton";
import { GameSwitch } from "../GameSwitch";
import { getGameDifficultyMessage } from "../messages";
import { AlignmentBox } from "./AlignmentBox";
import { GameDifficultyBox } from "./GameDifficultyBox";
import { messages } from "./messages";
import { OpponentSettingBox } from "./OpponentSettingBox";

export interface NewGameWindowProps {
  selectedGameDifficulty: GameDifficulty;
  onGameDifficultyChange?: (value: GameDifficulty) => void;
  opponentSettings: OpponentSetting[];
  onOpponentSettingsChange?: (settings: OpponentSetting[]) => void;
  selectedAlignment: Alignment;
  onAlignmentChange?: (value: Alignment) => void;
  kingOfTheHill: boolean;
  onKingOfTheHillChange?: (value: boolean) => void;
  onOkayClick?: () => void;
  onCancelClick?: () => void;
}

export class NewGameWindow extends React.Component<NewGameWindowProps> {
  public render() {
    const difficultyRating = getGameDifficultyRating(this.props.selectedGameDifficulty) +
      this.props.opponentSettings.reduce((p, c) => p + getOpponentSettingRating(c), 0);

    return (
      <div style={{ textAlign: "center" }}>
        <Row>
          <FormattedMessage {...messages.difficultyTitle} />
        </Row>
        <Row>
          {this.renderDifficulties()}
        </Row>
        <Row>
          <FormattedMessage {...messages.opponentsTitle} />
          <Row>
            {this.renderOpponentSettings(this.props.opponentSettings)}
          </Row>
        </Row>
        <Row>
          <Col span={12}>
            <FormattedMessage {...messages.alignmentTitle} />
            <div>
              <AlignmentBox
                value={this.props.selectedAlignment}
                onChange={this.props.onAlignmentChange}
              />
            </div>
          </Col>
          <Col span={12}>
            <FormattedMessage {...messages.kingOfTheHill} />
            <div>
              <GameSwitch
                type="checkbox"
                checked={this.props.kingOfTheHill}
                onChange={this.props.onKingOfTheHillChange}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <FormattedMessage {...messages.scenarioTitle} />
        </Row>
        <Row>
          {/* TODO: implement scenario selection */}
        </Row>
        <Row>
          <FormattedMessage {...messages.difficultyRatingTitle} /> {difficultyRating}%
        </Row>
        <Row>
          <Col
            style={{ textAlign: "left" }}
            span={12}
          >
            <GameButton
              group="new-game-window"
              type="okay"
              onClick={this.props.onOkayClick}
            />
          </Col>
          <Col
            style={{ textAlign: "right" }}
            span={12}
          >
            <GameButton
              group="new-game-window"
              type="cancel"
              onClick={this.props.onCancelClick}
            />
          </Col>
        </Row>
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
      <Row>
        {difficulties.map((d) => this.renderDifficulty(d, this.props.selectedGameDifficulty))}
      </Row>
    );
  }

  private renderDifficulty(difficulty: GameDifficulty, selectedDifficulty?: GameDifficulty) {
    return (
      <Col
        style={{ textAlign: "center" }}
        key={difficulty}
        span={6}
      >
        <GameDifficultyBox
          value={difficulty}
          selected={difficulty === selectedDifficulty}
          onClick={this.onGameDifficultyClick}
        />
        <div>
          <FormattedMessage {...getGameDifficultyMessage(difficulty)} />
        </div>
      </Col>
    );
  }

  private onGameDifficultyClick = (value: GameDifficulty) => {
    if (!this.props.onGameDifficultyChange) {
      return;
    }

    if (value !== this.props.selectedGameDifficulty) {
      this.props.onGameDifficultyChange(value);
    }
  }

  private renderOpponentSettings(settings: OpponentSetting[]) {
    return settings.map((s, i) => (
      <Col
        key={i}
        span={8}
      >
        <OpponentSettingBox
          index={i}
          value={s}
          onChange={this.onOpponentSettingChange}
        />
      </Col>
    ));
  }

  private onOpponentSettingChange = (index: number, setting: OpponentSetting) => {
    if (!this.props.onOpponentSettingsChange) {
      return;
    }

    const settings = [...this.props.opponentSettings];

    settings[index] = setting;

    this.props.onOpponentSettingsChange(settings);
  }
}
