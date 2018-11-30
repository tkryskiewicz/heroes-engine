import { Col, Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { changeMovementSpeed, changeVolume, MovementSpeed, SoundVolume } from "heroes-homm1";

import "./GameOptions.scss";

import { movementSpeedImages } from "./movement-speed";

import { GameButton } from "../GameButton";
import { GameSwitch } from "../GameSwitch";
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

export class GameOptions extends React.Component<GameOptionsProps> {
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
      <div className="game-options">
        <Row>
          <Col span={12}>
            <GameButton
              group="game-options"
              type="new-game"
              onClick={this.props.onNewGameClick}
            />
          </Col>
          <Col span={12}>
            <GameButton
              group="game-options"
              type="load-game"
              onClick={this.props.onLoadGameClick}
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <GameButton
              group="game-options"
              type="save-game"
              onClick={this.props.onSaveGameClick}
            />
          </Col>
          <Col span={12}>
            <GameButton
              group="game-options"
              type="quit"
              onClick={this.props.onQuitClick}
            />
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormattedMessage {...messages.musicVolume} />
            <div>
              <GameSwitch
                type="music"
                checked={this.props.musicVolume !== SoundVolume.Off}
                onChange={this.onMusicVolumeChange}
              />
            </div>
            {this.renderOnOff(this.props.musicVolume !== SoundVolume.Off)}
            {this.renderVolume(this.props.musicVolume)}
          </Col>
          <Col span={8}>
            <FormattedMessage {...messages.effectsVolume} />
            <div>
              <GameSwitch
                type="effects"
                checked={this.props.effectsVolume !== SoundVolume.Off}
                onChange={this.onEffectsVolumeChange}
              />
            </div>
            {this.renderOnOff(this.props.effectsVolume !== SoundVolume.Off)}
            {this.renderVolume(this.props.effectsVolume)}
          </Col>
          <Col span={8}>
            <FormattedMessage {...messages.movementSpeed} />
            <div>
              {this.renderMovementSpeed(this.props.movementSpeed)}
            </div>
            <FormattedMessage {...getMovementSpeedMessage(this.props.movementSpeed)} />
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormattedMessage {...messages.autoSave} />
            <div>
              <GameSwitch
                type="auto-save"
                checked={this.props.autoSave}
                onChange={this.props.onAutoSaveChange}
              />
            </div>
            {this.renderOnOff(this.props.autoSave)}
          </Col>
          <Col span={8}>
            <FormattedMessage {...messages.showPath} />
            <div>
              <GameSwitch
                type="show-path"
                checked={this.props.showPath}
                onChange={this.props.onShowPathChange}
              />
            </div>
            {this.renderOnOff(this.props.showPath)}
          </Col>
          <Col span={8}>
            <FormattedMessage {...messages.viewEnemyMovement} />
            <div>
              <GameSwitch
                type="view-enemy-movement"
                checked={this.props.viewEnemyMovement}
                onChange={this.props.onViewEnemyMovementChange}
              />
            </div>
            {this.renderOnOff(this.props.viewEnemyMovement)}
          </Col>
        </Row>
        <Row>
          <Col
            className="game-options-okay"
            span={12}
          >
            <GameButton
              group="game-options"
              type="okay"
              onClick={this.props.onOkayClick}
            />
          </Col>
          <Col
            className="game-options-info"
            span={12}
          >
            <GameButton
              group="game-options"
              type="info"
              onClick={this.props.onInfoClick}
            />
          </Col>
        </Row>
      </div>
    );
  }

  private renderOnOff(value: boolean) {
    return (
      <FormattedMessage {...value ? messages.on : messages.off} />
    );
  }

  private renderVolume(value: SoundVolume) {
    return value !== SoundVolume.On && value !== SoundVolume.Off && (
      <div>
        <FormattedMessage {...messages.volume} values={{ value }} />
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
