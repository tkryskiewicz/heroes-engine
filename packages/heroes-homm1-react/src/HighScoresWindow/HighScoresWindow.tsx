import React from "react";
import { FormattedMessage, FormattedNumber } from "react-intl";

import {
  CampaignGameScore,
  GameType,
  getCampaignGameRating,
  getStandardGameRating,
  HighScores,
  StandardGameScore,
} from "heroes-homm1";

import * as styles from "./HighScoresWindow.module.scss";

import { buttonImages, images } from "./assets";

import { CreatureIcon, ImageButton } from "../base";
import { GameText, ScreenWidth, withGameWindow } from "../core";
import { getCampaignNameMessage, getCreatureNameMessage } from "../messages";

interface Props {
  readonly scores: HighScores;
  readonly gameType: GameType;
  readonly onGameTypeClick: () => void;
  readonly onExitClick: () => void;
}

type DefaultProp =
  "onGameTypeClick" |
  "onExitClick";

class HighScoresWindow extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, DefaultProp> = {
    onExitClick: () => undefined,
    onGameTypeClick: () => undefined,
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
        <div className={styles.gameType}>
          <ImageButton
            data-test-id="game-type"
            images={this.props.gameType === GameType.Campaign ? buttonImages.campaign : buttonImages.standard}
            onClick={this.props.onGameTypeClick}
          />
        </div>
        <div className={styles.exit}>
          <ImageButton
            data-test-id="exit"
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
        <div className={styles.header}>
          <img
            className={styles.player}
            src={images.player}
          />
          <img
            className={styles.leader}
            src={images.leader}
          />
          <img
            className={styles.days}
            src={images.days}
          />
          <img
            className={styles.title}
            src={images.title}
          />
        </div>
        {scores.map(this.renderCampaignScore)}
      </div>
    );
  }

  private renderCampaignScore(score: CampaignGameScore, index: number) {
    const rating = getCampaignGameRating(score.daysCount);

    return (
      <div
        data-test-id="entry"
        className={styles.entry}
        key={index}
      >
        <div className={styles.player}>
          <GameText
            data-test-id="player-name"
            size="normal"
          >
            {score.playerName}
          </GameText>
        </div>
        <div className={styles.campaign}>
          <GameText
            data-test-id="campaign"
            size="normal"
          >
            <FormattedMessage {...getCampaignNameMessage(score.campaign)} />
          </GameText>
        </div>
        <div className={styles.days}>
          <GameText
            data-test-id="days"
            size="normal"
          >
            <FormattedNumber value={score.daysCount} />
          </GameText>
        </div>
        <div className={styles.title}>
          <GameText size="normal">
            <FormattedMessage {...getCreatureNameMessage(rating)} />
          </GameText>
        </div>
        <div className={styles.icon}>
          <CreatureIcon
            size="small"
            creature={rating}
          />
        </div>
      </div>
    );
  }

  private renderStandardGameScores(scores: StandardGameScore[]) {
    return (
      <div>
        <div className={styles.header}>
          <img
            className={styles.player}
            src={images.player}
          />
          <img
            className={styles.land}
            src={images.land}
          />
          <img
            className={styles.score}
            src={images.score}
          />
          <img
            className={styles.title}
            src={images.title}
          />
        </div>
        {scores.map(this.renderStandardScore)}
      </div>
    );
  }

  private renderStandardScore(score: StandardGameScore, index: number) {
    const rating = getStandardGameRating(score.score);

    return (
      <div
        data-test-id="entry"
        className={styles.entry}
        key={index}
      >
        <div className={styles.player}>
          <GameText
            data-test-id="player-name"
            size="normal"
          >
            {score.playerName}
          </GameText>
        </div>
        <div className={styles.scenario}>
          <GameText
            data-test-id="scenario"
            size="normal"
          >
            {score.scenario}
          </GameText>
        </div>
        <div className={styles.score}>
          <GameText
            data-test-id="score"
            size="normal"
          >
            <FormattedNumber value={score.score} />
          </GameText>
        </div>
        <div className={styles.title}>
          <GameText size="normal">
            <FormattedMessage {...getCreatureNameMessage(rating)} />
          </GameText>
        </div>
        <div className={styles.icon}>
          <CreatureIcon
            size="small"
            creature={rating}
          />
        </div>
      </div>
    );
  }
}

const ComponentWrapped = withGameWindow(ScreenWidth)(HighScoresWindow);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as HighScoresWindow,
  ComponentWrappedProps as HighScoresWindowProps,
};
