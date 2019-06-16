import * as React from "react";
import { FormattedMessage } from "react-intl";

import { EraseObjectsSettings, MapObjectType } from "heroes-homm1";

import * as styles from "./EraseOptionSettingsWindow.module.scss";

import { GameCheckbox } from "../../base";
import { GameText } from "../../core";
import { getMapObjectTypeNameMessage } from "../../messages";
import { EditorSettingsWindow, EditorSettingsWindowProps } from "../EditorSettingsWindow";
import { messages } from "./messages";

export interface EraseOptionSettingsWindowProps extends EditorSettingsWindowProps {
  readonly value: EraseObjectsSettings;
  readonly onValueChange: (value: EraseObjectsSettings) => void;
}

type DefaultProp =
  "onValueChange";

export class EraseOptionSettingsWindow extends React.Component<EraseOptionSettingsWindowProps> {
  public static readonly defaultProps: Pick<EraseOptionSettingsWindowProps, DefaultProp> = {
    onValueChange: () => undefined,
  };

  public render() {
    return (
      <EditorSettingsWindow
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
        onCancelClick={this.props.onCancelClick}
      >
        <div className={styles.root}>
          <div className={styles.basic}>
            {Object.values(MapObjectType).map((t) => this.renderObjectTypeSetting(t))}
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
        </div>
      </EditorSettingsWindow>
    );
  }

  private renderObjectTypeSetting(type: MapObjectType) {
    // FIXME: ??
    const onClick = (checked: boolean) => this.onObjectTypeSettingChange(type, checked);

    return (
      <div
        key={type}
        className={styles.setting}
      >
        <GameText size="large">
          <FormattedMessage {...getMapObjectTypeNameMessage(type)} />:
        </GameText>
        {" "}
        <GameCheckbox
          checked={this.props.value.objectTypes.includes(type)}
          onClick={onClick}
        />
      </div>
    );
  }

  private readonly onObjectTypeSettingChange = (objectType: MapObjectType, checked: boolean) => {
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
