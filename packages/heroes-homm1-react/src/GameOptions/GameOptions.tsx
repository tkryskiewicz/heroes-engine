import * as React from "react";
import { FormattedMessage } from "react-intl";

import { changeMovementSpeed, changeVolume, MovementSpeed, SoundVolume } from "heroes-homm1";

import * as styles from "./GameOptions.module.scss";

import { buttonImages, movementSpeedImages, switchImages } from "./assets";

import { ImageButton, ImageSwitch } from "../base";
import { GameText, withGameWindow } from "../core";
import { getMovementSpeedMessage, messages } from "./messages";

export interface GameOptionsProps {
  onNewGameClick: () => void;
  onLoadGameClick: () => void;
  onSaveGameClick: () => void;
  onQuitClick: () => void;
  musicVolume: SoundVolume;
  onMusicVolumeChange: (volume: SoundVolume) => void;
  effectsVolume: SoundVolume;
  onEffectsVolumeChange: (volume: SoundVolume) => void;
  movementSpeed: MovementSpeed;
  onMovementSpeedChange: (value: MovementSpeed) => void;
  autoSave: boolean;
  onAutoSaveChange: (value: boolean) => void;
  showPath: boolean;
  onShowPathChange: (value: boolean) => void;
  viewEnemyMovement: boolean;
  onViewEnemyMovementChange: (value: boolean) => void;
  onOkayClick: () => void;
  onInfoClick: () => void;
}

type DefaultProp =
  "onNewGameClick" |
  "onLoadGameClick" |
  "onSaveGameClick" |
  "onQuitClick" |
  "onMusicVolumeChange" |
  "onEffectsVolumeChange" |
  "onMovementSpeedChange" |
  "onAutoSaveChange" |
  "onShowPathChange" |
  "onViewEnemyMovementChange" |
  "onOkayClick" |
  "onInfoClick";

class GameOptions extends React.Component<GameOptionsProps> {
  public static defaultProps: Pick<GameOptionsProps, DefaultProp> = {
    onAutoSaveChange: () => undefined,
    onEffectsVolumeChange: () => undefined,
    onInfoClick: () => undefined,
    onLoadGameClick: () => undefined,
    onMovementSpeedChange: () => undefined,
    onMusicVolumeChange: () => undefined,
    onNewGameClick: () => undefined,
    onOkayClick: () => undefined,
    onQuitClick: () => undefined,
    onSaveGameClick: () => undefined,
    onShowPathChange: () => undefined,
    onViewEnemyMovementChange: () => undefined,
  };

  public render() {
    return (
      <div className={styles.root}>
        <div className={styles.newGame}>
          <ImageButton
            images={buttonImages.newGame}
            onClick={this.props.onNewGameClick}
          />
        </div>
        <div className={styles.loadGame}>
          <ImageButton
            images={buttonImages.loadGame}
            onClick={this.props.onLoadGameClick}
          />
        </div>
        <div className={styles.saveGame}>
          <ImageButton
            images={buttonImages.saveGame}
            onClick={this.props.onSaveGameClick}
          />
        </div>
        <div className={styles.quit}>
          <ImageButton
            images={buttonImages.quit}
            onClick={this.props.onQuitClick}
          />
        </div>
        <div className={styles.musicVolume}>
          <GameText size="normal">
            <FormattedMessage {...messages.musicVolume} />
          </GameText>
          <div>
            <ImageSwitch
              images={switchImages.music}
              checked={this.props.musicVolume !== SoundVolume.Off}
              onChange={this.onMusicVolumeChange}
            />
          </div>
          {this.renderOnOff(this.props.musicVolume !== SoundVolume.Off)}
          {this.renderVolume(this.props.musicVolume)}
        </div>
        <div className={styles.effectsVolume}>
          <GameText size="normal">
            <FormattedMessage {...messages.effectsVolume} />
          </GameText>
          <div>
            <ImageSwitch
              images={switchImages.effects}
              checked={this.props.effectsVolume !== SoundVolume.Off}
              onChange={this.onEffectsVolumeChange}
            />
          </div>
          {this.renderOnOff(this.props.effectsVolume !== SoundVolume.Off)}
          {this.renderVolume(this.props.effectsVolume)}
        </div>
        <div className={styles.movementSpeed}>
          <GameText size="normal">
            <FormattedMessage {...messages.movementSpeed} />
          </GameText>
          <div>
            {this.renderMovementSpeed(this.props.movementSpeed)}
          </div>
          <GameText size="normal">
            <FormattedMessage {...getMovementSpeedMessage(this.props.movementSpeed)} />
          </GameText>
        </div>
        <div className={styles.autoSave}>
          <GameText size="normal">
            <FormattedMessage {...messages.autoSave} />
          </GameText>
          <div>
            <ImageSwitch
              images={switchImages.autoSave}
              checked={this.props.autoSave}
              onChange={this.props.onAutoSaveChange}
            />
          </div>
          {this.renderOnOff(this.props.autoSave)}
        </div>
        <div className={styles.showPath}>
          <GameText size="normal">
            <FormattedMessage {...messages.showPath} />
          </GameText>
          <div>
            <ImageSwitch
              images={switchImages.showPath}
              checked={this.props.showPath}
              onChange={this.props.onShowPathChange}
            />
          </div>
          {this.renderOnOff(this.props.showPath)}
        </div>
        <div className={styles.viewEnemyMovement}>
          <GameText size="normal">
            <FormattedMessage {...messages.viewEnemyMovement} />
          </GameText>
          <div>
            <ImageSwitch
              images={switchImages.viewEnemyMovement}
              checked={this.props.viewEnemyMovement}
              onChange={this.props.onViewEnemyMovementChange}
            />
          </div>
          {this.renderOnOff(this.props.viewEnemyMovement)}
        </div>
        <div className={styles.okay}>
          <ImageButton
            images={buttonImages.okay}
            onClick={this.props.onOkayClick}
          />
        </div>
        <div className={styles.info}>
          <ImageButton
            images={buttonImages.info}
            onClick={this.props.onInfoClick}
          />
        </div>
      </div>
    );
  }

  private renderOnOff(value: boolean) {
    return (
      <GameText size="normal">
        <FormattedMessage {...value ? messages.on : messages.off} />
      </GameText>
    );
  }

  private renderVolume(value: SoundVolume) {
    return value !== SoundVolume.On && value !== SoundVolume.Off && (
      <div>
        <GameText size="normal">
          <FormattedMessage {...messages.volume} values={{ value }} />
        </GameText>
      </div>
    );
  }

  private renderMovementSpeed(value: MovementSpeed) {
    return (
      <img
        src={movementSpeedImages[value]}
        onClick={this.onMovementSpeedChange}
      />
    );
  }

  private onMusicVolumeChange = () => {
    const value = changeVolume(this.props.musicVolume);

    this.props.onMusicVolumeChange(value);
  }

  private onEffectsVolumeChange = () => {
    const value = changeVolume(this.props.effectsVolume);

    this.props.onEffectsVolumeChange(value);
  }

  private onMovementSpeedChange = () => {
    const movementSpeed = changeMovementSpeed(this.props.movementSpeed);

    this.props.onMovementSpeedChange(movementSpeed);
  }
}

const GameOptionsWrapped = withGameWindow(322)(GameOptions);

export {
  GameOptionsWrapped as GameOptions,
};
