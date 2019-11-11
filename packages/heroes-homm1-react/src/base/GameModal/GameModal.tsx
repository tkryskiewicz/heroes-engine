import { Col, Row } from "antd";
import React from "react";

import { noop } from "heroes-helpers";

import * as styles from "./GameModal.module.scss";

import { withGameWindow } from "../../core";
import { SystemButton } from "../SystemButton";

type GameModalType =
  "yesNo" |
  "okayCancel" |
  "okay" |
  "cancel";

interface GameModalProps {
  readonly type: GameModalType;
  readonly size: number;
  readonly confirmDisabled: boolean;
  readonly onConfirmClick: () => void;
  readonly onCancelClick: () => void;
}

type DefaultProp =
  "size" |
  "confirmDisabled" |
  "onConfirmClick" |
  "onCancelClick";

class GameModal extends React.Component<GameModalProps> {
  public static readonly defaultProps: Pick<GameModalProps, DefaultProp> = {
    confirmDisabled: false,
    onCancelClick: noop,
    onConfirmClick: noop,
    size: 1,
  };

  public render() {
    return (
      <div className={styles.root}>
        {this.renderBackground(this.props.size)}
        <div className={styles.content}>
          {this.props.children}
        </div>
        <div className={styles.actions}>
          {this.renderActions(this.props.type)}
        </div>
      </div>
    );
  }

  private renderBackground(size: number) {
    return (
      <div>
        <div className={styles.header} />
        {[...new Array(size).keys()].map((i) => this.renderBody(i))}
        <div className={styles.footer} />
      </div>
    );
  }

  private renderBody(index: number) {
    return (
      <div
        key={index}
        data-test-id="body"
        className={styles.body}
      />
    );
  }

  private renderActions(modalType: GameModalType) {
    if (modalType === "yesNo" || modalType === "okayCancel") {
      return (
        <Row>
          <Col
            className={styles.actionsConfirm}
            span={12}
          >
            <SystemButton
              data-test-id="confirm"
              type={modalType === "yesNo" ? "yes" : "okay"}
              disabled={this.props.confirmDisabled}
              onClick={this.props.onConfirmClick}
            />
          </Col>
          <Col
            className={styles.actionsCancel}
            span={12}
          >
            <SystemButton
              data-test-id="cancel"
              type={modalType === "yesNo" ? "no" : "cancel"}
              onClick={this.props.onCancelClick}
            />
          </Col>
        </Row>
      );
    }

    if (modalType === "okay") {
      return (
      <Row>
        <SystemButton
          data-test-id="confirm"
          type="okay"
          disabled={this.props.confirmDisabled}
          onClick={this.props.onConfirmClick}
        />
      </Row>
      );
    }

    return (
      <Row>
        <SystemButton
          data-test-id="cancel"
          type="cancel"
          onClick={this.props.onCancelClick}
        />
      </Row>
    );
  }
}

const ComponentWrapped = withGameWindow(286)(GameModal);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as GameModal,
  ComponentWrappedProps as GameModalProps,
};
