import * as React from "react";
import { FormattedMessage } from "react-intl";

import { nextOption, previousOption } from "heroes-core";
import { MovementSpeed, SoundVolume } from "heroes-homm1";

import * as styles from "./GameOptions.module.scss";

import { buttonImages, movementSpeedImages, switchImages } from "./assets";

import { ImageButton, ImageSwitch } from "../base";
import { GameText, withGameWindow } from "../core";
import { getMovementSpeedMessage, messages } from "./messages";

interface GameOptionsProps {
  readonly onNewGameClick: () => void;
  readonly onLoadGameClick: () => void;
  readonly onSaveGameClick: () => void;
  readonly onQuitClick: () => void;
  readonly musicVolume: SoundVolume;
  readonly onMusicVolumeChange: (volume: SoundVolume) => void;
  readonly effectsVolume: SoundVolume;
  readonly onEffectsVolumeChange: (volume: SoundVolume) => void;
  readonly movementSpeed: MovementSpeed;
  readonly onMovementSpeedChange: (value: MovementSpeed) => void;
  readonly autoSave: boolean;
  readonly onAutoSaveChange: (value: boolean) => void;
  readonly showPath: boolean;
  readonly onShowPathChange: (value: boolean) => void;
  readonly viewEnemyMovement: boolean;
  readonly onViewEnemyMovementChange: (value: boolean) => void;
  readonly onOkayClick: () => void;
  readonly onInfoClick: () => void;
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
  public static readonly defaultProps: Pick<GameOptionsProps, DefaultProp> = {
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

  private readonly onMusicVolumeChange = () => {
    const value = previousOption<SoundVolume>(Object.values(SoundVolume).filter(Number.isInteger),
      this.props.musicVolume);

    this.props.onMusicVolumeChange(value);
  }

  private readonly onEffectsVolumeChange = () => {
    const value = previousOption<SoundVolume>(Object.values(SoundVolume).filter(Number.isInteger),
      this.props.effectsVolume);

    this.props.onEffectsVolumeChange(value);
  }

  private readonly onMovementSpeedChange = () => {
    const value = nextOption(Object.values(MovementSpeed), this.props.movementSpeed);

    this.props.onMovementSpeedChange(value);
  }
}

const ComponentWrapped = withGameWindow(322)(GameOptions);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as GameOptions,
  ComponentWrappedProps as GameOptionsProps,
};
