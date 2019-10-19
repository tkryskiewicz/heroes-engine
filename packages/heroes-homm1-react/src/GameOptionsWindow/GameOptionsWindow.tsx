import React from "react";
import { FormattedMessage } from "react-intl";

import { nextOption, previousOption } from "heroes-core";
import { isSoundEnabled, MovementSpeed, SoundVolume } from "heroes-homm1";

import * as styles from "./GameOptionsWindow.module.scss";

import { buttonImages, movementSpeed, switchImages } from "./assets";

import { ImageButton, ImageSwitch } from "../base";
import { GameText, withGameWindow } from "../core";
import { getMovementSpeedMessage, messages } from "./messages";

interface Props {
  readonly onNewGameClick?: () => void;
  readonly onLoadGameClick?: () => void;
  readonly onSaveGameClick?: () => void;
  readonly onQuitClick?: () => void;
  readonly musicVolume: SoundVolume;
  readonly onMusicVolumeChange: (volume: SoundVolume) => void;
  readonly effectsVolume: SoundVolume;
  readonly onEffectsVolumeChange: (volume: SoundVolume) => void;
  readonly movementSpeed: MovementSpeed;
  readonly onMovementSpeedChange: (value: MovementSpeed) => void;
  readonly autoSave: boolean;
  readonly onAutoSaveChange?: (value: boolean) => void;
  readonly showPath: boolean;
  readonly onShowPathChange?: (value: boolean) => void;
  readonly viewEnemyMovement: boolean;
  readonly onViewEnemyMovementChange?: (value: boolean) => void;
  readonly onOkayClick?: () => void;
  readonly onInfoClick?: () => void;
}

type DefaultProp =
  "musicVolume" |
  "effectsVolume" |
  "movementSpeed" |
  "autoSave" |
  "showPath" |
  "viewEnemyMovement" |
  "onMusicVolumeChange" |
  "onEffectsVolumeChange" |
  "onMovementSpeedChange";

