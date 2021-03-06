import { Col, Row } from "antd";
import React from "react";

import { noop } from "heroes-helpers";

import * as styles from "./EditorSettingsWindow.module.scss";

import { SystemButton } from "../../base";
import { withGameWindow } from "../../core";

interface EditorSettingsWindowProps {
  readonly onConfirmClick: () => void;
  readonly onCancelClick: () => void;
}

class EditorSettingsWindow extends React.Component<EditorSettingsWindowProps> {
  public static readonly defaultProps: EditorSettingsWindowProps = {
    onCancelClick: noop,
    onConfirmClick: noop,
  };

  public render() {
    return (
      <div className={styles.root}>
        {this.props.children}
        <Row className={styles.actions}>
          <Col
            className={styles.confirm}
            span={12}
          >
            <SystemButton
              type="okay"
              onClick={this.props.onConfirmClick}
            />
          </Col>
          <Col
            className={styles.cancel}
            span={12}
          >
            <SystemButton
              type="cancel"
              onClick={this.props.onCancelClick}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

const ComponentWrapped = withGameWindow(448)(EditorSettingsWindow);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as EditorSettingsWindow,
  ComponentWrappedProps as EditorSettingsWindowProps,
};
