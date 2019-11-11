import React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { MapObjectOrientation } from "heroes-core";
import { noop } from "heroes-helpers";
import { MapObjectType } from "heroes-homm1";

import * as styles from "./ObjectsOptionDetails.module.scss";

import { GameText } from "../../core";
import { getMapObjectTypeNameMessage } from "../../messages";
import { EditorObjectSlot } from "../EditorObjectSlot";
import { EditorScrollButton } from "../EditorScrollButton";
import { messages } from "./messages";

interface ObjectsOptionDetailsProps extends InjectedIntlProps {
  readonly onSlotClick: () => void;
  readonly selectedObjectType: MapObjectType;
  readonly onPreviousTypeClick: () => void;
  readonly onNextTypeClick: () => void;
}

type DefaultProp =
  "onSlotClick" |
  "onPreviousTypeClick" |
  "onNextTypeClick";

class ObjectsOptionDetails extends React.Component<ObjectsOptionDetailsProps> {
  public static readonly defaultProps: Pick<ObjectsOptionDetailsProps, DefaultProp> = {
    onNextTypeClick: noop,
    onPreviousTypeClick: noop,
    onSlotClick: noop,
  };

  public render() {
    const optionNumber = Object.values(MapObjectType).indexOf(this.props.selectedObjectType) + 1;
    const optionName = this.props.intl.formatMessage(getMapObjectTypeNameMessage(this.props.selectedObjectType));

    return (
      <div className={styles.root}>
        <div className={styles.object}>
          <EditorObjectSlot
            size="large"
            onClick={this.props.onSlotClick}
          >
            {this.props.children}
          </EditorObjectSlot>
        </div>
        <div className={styles.selector}>
          <EditorScrollButton
            className={styles.previous}
            direction={MapObjectOrientation.West}
            onClick={this.props.onPreviousTypeClick}
          />
          <GameText size="small">
            <FormattedMessage {...messages.objectTypeOptionName} values={{ number: optionNumber, name: optionName }} />
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

const ComponentWrapped = injectIntl(ObjectsOptionDetails);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as ObjectsOptionDetails,
  ComponentWrappedProps as ObjectsOptionDetailsProps,
};
