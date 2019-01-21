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

import * as styles from "./HighScoresWindow.module.scss";

import { buttonImages, DaysImage, LandImage, LeaderImage, PlayerImage, ScoreImage, TitleImage } from "./assets";

import { CreatureIcon, ImageButton } from "../base";
import { GameText } from "../core";
import { getCampaignNameMessage, getCreatureNameMessage } from "../messages";

export interface HighScoresWindowProps {
  scores: {
    [GameType.Campaign]: CampaignGameScore[];
    [GameType.Standard]: StandardGameScore[];
  };
  gameType: GameType;
  onGameTypeChange: (value: GameType) => void;
  onExitClick: () => void;
}

export class HighScoresWindow extends React.Component<HighScoresWindowProps> {
  public static defaultProps: Pick<HighScoresWindowProps, "onGameTypeChange" | "onExitClick"> = {
    onExitClick: () => undefined,
    onGameTypeChange: () => undefined,
  };

  public render() {
    const scores = this.props.gameType === GameType.Campaign ?
      this.renderCampaignGameScores(this.props.scores[GameType.Campaign]) :
      this.renderStandardGameScores(this.props.scores[GameType.Standard]);

    return (
      <div className={styles.root}>
        <div className={styles.scores}>
          {scores}
        </div>
        <div className={styles.category}>
          <ImageButton
            images={this.props.gameType === GameType.Campaign ? buttonImages.campaign : buttonImages.standard}
            onClick={this.onCategoryClick}
          />
        </div>
        <div className={styles.exit}>
          <ImageButton
            images={buttonImages.exit}
            onClick={this.props.onExitClick}
          />
        </div>
      </div>
    );
  }

  private renderCampaignGameScores(scores: CampaignGameScore[]) {
    return (
      <div>
        <Row className={styles.header}>
          <Col span={1} />
          <Col span={8}>
            <img src={PlayerImage} />
          </Col>
          <Col span={5}>
            <img src={LeaderImage} />
          </Col>
          <Col span={4}>
            <img src={DaysImage} />
          </Col>
          <Col span={5}>
            <img src={TitleImage} />
          </Col>
        </Row>
        {scores.map(this.renderCampaignScore)}
      </div>
    );
  }

  private renderCampaignScore(score: CampaignGameScore, index: number) {
    const rating = getCampaignGameRating(score.daysCount);

    return (
      <Row
        className={styles.score}
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
    return (
      <div>
        <Row className={styles.header}>
          <Col span={1} />
          <Col span={9}>
            <img src={PlayerImage} />
          </Col>
          <Col span={5}>
            <img src={LandImage} />
          </Col>
          <Col span={4}>
            <img src={ScoreImage} />
          </Col>
          <Col span={5}>
            <img src={TitleImage} />
          </Col>
        </Row>
        {scores.map(this.renderStandardScore)}
      </div>
    );
  }

  private renderStandardScore(score: StandardGameScore, index: number) {
    const rating = getStandardGameRating(score.score);

    return (
      <Row
        className={styles.score}
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
    const value = this.props.gameType === GameType.Campaign ?
      GameType.Standard :
      GameType.Campaign;

    this.props.onGameTypeChange(value);
  }
}
