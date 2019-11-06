import { connect } from "react-redux";

import {
  GameDifficulty,
  getGameDifficultyRating,
  getOpponentSettingRating,
  OpponentSetting,
  ScenarioDifficulty,
  ScenarioSize,
} from "heroes-homm1";
import { StandardScenarioInfoWindow, StandardScenarioInfoWindowProps } from "heroes-homm1-react";
import { AppState } from "heroes-homm1-state";

// FIXME: extract to heroes-homm1 ?
const getGameRating = (gameDifficulty: GameDifficulty, opponentSettings: OpponentSetting[]) =>
  getGameDifficultyRating(gameDifficulty) +
  opponentSettings.reduce((p, c) => p + getOpponentSettingRating(c), 0);

type StateProp =
  "scenarioName" |
  "gameDifficulty" |
  "opponentSettings" |
  "playerColor" |
  "kingOfTheHill" |
  "difficultyRating" |
  "scenarioSize" |
  "scenarioDescription" |
  "scenarioDifficulty";

const mapStateToProps = (state: AppState): Required<Pick<StandardScenarioInfoWindowProps, StateProp>> => ({
  difficultyRating: getGameRating(GameDifficulty.Easy, []) / 100,
  gameDifficulty: GameDifficulty.Easy,
  kingOfTheHill: false,
  opponentSettings: [],
  playerColor: state.game.alignment,
  scenarioDescription: state.game.scenario.description,
  scenarioDifficulty: ScenarioDifficulty.Easy,
  scenarioName: state.game.scenario.name,
  scenarioSize: ScenarioSize.Small,
});

const ComponentConnected = connect(mapStateToProps)(StandardScenarioInfoWindow);

type ComponentConnectedProps = ExtractProps<typeof ComponentConnected>;

export {
  ComponentConnected as StandardScenarioInfoWindow,
  ComponentConnectedProps as StandardScenarioInfoWindowProps,
};