class GameOptionsWindow extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, DefaultProp> = {
    autoSave: false,
    effectsVolume: SoundVolume.Off,
    movementSpeed: MovementSpeed.Walk,
    musicVolume: SoundVolume.Off,
    onEffectsVolumeChange: () => undefined,
    onMovementSpeedChange: () => undefined,
    onMusicVolumeChange: () => undefined,
    showPath: false,
    viewEnemyMovement: false,
  };

  public render() {
    return (
      <div className={styles.root}>
        <ImageButton
          className={styles.newGame}
          data-test-id="new-game"
          images={buttonImages.newGame}
          onClick={this.props.onNewGameClick}
        />
        <ImageButton
          className={styles.loadGame}
          data-test-id="load-game"
          images={buttonImages.loadGame}
          onClick={this.props.onLoadGameClick}
        />
        <ImageButton
          className={styles.saveGame}
          data-test-id="save-game"
          images={buttonImages.saveGame}
          onClick={this.props.onSaveGameClick}
        />
        <ImageButton
          className={styles.quit}
          data-test-id="quit"
          images={buttonImages.quit}
          onClick={this.props.onQuitClick}
        />
        <div
          data-test-id="music-volume-container"
          className={styles.musicVolumeContainer}
        >
          <GameText size="normal">
            <FormattedMessage {...messages.musicVolume} />
          </GameText>
          <ImageSwitch
            data-test-id="music-volume"
            className={styles.musicVolume}
            images={switchImages.music}
            checked={isSoundEnabled(this.props.musicVolume)}
            onChange={this.onMusicVolumeChange}
          />
          {this.renderOnOff(isSoundEnabled(this.props.musicVolume))}
          {this.renderVolume(this.props.musicVolume)}
        </div>
        <div
          data-test-id="effects-volume-container"
          className={styles.effectsVolumeContainer}
        >
          <GameText size="normal">
            <FormattedMessage {...messages.effectsVolume} />
          </GameText>
          <ImageSwitch
            data-test-id="effects-volume"
            className={styles.effectsVolume}
            images={switchImages.effects}
            checked={isSoundEnabled(this.props.effectsVolume)}
            onChange={this.onEffectsVolumeChange}
          />
          {this.renderOnOff(isSoundEnabled(this.props.effectsVolume))}
          {this.renderVolume(this.props.effectsVolume)}
        </div>
        <div
          data-test-id="movement-speed-container"
          className={styles.movementSpeedContainer}
        >
          <GameText size="normal">
            <FormattedMessage {...messages.movementSpeed} />
          </GameText>
          {this.renderMovementSpeed(this.props.movementSpeed)}
          <GameText
            data-test-id="value"
            size="normal"
          >
            <FormattedMessage {...getMovementSpeedMessage(this.props.movementSpeed)} />
          </GameText>
        </div>
        <div
          data-test-id="auto-save-container"
          className={styles.autoSaveContainer}
        >
          <GameText size="normal">
            <FormattedMessage {...messages.autoSave} />
          </GameText>
          <ImageSwitch
            data-test-id="auto-save"
            className={styles.autoSave}
            images={switchImages.autoSave}
            checked={this.props.autoSave}
            onChange={this.props.onAutoSaveChange}
          />
          {this.renderOnOff(this.props.autoSave)}
        </div>
        <div
          data-test-id="show-path-container"
          className={styles.showPathContainer}
        >
          <GameText size="normal">
            <FormattedMessage {...messages.showPath} />
          </GameText>
          <ImageSwitch
            data-test-id="show-path"
            className={styles.showPath}
            images={switchImages.showPath}
            checked={this.props.showPath}
            onChange={this.props.onShowPathChange}
          />
          {this.renderOnOff(this.props.showPath)}
        </div>
        <div
          data-test-id="view-enemy-movement-container"
          className={styles.viewEnemyMovementContainer}
        >
          <GameText size="normal">
            <FormattedMessage {...messages.viewEnemyMovement} />
          </GameText>
          <ImageSwitch
            data-test-id="view-enemy-movement"
            className={styles.viewEnemyMovement}
            images={switchImages.viewEnemyMovement}
            checked={this.props.viewEnemyMovement}
            onChange={this.props.onViewEnemyMovementChange}
          />
          {this.renderOnOff(this.props.viewEnemyMovement)}
        </div>
        <ImageButton
          className={styles.okay}
          data-test-id="okay"
          images={buttonImages.okay}
          onClick={this.props.onOkayClick}
        />
        <ImageButton
          className={styles.info}
          data-test-id="info"
          images={buttonImages.info}
          onClick={this.props.onInfoClick}
        />
      </div>
    );
  }

  private renderOnOff(value: boolean) {
    return (
      <GameText
        data-test-id="on-off"
        size="normal"
      >
        <FormattedMessage {...value ? messages.on : messages.off} />
      </GameText>
    );
  }

  private renderVolume(value: SoundVolume) {
    return isSoundEnabled(value) && value !== SoundVolume.On && (
      <div data-test-id="volume">
        <GameText size="normal">
          <FormattedMessage {...messages.volume} values={{ value }} />
        </GameText>
      </div>
    );
  }

  private renderMovementSpeed(value: MovementSpeed) {
    return (
      <img
        data-test-id="movement-speed"
        className={styles.movementSpeed}
        src={movementSpeed[value]}
        onClick={this.onMovementSpeedChange}
      />
    );
  }

  private readonly onMusicVolumeChange = () => {
    const value = previousOption<SoundVolume>(Object.values(SoundVolume)
      .filter((v): v is SoundVolume => typeof v === "number"), this.props.musicVolume);

    this.props.onMusicVolumeChange(value);
  }

  private readonly onEffectsVolumeChange = () => {
    const value = previousOption<SoundVolume>(Object.values(SoundVolume)
      .filter((v): v is SoundVolume => typeof v === "number"), this.props.effectsVolume);

    this.props.onEffectsVolumeChange(value);
  }

  private readonly onMovementSpeedChange = () => {
    const value = nextOption(Object.values(MovementSpeed), this.props.movementSpeed);

    this.props.onMovementSpeedChange(value);
  }
}

const ComponentWrapped = withGameWindow(322)(GameOptionsWindow);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as GameOptionsWindow,
  ComponentWrappedProps as GameOptionsWindowProps,
};
