import { Col, Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import {
  CampaignGameScore,
  GameType,
  getCampaignGameRating,
  getStandardGameRating,
  StandardGameScore,
} from "heroes-homm1";

import { CreatureIcon } from "../CreatureIcon";
import { GameButton } from "../GameButton";
import { GameText } from "../GameText";
import { getCampaignNameMessage, getCreatureNameMessage } from "../messages";

export interface HighScoresWindowProps {
  scores: {
    [GameType.Campaign]: CampaignGameScore[];
    [GameType.Standard]: StandardGameScore[];
  };
  gameType: GameType;
  onGameTypeChange?: (value: GameType) => void;
  onExitClick?: () => void;
}

export class HighScoresWindow extends React.Component<HighScoresWindowProps> {
  public render() {
    const style: React.CSSProperties = {
      background: "url('assets/ui/high-scores-window/background.jpg')",
      height: 480,
      position: "relative",
      width: 640,
    };

    const scoresStyle: React.CSSProperties = {
      left: 80,
      position: "absolute",
      top: 29,
      width: 505,
    };

    const categoryButtonStyle: React.CSSProperties = {
      left: 8,
      position: "absolute",
      top: 314,
    };

    const exitButtonStyle: React.CSSProperties = {
      left: 603,
      position: "absolute",
      top: 314,
    };

    const scores = this.props.gameType === GameType.Campaign ?
      this.renderCampaignGameScores(this.props.scores[GameType.Campaign]) :
      this.renderStandardGameScores(this.props.scores[GameType.Standard]);

    return (
      <div style={style}>
        <div style={scoresStyle}>
          {scores}
        </div>
        <div style={categoryButtonStyle}>
          <GameButton
            group="high-scores-window"
            type={this.props.gameType === GameType.Campaign ? "campaign" : "standard"}
            onClick={this.onCategoryClick}
          />
        </div>
        <div style={exitButtonStyle}>
          <GameButton
            group="high-scores-window"
            type="exit"
            onClick={this.props.onExitClick}
          />
        </div>
      </div>
    );
  }

  private renderCampaignGameScores(scores: CampaignGameScore[]) {
    const headerStyle: React.CSSProperties = {
      marginBottom: 13,
    };

    return (
      <div>
        <Row style={headerStyle}>
          <Col span={1} />
          <Col span={8}>
            <img src="assets/ui/high-scores-window/player.jpg" />
          </Col>
          <Col span={5}>
            <img src="assets/ui/high-scores-window/leader.jpg" />
          </Col>
          <Col span={4}>
            <img src="assets/ui/high-scores-window/days.jpg" />
          </Col>
          <Col span={5}>
            <img src="assets/ui/high-scores-window/title.jpg" />
          </Col>
        </Row>
        {scores.map(this.renderCampaignScore)}
      </div>
    );
  }

  private renderCampaignScore(score: CampaignGameScore, index: number) {
    const rating = getCampaignGameRating(score.daysCount);

    const style: React.CSSProperties = {
      marginBottom: 8,
    };

    return (
      <Row
        style={style}
        key={index}
      >
        <Col span={1} />
        <Col span={7}>
          <GameText size="normal">
            {score.playerName}
          </GameText>
        </Col>
        <Col span={7}>
          <GameText size="normal">
            <FormattedMessage {...getCampaignNameMessage(score.campaign)} />
          </GameText>
        </Col>
        <Col span={3}>
          <GameText size="normal">
            {score.daysCount}
          </GameText>
        </Col>
        <Col span={4}>
          <GameText size="normal">
            <FormattedMessage {...getCreatureNameMessage(rating)} />
          </GameText>
        </Col>
        <Col span={2}>
          <CreatureIcon
            size="small"
            creature={rating}
          />
        </Col>
      </Row>
    );
  }

  private renderStandardGameScores(scores: StandardGameScore[]) {
    const headerStyle: React.CSSProperties = {
      marginBottom: 13,
    };

    return (
      <div>
        <Row style={headerStyle}>
          <Col span={1} />
          <Col span={9}>
            <img src="assets/ui/high-scores-window/player.jpg" />
          </Col>
          <Col span={5}>
            <img src="assets/ui/high-scores-window/land.jpg" />
          </Col>
          <Col span={4}>
            <img src="assets/ui/high-scores-window/score.jpg" />
          </Col>
          <Col span={5}>
            <img src="assets/ui/high-scores-window/title.jpg" />
          </Col>
        </Row>
        {scores.map(this.renderStandardScore)}
      </div>
    );
  }

  private renderStandardScore(score: StandardGameScore, index: number) {
    const rating = getStandardGameRating(score.score);

    const style: React.CSSProperties = {
      marginBottom: 8,
    };

    return (
      <Row
        style={style}
        key={index}
      >
        <Col span={1} />
        <Col span={7}>
          <GameText size="normal">
            {score.playerName}
          </GameText>
        </Col>
        <Col span={7}>
          <GameText size="normal">
            {score.scenario}
          </GameText>
        </Col>
        <Col span={3}>
          <GameText size="normal">
            {score.score}
          </GameText>
        </Col>
        <Col span={4}>
          <GameText size="normal">
            <FormattedMessage {...getCreatureNameMessage(rating)} />
          </GameText>
        </Col>
        <Col span={2}>
          <CreatureIcon
            size="small"
            creature={rating}
          />
        </Col>
      </Row>
    );
  }

  private onCategoryClick = () => {
    if (!this.props.onGameTypeChange) {
      return;
    }

    const value = this.props.gameType === GameType.Campaign ?
      GameType.Standard :
      GameType.Campaign;

    this.props.onGameTypeChange(value);
  }
}
