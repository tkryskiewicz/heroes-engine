import { Col, Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { EditorObjectType, EraseObjectsSettings } from "heroes-homm1";

import * as styles from "./EraseOptionSettingsWindow.module.scss";

import { GameCheckbox, SystemButton } from "../../base";
import { GameText, withGameWindow } from "../../core";
import { getEditorObjectTypeNameMessage } from "../../messages";
import { messages } from "./messages";

interface EraseOptionSettingsWindowProps {
  readonly value: EraseObjectsSettings;
  readonly onValueChange: (value: EraseObjectsSettings) => void;
  readonly onConfirmClick: () => void;
  readonly onCancelClick: () => void;
}

type DefaultProp =
  "onValueChange" |
  "onConfirmClick" |
  "onCancelClick";

class EraseOptionSettingsWindow extends React.Component<EraseOptionSettingsWindowProps> {
  public static readonly defaultProps: Pick<EraseOptionSettingsWindowProps, DefaultProp> = {
    onCancelClick: () => undefined,
    onConfirmClick: () => undefined,
    onValueChange: () => undefined,
  };

  public render() {
    return (
      <div className={styles.root}>
        <div className={styles.basic}>
          {Object.values(EditorObjectType).map((t) => this.renderObjectTypeSetting(t))}
        </div>
        <div className={styles.additional}>
          <div className={styles.setting}>
            <GameText size="large">
              <FormattedMessage {...messages.allOverlays} />:
            </GameText>
            {" "}
            <GameCheckbox
              checked={this.props.value.allOverlays}
              onClick={this.onAllOverlaysChange}
            />
          </div>
          <div className={styles.setting}>
            <GameText size="large">
              <FormattedMessage {...messages.clearEntire} />:
            </GameText>
            {" "}
            <GameCheckbox
              checked={this.props.value.clearEntire}
              onClick={this.onClearEntireChange}
            />
          </div>
        </div>
        <Row>
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

  private renderObjectTypeSetting(type: EditorObjectType) {
    // FIXME: ??
    const onClick = (checked: boolean) => this.onObjectTypeSettingChange(type, checked);

    return (
      <div className={styles.setting}>
        <GameText size="large">
          <FormattedMessage {...getEditorObjectTypeNameMessage(type)} />:
        </GameText>
        {" "}
        <GameCheckbox
          checked={this.props.value.objectTypes.includes(type)}
          onClick={onClick}
        />
      </div>
    );
  }

  private readonly onObjectTypeSettingChange = (objectType: EditorObjectType, checked: boolean) => {
    const { value } = this.props;

    const newValue: EraseObjectsSettings = {
      ...value,
      objectTypes: checked ?
        [
          ...value.objectTypes,
          objectType,
        ] :
        value.objectTypes.filter((t) => t !== objectType),
    };

    this.props.onValueChange(newValue);
  }

  private readonly onAllOverlaysChange = (value: boolean) => {
    this.props.onValueChange({
      ...this.props.value,
      allOverlays: value,
    });
  }

  private readonly onClearEntireChange = (value: boolean) => {
    this.props.onValueChange({
      ...this.props.value,
      clearEntire: value,
    });
  }
}

const ComponentWrapped = withGameWindow(480)(EraseOptionSettingsWindow);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as EraseOptionSettingsWindow,
  ComponentWrappedProps as EraseOptionSettingsWindowProps,
};
