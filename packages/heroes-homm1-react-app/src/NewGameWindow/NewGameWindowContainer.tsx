import React from "react";
import { FormattedMessage } from "react-intl";

import { GameData, nextOption } from "heroes-core";
import { noop } from "heroes-helpers";
import { GameDifficulty, getGameDifficultyRating, getOpponentSettingRating, OpponentSetting } from "heroes-homm1";
import {
  GameDifficultyBox,
  GameParagraph,
  getGameDifficultyMessage,
  getOpponentSettingNameMessage,
  NewGameWindow,
  OpponentSettingBox,
} from "heroes-homm1-react";

import * as styles from "./NewGameWindowContainer.module.scss";

interface Props {
  readonly data: Pick<GameData, "alignments">;
  readonly gameDifficulty: GameDifficulty;
  readonly onGameDifficultyChange: (value: GameDifficulty) => void;
  readonly opponentSettings: OpponentSetting[];
  readonly onOpponentSettingsChange: (settings: OpponentSetting[]) => void;
  readonly playerColor: string;
  readonly onPlayerColorChange: (value: string) => void;
  readonly kingOfTheHill: boolean;
  readonly onKingOfTheHillChange: (value: boolean) => void;
  readonly scenarioName: string;
  readonly onSelectScenarioClick: () => void;
  readonly onOkayClick: () => void;
  readonly onCancelClick: () => void;
}

type DefaultProp =
  "onGameDifficultyChange" |
  "onOpponentSettingsChange" |
  "onPlayerColorChange" |
  "onKingOfTheHillChange" |
  "onSelectScenarioClick" |
  "onOkayClick" |
  "onCancelClick";

export class NewGameWindowContainer extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, DefaultProp> = {
    onCancelClick: noop,
    onGameDifficultyChange: noop,
    onKingOfTheHillChange: noop,
    onOkayClick: noop,
    onOpponentSettingsChange: noop,
    onPlayerColorChange: noop,
    onSelectScenarioClick: noop,
  };

  public render() {
    const difficultyRating = getGameDifficultyRating(this.props.gameDifficulty) +
      this.props.opponentSettings.reduce((p, c) => p + getOpponentSettingRating(c), 0);

    return (
      <NewGameWindow
        renderGameDifficulty={this.renderGameDifficulty}
        playerColor={this.props.playerColor}
        onPlayerColorClick={this.onPlayerColorClick}
        renderOpponentSetting={this.renderOpponentSetting}
        kingOfTheHill={this.props.kingOfTheHill}
        onKingOfTheHillChange={this.props.onKingOfTheHillChange}
        scenarioName={this.props.scenarioName}
        onSelectScenarioClick={this.props.onSelectScenarioClick}
        difficultyRating={difficultyRating}
        onOkayClick={this.props.onOkayClick}
        onCancelClick={this.props.onCancelClick}
      />
    );
  }

  private readonly renderGameDifficulty = (index: number) => {
    const difficulties = [
      GameDifficulty.Easy,
      GameDifficulty.Normal,
      GameDifficulty.Hard,
      GameDifficulty.Expert,
    ];

    const value = difficulties[index];

    return (
      <div className={styles.gameDifficulty}>
        <GameDifficultyBox
          data-test-id="game-difficulty"
          key={value}
          value={value}
          selected={value === this.props.gameDifficulty}
          onClick={this.props.onGameDifficultyChange}
        />
        <GameParagraph textSize="normal">
          <FormattedMessage {...getGameDifficultyMessage(value)} />
        </GameParagraph>
      </div>
    );
  }

  private readonly renderOpponentSetting = (index: number) => {
    const value = this.props.opponentSettings[index];

    return (
      <div className={styles.opponentSetting}>
        <OpponentSettingBox
          data-test-id="opponent-setting"
          key={index}
          index={index}
          value={value}
          onClick={this.onOpponentSettingClick}
        />
        <GameParagraph textSize="normal">
          <FormattedMessage {...getOpponentSettingNameMessage(value)} />
        </GameParagraph>
      </div>
    );
  }

  private readonly onOpponentSettingClick = (index: number, value: OpponentSetting) => {
    const newValue = nextOption(Object.values(OpponentSetting), value);

    const settings = [...this.props.opponentSettings];

    settings[index] = newValue;

    this.props.onOpponentSettingsChange(settings);
  }

  private readonly onPlayerColorClick = () => {
    const value = nextOption(this.props.data.alignments, this.props.playerColor);

    this.props.onPlayerColorChange(value);
  }
}

export type NewGameWindowContainerProps = ExtractPublicProps<typeof NewGameWindowContainer>;
