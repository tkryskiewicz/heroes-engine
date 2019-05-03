import * as React from "react";
import { FormattedMessage } from "react-intl";

import { MapObjectOrientation } from "heroes-core";
import { EditorObjectType } from "heroes-homm1";

import * as styles from "./ObjectsOptionDetails.module.scss";

import { GameText } from "../../core";
import { getEditorObjectTypeNameMessage } from "../../messages";
import { EditorObjectSlot } from "../EditorObjectSlot";
import { EditorScrollButton } from "../EditorScrollButton";

export interface ObjectsOptionDetailsProps {
  readonly onSlotClick: () => void;
  readonly selectedObjectType: EditorObjectType;
  readonly onPreviousTypeClick: () => void;
  readonly onNextTypeClick: () => void;
  readonly renderObject: () => React.ReactNode;
}

type DefaultProp =
  "onSlotClick" |
  "onPreviousTypeClick" |
  "onNextTypeClick" |
  "renderObject";

// TODO: refactor to accept children
export class ObjectsOptionDetails extends React.Component<ObjectsOptionDetailsProps> {
  public static readonly defaultProps: Pick<ObjectsOptionDetailsProps, DefaultProp> = {
    onNextTypeClick: () => undefined,
    onPreviousTypeClick: () => undefined,
    onSlotClick: () => undefined,
    renderObject: () => undefined,
  };

  public render() {
    return (
      <div className={styles.root}>
        <div className={styles.object}>
          <EditorObjectSlot
            size="large"
            onClick={this.props.onSlotClick}
          >
            {this.props.renderObject()}
          </EditorObjectSlot>
        </div>
        <div className={styles.selector}>
          <EditorScrollButton
            className={styles.previous}
            direction={MapObjectOrientation.West}
            onClick={this.props.onPreviousTypeClick}
          />
          <GameText size="small">
            <FormattedMessage {...getEditorObjectTypeNameMessage(this.props.selectedObjectType)} />
          </GameText>
          <EditorScrollButton
            className={styles.next}
            direction={MapObjectOrientation.East}
            onClick={this.props.onNextTypeClick}
          />
        </div>
      </div>
    );
  }
}
