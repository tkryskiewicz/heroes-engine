import { Col, Row } from "antd";
import * as React from "react";

import "./GameModal.scss";

import { buttonImages } from "./assets";

import { withGameWindow } from "../../core";
import { ImageButton } from "../ImageButton";

type GameModalType =
  "yesNo" |
  "okayCancel" |
  "okay" |
  "cancel";

export interface GameModalProps {
  type: GameModalType;
  size: number;
  confirmDisabled: boolean;
  onConfirmClick: () => void;
  onCancelClick: () => void;
}

type DefaultProp =
  "size" |
  "confirmDisabled" |
  "onConfirmClick" |
  "onCancelClick";

class GameModal extends React.Component<GameModalProps> {
  public static defaultProps: Pick<GameModalProps, DefaultProp> = {
    confirmDisabled: false,
    onCancelClick: () => undefined,
    onConfirmClick: () => undefined,
    size: 1,
  };

  public render() {
    return (
      <div className="game-modal">
        {this.renderBackground(this.props.size)}
        <div className="game-modal-content">
          {this.props.children}
        </div>
        <div className="game-modal-actions">
          {this.renderActions(this.props.type)}
        </div>
      </div>
    );
  }

  private renderBackground(size: number) {
    return (
      <div>
        <div className="game-modal-header" />
        {[...new Array(size).keys()].map((i) => this.renderBody(i))}
        <div className="game-modal-footer" />
      </div>
    );
  }

  private renderBody(index: number) {
    return (
      <div
        key={index}
        className="game-modal-body"
      />
    );
  }

  private renderActions(modalType: GameModalType) {
    if (modalType === "yesNo" || modalType === "okayCancel") {
      return (
        <Row>
          <Col
            className="game-modal-actions-confirm"
            span={12}
          >
            <ImageButton
              images={modalType === "yesNo" ? buttonImages.yes : buttonImages.okay}
              disabled={this.props.confirmDisabled}
              onClick={this.props.onConfirmClick}
            />
          </Col>
          <Col
            className="game-modal-actions-cancel"
            span={12}
          >
            <ImageButton
              images={modalType === "yesNo" ? buttonImages.no : buttonImages.cancel}
              onClick={this.props.onCancelClick}
            />
          </Col>
        </Row>
      );
    }

    return (
      <Row>
        <ImageButton
          images={modalType === "okay" ? buttonImages.okay : buttonImages.cancel}
          disabled={modalType === "okay" ? this.props.confirmDisabled : false}
          onClick={modalType === "okay" ? this.props.onConfirmClick : this.props.onCancelClick}
        />
      </Row>
    );
  }
}

const GameModalWrapped = withGameWindow(286)<typeof GameModal, GameModalProps>(GameModal);

export {
  GameModalWrapped as GameModal,
};
