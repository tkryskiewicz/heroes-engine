import { Col, Row } from "antd";
import * as React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";

import { Resources, Structure } from "heroes-core";
import { getStructureStatus, StructureStatus } from "heroes-homm1";

import "./StructuresWindow.scss";

import { getStructureNameMessage } from "../../messages";
import {
  withTownDetailWindow,
  WithTownDetailWindowInjectedProps,
  WithTownDetailWindowProps,
  WithTownDetailWindowRef,
} from "../../TownDetailWindow";
import { StructureStatusImage } from "../StructureStatusImage";
import { getStructureStatusMessage, messages } from "./messages";

export interface StructuresWindowProps extends
  InjectedIntlProps,
  WithTownDetailWindowInjectedProps,
  WithTownDetailWindowProps {
  town: string;
  canConstructStructures: boolean;
  structures: Structure[];
  resources: Resources;
}

class StructuresWindow extends React.Component<StructuresWindowProps> implements WithTownDetailWindowRef {
  public componentDidMount() {
    this.setDefaultStatusText();
  }

  public render() {
    const { town, structures, canConstructStructures, resources } = this.props;

    return (
      <div className="structures-window">
        <Row>
          {structures.map((s) => this.renderStructure(town, s, canConstructStructures, resources))}
        </Row>
      </div>
    );
  }

  public onExitMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(messages.exitStatusText);

    this.props.onStatusTextChange(statusText);
  }

  public onExitMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private renderStructure(town: string, structure: Structure, canConstructStrucutes: boolean, resources: Resources) {
    const status = getStructureStatus(structure, canConstructStrucutes, resources);

    return (
      <Col
        key={structure.id}
        span={6}
      >
        <StructureStatusImage
          town={town}
          structure={structure.id}
          status={status}
          onMouseEnter={this.onStructureMouseEnter}
          onMouseLeave={this.onStructureMouseLeave}
        />
      </Col>
    );
  }

  private onStructureMouseEnter = (structure: string, status: StructureStatus) => {
    const { formatMessage } = this.props.intl;

    const structureName = formatMessage(getStructureNameMessage(structure));

    const statusText = formatMessage(getStructureStatusMessage(status), { structureName });

    this.props.onStatusTextChange(statusText);
  }

  private onStructureMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private setDefaultStatusText() {
    const statusText = this.props.intl.formatMessage(messages.defaultStatusText);

    this.props.onStatusTextChange(statusText);
  }
}

const StructuresWindowWrapped = injectIntl(
  withTownDetailWindow()(StructuresWindow),
);

export {
  StructuresWindowWrapped as StructuresWindow,
};
